import { Clock } from "lucide-react";

interface ChallengeHeaderProps {
  day: number;
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export default function ChallengeHeader({
  day,
  title,
  description,
  estimatedTime,
  difficulty,
}: ChallengeHeaderProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-white">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-sm">
          Day {day}
        </span>

        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Clock size={16} />
          <span>{estimatedTime}</span>
        </div>
      </div>

      <h1 className="mt-5 text-2xl font-bold">{title}</h1>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      <div className="mt-5">
        <span className="rounded-full bg-zinc-800 px-3 py-2 text-sm">
          {difficulty}
        </span>
      </div>
    </section>
  );
}