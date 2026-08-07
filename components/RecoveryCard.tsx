import { RotateCcw } from "lucide-react";

interface RecoveryCardProps {
  missedDays: number;
}

export default function RecoveryCard({
  missedDays,
}: RecoveryCardProps) {
  return (
    <section className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-5 text-white">
      <div className="flex items-center gap-3">
        <RotateCcw size={22} className="text-yellow-500" />

        <div>
          <h2 className="text-lg font-semibold">
            Momentum Recovery
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            You missed {missedDays} day.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-zinc-800 p-4">
        <p className="text-sm text-zinc-300">
          Complete today's challenge and one recovery task to restore
          your streak.
        </p>
      </div>

      <button className="mt-5 h-12 w-full rounded-xl bg-yellow-500 px-4 font-medium text-black">
        Start recovery challenge
      </button>
    </section>
  );
}