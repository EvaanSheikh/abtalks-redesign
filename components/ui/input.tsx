import * as React from "react";

import { cn } from "@/lib/utils";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-xl border border-[#27272A] bg-[#111113] px-4 text-sm text-white outline-none",
        "placeholder:text-[#71717A]",
        "focus:border-[#6D5DF6]",
        "focus:ring-2 focus:ring-[#6D5DF6]/30",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";