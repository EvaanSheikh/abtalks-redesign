import { CheckCircle2 } from "lucide-react";

export default function SubmissionSuccess() {
  return (
    <section className="rounded-2xl border border-green-500/20 bg-zinc-950 p-5 text-white">
      <div className="flex items-center gap-3">
        <CheckCircle2
          size={24}
          className="text-green-500"
        />

        <div>
          <h2 className="text-lg font-semibold">
            Challenge submitted
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Your progress has been recorded.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-zinc-900 p-4">
        <p className="text-sm text-zinc-300">
          Day completed successfully.
        </p>

        <p className="mt-2 text-sm text-green-400">
          +1 streak added
        </p>
      </div>
    </section>
  );
}