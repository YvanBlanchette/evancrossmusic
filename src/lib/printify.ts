type PrintifyShop = {
  id: string | number;
};

type PrintifyImage = {
  src?: string;
  is_default?: boolean;
  position?: number;
};

export type PrintifyProduct = {
  id: string;
  title: string;
  image?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

async function fetchPrintifyJson(path: string): Promise<unknown> {
  const apiKey = process.env.PRINTIFY_API_KEY;
  if (!apiKey) {
    throw new Error("PRINTIFY_API_KEY is required to fetch the Printify shop.");
  }

  const response = await fetch(`https://api.printify.com/v1${path}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(
      `Printify API request failed for ${path} (${response.status} ${response.statusText}).`,
    );
  }

  return response.json();
}

function readProducts(payload: unknown): PrintifyProduct[] {
  const items = Array.isArray(payload)
    ? payload
    : isRecord(payload) && Array.isArray(payload.data)
      ? payload.data
      : null;

  if (!items) {
    throw new Error("Printify returned an unexpected products response.");
  }

  return items.flatMap((item): PrintifyProduct[] => {
    if (
      !isRecord(item) ||
      typeof item.id !== "string" ||
      typeof item.title !== "string" ||
      item.visible === false
    ) {
      return [];
    }

    const images = Array.isArray(item.images)
      ? item.images.filter(
          (image): image is PrintifyImage =>
            isRecord(image) && typeof image.src === "string",
        )
      : [];
    const image =
      images.find((candidate) => candidate.is_default)?.src ??
      images.sort((a, b) => (a.position ?? 0) - (b.position ?? 0))[0]?.src;

    return [{ id: item.id, title: item.title, image }];
  });
}

export async function getPrintifyProducts(): Promise<PrintifyProduct[]> {
  if (!process.env.PRINTIFY_API_KEY) {
    return [];
  }

  const shops = await fetchPrintifyJson("/shops.json");
  if (!Array.isArray(shops)) {
    throw new Error("Printify returned an unexpected shops response.");
  }

  const configuredShopId = process.env.PRINTIFY_SHOP_ID;
  let shop: PrintifyShop | undefined;

  if (configuredShopId) {
    shop = shops.find(
      (candidate): candidate is PrintifyShop =>
        isRecord(candidate) &&
        String(candidate.id) === configuredShopId &&
        (typeof candidate.id === "string" || typeof candidate.id === "number"),
    );
    if (!shop) {
      throw new Error(
        "PRINTIFY_SHOP_ID does not match a shop available to this API key.",
      );
    }
  } else if (shops.length === 1 && isRecord(shops[0])) {
    const candidate = shops[0];
    if (typeof candidate.id === "string" || typeof candidate.id === "number") {
      shop = { id: candidate.id };
    }
  } else if (shops.length > 1) {
    throw new Error(
      "Set PRINTIFY_SHOP_ID because this Printify account has multiple shops.",
    );
  }

  if (!shop) {
    throw new Error("No Printify shop was found for this API key.");
  }

  const productPayload = await fetchPrintifyJson(
    `/shops/${encodeURIComponent(String(shop.id))}/products.json?limit=10&page=1`,
  );
  return readProducts(productPayload).slice(0, 4);
}
