import { CheckCircle2, Code2, Target } from "lucide-react";

interface TaskOverviewProps {
  title: string;
  description: string;
  technologies: string[];
  expectedOutput: string;
  learningObjectives: string[];
}

export default function TaskOverview({
  title,
  description,
  technologies,
  expectedOutput,
  learningObjectives,
}: TaskOverviewProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex items-center gap-2">
        <Target className="text-violet-400" size={20} />

        <h2 className="text-xl font-bold text-white">
          Today's Goal
        </h2>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
        <p className="text-xs uppercase tracking-wider text-zinc-500">
          Expected Output
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-300">
          {expectedOutput}
        </p>
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <Code2 className="text-violet-400" size={20} />

          <h3 className="text-lg font-semibold text-white">
            Technologies
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white">
          Learning Objectives
        </h3>

        <div className="mt-4 space-y-4">
          {learningObjectives.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-3"
            >
              <CheckCircle2
                className="mt-0.5 text-green-400"
                size={18}
              />

              <p className="text-sm leading-6 text-zinc-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}