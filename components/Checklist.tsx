interface ChecklistItem {
  id: number;
  title: string;
  completed: boolean;
}

interface ChecklistProps {
  items: ChecklistItem[];
}

export default function Checklist({ items }: ChecklistProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-white">
      <h2 className="text-lg font-semibold">Checklist</h2>

      <p className="mt-2 text-sm text-zinc-400">
        Complete every task before submitting.
      </p>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-xl border border-zinc-800 p-4"
          >
            <input
              type="checkbox"
              checked={item.completed}
              readOnly
              className="h-4 w-4"
            />

            <span className="text-sm">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}