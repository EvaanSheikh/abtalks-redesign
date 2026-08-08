import { CheckCircle2, Circle } from "lucide-react";

interface ChecklistItem {
  id: number;
  title: string;
  completed: boolean;
}

interface ChecklistProps {
  items: ChecklistItem[];
}

export default function Checklist({
  items,
}: ChecklistProps) {
  const completed = items.filter((item) => item.completed).length;
  const total = items.length;

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Today's Checklist
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Complete each step to finish today's challenge.
          </p>
        </div>

        <div className="rounded-full bg-violet-600/10 px-3 py-1 text-sm font-semibold text-violet-400">
          {completed}/{total}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition-colors hover:border-violet-600"
          >
            {item.completed ? (
              <CheckCircle2
                size={22}
                className="text-green-400"
              />
            ) : (
              <Circle
                size={22}
                className="text-zinc-500"
              />
            )}

            <p
              className={`flex-1 text-sm ${
                item.completed
                  ? "text-zinc-500 line-through"
                  : "text-white"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-zinc-400">
            Overall Progress
          </span>

          <span className="text-violet-400">
            {Math.round((completed / total) * 100)}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-violet-600 transition-all duration-500"
            style={{
              width: `${(completed / total) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}