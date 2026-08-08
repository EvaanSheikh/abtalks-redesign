export default function SubmissionSuccess() {
  return (
    <section className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-zinc-900 p-8 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-4xl">
        ✅
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Challenge Submitted
      </h2>

      <p className="mt-3 text-zinc-400">
        Great work! Your submission has been recorded successfully.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <p className="text-sm text-zinc-500">
            Streak Reward
          </p>

          <h3 className="mt-2 text-2xl font-bold text-orange-400">
            +1 Day
          </h3>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <p className="text-sm text-zinc-500">
            XP Earned
          </p>

          <h3 className="mt-2 text-2xl font-bold text-violet-400">
            +150 XP
          </h3>
        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-violet-600/10 border border-violet-500/20 p-5">
        <p className="text-violet-300 font-medium">
          Tomorrow's challenge will unlock automatically.
        </p>
      </div>

    </section>
  );
}