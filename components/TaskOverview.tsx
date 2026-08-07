interface TaskOverviewProps {
  title: string;
  description: string;
  technologies?: string[];
}

export default function TaskOverview({
  title,
  description,
  technologies = [],
}: TaskOverviewProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-white">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Task Overview</h2>

        <p className="mt-2 text-sm text-zinc-400">
          Complete today's challenge and submit your work.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {description}
          </p>
        </div>

        {technologies.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-medium text-zinc-300">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}