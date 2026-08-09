import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

type ButtonSize =
  | "sm"
  | "default"
  | "lg"
  | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  
}

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-[#6D5DF6] text-white hover:bg-[#5B4CF2]",

  secondary:
    "bg-[#18181B] border border-[#27272A] text-white hover:bg-[#222225]",

  outline:
    "border border-[#27272A] bg-transparent text-white hover:bg-[#18181B]",

  ghost:
    "bg-transparent text-white hover:bg-[#18181B]",

  destructive:
    "bg-[#EF4444] text-white hover:bg-red-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  default: "h-12 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10",
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
  {
  className,
  variant = "default",
  size = "default",
  disabled,
  children,
  ...props
},
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-[#6D5DF6]",
          "disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";