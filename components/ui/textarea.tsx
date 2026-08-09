import * as React from "react";

import { cn } from "@/lib/utils";
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[120px] w-full rounded-xl border border-[#27272A] bg-[#111113] p-4 text-sm text-white outline-none",
        "placeholder:text-[#71717A]",
        "focus:border-[#6D5DF6]",
        "focus:ring-2 focus:ring-[#6D5DF6]/30",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";