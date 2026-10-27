"use client";
import * as React from "react";
import * as Primitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
export const TooltipProvider = Primitive.Provider;
export const Tooltip = Primitive.Root;
export const TooltipTrigger = Primitive.Trigger;
export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, sideOffset = 10, ...props }, ref) => (
  <Primitive.Portal>
    <Primitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-[60] rounded-md border border-white/15 bg-[#101511] px-3 py-2 text-xs text-[#f6f0e4] shadow-lg animate-in fade-in-0 zoom-in-95 motion-reduce:animate-none",
        className,
      )}
      {...props}
    />
  </Primitive.Portal>
));
TooltipContent.displayName = "TooltipContent";
