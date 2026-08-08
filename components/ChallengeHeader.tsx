import { Clock3, Flame, Trophy } from "lucide-react";

interface ChallengeHeaderProps {
  day: number;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedTime: string;
  progress: number;
}

export default function ChallengeHeader({
  day,
  title,
  description,
  difficulty,
  estimatedTime,
  progress,
}: ChallengeHeaderProps) {
  const difficultyStyle =
    difficulty === "Easy"
      ? "bg-green-500/10 text-green-400"
      : difficulty === "Medium"
      ? "bg-yellow-500/10 text-yellow-400"
      : "bg-red-500/10 text-red-400";

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="inline-flex rounded-full bg-violet-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
        Day {day}
      </div>

      <h1 className="mt-5 text-3xl font-bold leading-tight text-white">
        {title}
      </h1>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <div
          className={`rounded-full px-4 py-2 text-sm font-medium ${difficultyStyle}`}
        >
          {difficulty}
        </div>

        <div className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
          <Clock3 size={16} />
          {estimatedTime}
        </div>

        <div className="flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
          <Flame size={16} />
          Daily Challenge
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-zinc-400">
            Today's Progress
          </span>

          <span className="text-sm font-semibold text-violet-400">
            {progress}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-violet-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Current Milestone
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            Day {day} of 60
          </h3>
        </div>

        <div className="rounded-full bg-violet-600/10 p-3">
          <Trophy className="text-violet-400" size={22} />
        </div>
      </div>
    </section>
  );
}