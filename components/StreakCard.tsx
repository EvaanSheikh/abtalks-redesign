interface StreakCardProps {
  streak: number;
}

export default function StreakCard({
  streak,
}: StreakCardProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-zinc-400">
        Current Streak
      </p>

      <h2 className="mt-2 text-4xl font-bold text-orange-400">
        🔥 {streak}
      </h2>

      <p className="mt-3 text-sm text-zinc-500">
        Keep solving daily.
      </p>
    </section>
  );
}