import { ExternalLink } from "lucide-react";

interface Resource {
  title: string;
  url: string;
}

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({
  resources,
}: ResourceListProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-white">
      <div>
        <h2 className="text-lg font-semibold">Resources</h2>

        <p className="mt-2 text-sm text-zinc-400">
          Use these resources to complete today's challenge.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {resources.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-zinc-800 p-4 transition-all hover:border-zinc-700"
          >
            <div>
              <p className="text-sm font-medium text-white">
                {resource.title}
              </p>

              <p className="mt-1 truncate text-xs text-zinc-500">
                {resource.url}
              </p>
            </div>

            <ExternalLink
              size={18}
              className="text-zinc-400"
            />
          </a>
        ))}
      </div>
    </section>
  );
}