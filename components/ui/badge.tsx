import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-violet-600 text-white hover:bg-violet-500",

        secondary:
          "border-transparent bg-zinc-800 text-zinc-100 hover:bg-zinc-700",

        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",

        outline:
          "border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-800",

        success:
          "border-green-500/20 bg-green-500/10 text-green-400",

        warning:
          "border-amber-500/20 bg-amber-500/10 text-amber-400",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>) {
  return (
    <div
      data-slot="badge"
      className={cn(
        badgeVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };