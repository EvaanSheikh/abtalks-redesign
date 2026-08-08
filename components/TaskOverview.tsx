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
        <Target size={18} className="text-violet-400" />

        <h2 className="text-lg font-semibold text-white">
          Today's Goal
        </h2>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
        <p className="text-xs uppercase tracking-wider text-zinc-500">
          Expected Output
        </p>

        <p className="mt-2 text-sm text-zinc-300">
          {expectedOutput}
        </p>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center gap-2">
          <Code2 size={18} className="text-violet-400" />

          <h3 className="text-sm font-semibold text-white">
            Technologies
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold text-white">
          Learning Objectives
        </h3>

        <div className="space-y-3">
          {learningObjectives.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={18}
                className="mt-0.5 text-green-400"
              />

              <p className="text-sm text-zinc-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}