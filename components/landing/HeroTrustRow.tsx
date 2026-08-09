import { CheckCircle2 } from "lucide-react";

interface HeroTrustRowProps {
  items: string[];
}

export default function HeroTrustRow({
  items,
}: HeroTrustRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-2"
        >
          <CheckCircle2
            className="h-4 w-4 text-[#22C55E]"
            aria-hidden="true"
          />

          <span className="text-sm text-zinc-400">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}