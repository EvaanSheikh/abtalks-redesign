import { cn } from "@/lib/utils";

interface StatChipProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatChip({
  value,
  label,
  className,
}: StatChipProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/70 px-5 py-4 transition-colors",
        className
      )}
    >
      <span className="text-2xl font-bold tracking-tight text-white">
        {value}
      </span>

      <span className="mt-1 text-sm text-zinc-400">
        {label}
      </span>
    </div>
  );
}