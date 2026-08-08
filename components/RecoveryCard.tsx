interface RecoveryCardProps {
  missedDays: number;
}

export default function RecoveryCard({
  missedDays,
}: RecoveryCardProps) {
  return (
    <section className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-zinc-900 p-6">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-3xl">
          🔥
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Momentum Recovery
          </h2>

          <p className="mt-1 text-zinc-400">
            You missed {missedDays} day{missedDays > 1 ? "s" : ""}.
          </p>
        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

        <h3 className="text-lg font-semibold text-white">
          Restore Your Streak
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Complete today's challenge along with one recovery task.
          Your streak will continue without starting over.
        </p>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-center">

          <p className="text-sm text-zinc-500">
            Recovery Tasks
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            1
          </h3>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-center">

          <p className="text-sm text-zinc-500">
            Reward
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-400">
            Streak Restored
          </h3>

        </div>

      </div>

      <button
        className="mt-6 h-12 w-full rounded-xl bg-amber-500 font-semibold text-black transition hover:bg-amber-400"
      >
        Start Recovery Challenge
      </button>

    </section>
  );
}