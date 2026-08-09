interface DifficultyBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard";
}

export default function DifficultyBadge({
  difficulty,
}: DifficultyBadgeProps) {
  const styles = {
    Easy: "bg-green-500/10 text-green-400 border-green-500/20",
    Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Hard: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Difficulty
      </h2>

      <span
        className={`rounded-full border px-3 py-2 text-sm font-medium ${styles[difficulty]}`}
      >
        {difficulty}
      </span>
    </div>
  );
}