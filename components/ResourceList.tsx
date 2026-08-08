import { ArrowUpRight, BookOpen } from "lucide-react";

interface Resource {
  title: string;
  type: string;
  url: string;
}

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({
  resources,
}: ResourceListProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex items-center gap-2">
        <BookOpen className="text-violet-400" size={20} />

        <h2 className="text-lg font-semibold text-white">
          Learning Resources
        </h2>
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        Recommended resources to complete today's challenge.
      </p>

      <div className="mt-6 space-y-4">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition-all duration-200 hover:border-violet-500 hover:bg-zinc-900"
          >
            <div>
              <h3 className="font-medium text-white">
                {resource.title}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                {resource.type}
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-400"
            />
          </a>
        ))}
      </div>
    </section>
  );
}