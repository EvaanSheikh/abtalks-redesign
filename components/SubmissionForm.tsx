"use client";

import { useState } from "react";

interface SubmissionFormProps {
  githubRepository: string;
  githubCommit: string;
  linkedinPost: string;
  reflection: string;
  onSubmit: () => void;
}

export default function SubmissionForm({
  githubRepository,
  githubCommit,
  linkedinPost,
  reflection,
  onSubmit,
}: SubmissionFormProps) {
  const [repo, setRepo] = useState(githubRepository);
  const [commit, setCommit] = useState(githubCommit);
  const [linkedin, setLinkedin] = useState(linkedinPost);
  const [notes, setNotes] = useState(reflection);

  const handleSubmit = () => {
    if (!repo.trim()) {
      alert("Please enter your GitHub Repository URL.");
      return;
    }

    if (!commit.trim()) {
      alert("Please enter your GitHub Commit URL.");
      return;
    }

    if (!linkedin.trim()) {
      alert("Please enter your LinkedIn Post URL.");
      return;
    }

    onSubmit();
  };

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold text-white">
        Submit Today's Challenge
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        Share today's work to continue your streak.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            GitHub Repository
          </label>

          <input
            type="url"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            placeholder="https://github.com/username/project"
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            GitHub Commit
          </label>

          <input
            type="url"
            value={commit}
            onChange={(e) => setCommit(e.target.value)}
            placeholder="https://github.com/..."
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            LinkedIn Post
          </label>

          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/posts/..."
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Daily Reflection
          </label>

          <textarea
            rows={5}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="What did you learn today?"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="h-12 w-full rounded-xl bg-violet-600 font-semibold text-white transition hover:bg-violet-500"
        >
          Submit Challenge
        </button>
      </div>
    </section>
  );
}