"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

interface SubmissionFormProps {
  githubRepository: string;
  githubCommit: string;
  linkedinPost: string;
  reflection: string;
  onSubmit: () => void;
  canSubmit: boolean;
}

export default function SubmissionForm({
  githubRepository,
  githubCommit,
  linkedinPost,
  reflection,
  onSubmit,
  canSubmit,
}: SubmissionFormProps) {
  const [repo, setRepo] = useState(githubRepository);
  const [commit, setCommit] = useState(githubCommit);
  const [linkedin, setLinkedin] = useState(linkedinPost);
  const [notes, setNotes] = useState(reflection);

  const handleSubmit = () => {
    if (!repo.trim()) {
      toast.error("Enter GitHub Repository URL");
      return;
    }

    if (!commit.trim()) {
      toast.error("Enter GitHub Commit URL");
      return;
    }

    if (!linkedin.trim()) {
      toast.error("Enter LinkedIn Post URL");
      return;
    }

    toast.success("🎉 Challenge Submitted Successfully!");

    confetti({
      particleCount: 120,
      spread: 80,
      origin: {
        y: 0.6,
      },
    });

    onSubmit();
  };

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white">
        Submit Today's Challenge
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        Complete all checklist items before submitting.
      </p>

      <div className="mt-6 space-y-5">

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            GitHub Repository
          </label>

          <input
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            placeholder="https://github.com/username/project"
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            GitHub Commit
          </label>

          <input
            value={commit}
            onChange={(e) => setCommit(e.target.value)}
            placeholder="Commit URL"
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            LinkedIn Post
          </label>

          <input
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="LinkedIn Post URL"
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Reflection
          </label>

          <textarea
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="What did you learn today?"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none focus:border-violet-500"
          />
        </div>

        <button
          type="button"
          disabled={!canSubmit}
          onClick={handleSubmit}
          className={`h-12 w-full rounded-xl font-semibold transition ${
            canSubmit
              ? "bg-violet-600 text-white hover:bg-violet-500"
              : "cursor-not-allowed bg-zinc-700 text-zinc-400"
          }`}
        >
          {canSubmit
            ? "Submit Challenge"
            : "Complete Checklist First"}
        </button>

      </div>
    </section>
  );
}