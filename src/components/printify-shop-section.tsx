import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PrintifyProduct } from "@/lib/printify";

export function PrintifyShopSection({
  products,
  shopUrl,
}: {
  products: PrintifyProduct[];
  shopUrl?: string;
}) {
  return (
    <section
      id="store"
      className="scroll-mt-6 bg-[#eee5d4] px-6 py-16 sm:px-12 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[.6fr_1.4fr_.8fr]">
          <span className="text-[9px] tracking-[.2em] text-muted-foreground">
            04 / THE MERCH
          </span>
          <h2 className="text-4xl tracking-[-.04em] sm:text-6xl">
            Wear the <em className="font-serif text-[#9a7b52]">songs.</em>
          </h2>
          <p className="text-xs leading-6 text-muted-foreground">
            A little piece of the music,
            <br />
            made to go wherever you do.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const content = (
                <>
                  <div className="relative aspect-square overflow-hidden bg-[#e1d7c5]">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="grid size-full place-items-center px-6 text-center font-serif text-2xl">
                        Evan Cross
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-4 py-4">
                    <h3 className="text-sm">{product.title}</h3>
                    {shopUrl && (
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-muted-foreground"
                      />
                    )}
                  </div>
                </>
              );

              return shopUrl ? (
                <a
                  key={product.id}
                  href={shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {content}
                </a>
              ) : (
                <article key={product.id} className="group">
                  {content}
                </article>
              );
            })}
          </div>
        ) : (
          <p className="border-t border-border pt-6 text-sm text-muted-foreground">
            New merch is on the way. Check back soon.
          </p>
        )}

        {shopUrl && (
          <a
            href={shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-8 border-b border-current/30 py-3 text-xs font-semibold transition-colors hover:text-[#9a7b52]"
          >
            Visit the shop
            <ArrowUpRight className="size-5" />
          </a>
        )}
      </div>
    </section>
  );
}
