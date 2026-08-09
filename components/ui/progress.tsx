import * as React from "react";

import { cn } from "@/lib/utils";
interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({
  value,
  className,
}: ProgressProps) {
  const progress = Math.min(
    Math.max(value, 0),
    100
  );

  return (
    <div
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-[#27272A]",
        className
      )}
    >
      <div
        className="h-full rounded-full bg-[#6D5DF6] transition-all duration-300"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}