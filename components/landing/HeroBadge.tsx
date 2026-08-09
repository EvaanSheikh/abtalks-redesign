import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface HeroBadgeProps {
  text: string;
}

export default function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border-zinc-700
        bg-zinc-900/70
        px-4
        py-2
        text-sm
        font-medium
        text-zinc-200
      "
    >
      <Sparkles
        className="h-4 w-4 text-[#6D5DF6]"
        aria-hidden="true"
      />

      <span>{text}</span>
    </Badge>
  );
}