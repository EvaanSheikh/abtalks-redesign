interface SubmissionFormProps {
  githubRepository: string;
  githubCommit: string;
  linkedinPost: string;
  reflection: string;
}

export default function SubmissionForm({
  githubRepository,
  githubCommit,
  linkedinPost,
  reflection,
}: SubmissionFormProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-white">
      <h2 className="text-lg font-semibold">
        Submit Your Work
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        Add the links below to complete today's challenge.
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            GitHub Repository
          </label>

          <input
            value={githubRepository}
            readOnly
            className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            GitHub Commit
          </label>

          <input
            value={githubCommit}
            readOnly
            className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            LinkedIn Post
          </label>

          <input
            value={linkedinPost}
            readOnly
            className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Reflection
          </label>

          <textarea
            value={reflection}
            readOnly
            className="min-h-32 w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4"
          />
        </div>

        <button className="h-12 w-full rounded-xl bg-violet-600 font-medium text-white">
          Submit Challenge
        </button>
      </div>
    </section>
  );
}