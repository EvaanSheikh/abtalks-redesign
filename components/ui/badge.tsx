import * as React from "react";

type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger";

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-[#6D5DF6] text-white",
  secondary: "bg-[#18181B] text-white",
  outline: "border border-[#3F3F46] text-white bg-transparent",
  success: "bg-[#22C55E]/15 text-[#22C55E]",
  warning: "bg-[#F59E0B]/15 text-[#F59E0B]",
  danger: "bg-[#EF4444]/15 text-[#EF4444]",
};

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}