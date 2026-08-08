interface ChallengeProgressProps {
  completed: number;
  total: number;
}

export default function ChallengeProgress({
  completed,
  total,
}: ChallengeProgressProps) {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Challenge Progress
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Complete all tasks to finish today's challenge.
          </p>
        </div>

        <div className="rounded-full bg-violet-600/10 px-4 py-2 text-lg font-bold text-violet-400">
          {percentage}%
        </div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-violet-600 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          Completed Tasks
        </p>

        <p className="font-semibold text-white">
          {completed} / {total}
        </p>
      </div>
    </section>
  );
}