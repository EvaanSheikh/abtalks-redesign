"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex",
    "shrink-0",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-xl",
    "border",
    "border-transparent",
    "text-sm",
    "font-medium",
    "whitespace-nowrap",
    "transition-all",
    "duration-200",
    "outline-none",
    "select-none",
    "focus-visible:ring-2",
    "focus-visible:ring-violet-500/40",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-violet-600 text-white hover:bg-violet-500",

        secondary:
          "border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800",

        outline:
          "border-zinc-700 bg-transparent text-white hover:bg-zinc-900",

        ghost:
          "border-transparent bg-transparent text-white hover:bg-zinc-900",

        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",

        link:
          "border-transparent bg-transparent text-violet-400 underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 px-4",
        xs: "h-6 px-2.5 text-xs",
        sm: "h-9 px-3",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
        "icon-xs": "h-6 w-6",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      buttonVariants({
        variant,
        size,
      }),
      className
    );

    if (asChild) {
      const child = React.Children.only(children);

      if (!React.isValidElement(child)) {
        throw new Error(
          "Button with asChild requires a single valid React element."
        );
      }

      return React.cloneElement(child, {
        className: cn(
          classes,
          (child.props as { className?: string }).className
        ),
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };