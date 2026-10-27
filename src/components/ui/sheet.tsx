"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;
export const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
    <Dialog.Content
      ref={ref}
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-[min(90vw,450px)] overflow-y-auto border-r border-white/10 bg-[#101511] p-8 text-[#f6f0e4] shadow-xl data-[state=open]:animate-in data-[state=open]:slide-in-from-left data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left motion-reduce:animate-none",
        className,
      )}
      {...props}
    >
      {children}
      <Dialog.Close
        autoFocus
        className="absolute top-6 right-6 grid size-10 place-items-center rounded-full border border-white/20 focus-visible:ring-2 focus-visible:ring-accent hover:bg-white/10"
      >
        <X className="size-4" />
        <span className="sr-only">Close menu</span>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
));
SheetContent.displayName = "SheetContent";
