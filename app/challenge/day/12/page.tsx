import ChallengeHeader from "@/components/ChallengeHeader";
import ChallengeProgress from "@/components/ChallengeProgress";
import TaskOverview from "@/components/TaskOverview";

import challengeData from "@/data/challenge.json";

export default function ChallengeDay12Page() {
  const challenge = {
    ...challengeData,
    difficulty: challengeData.difficulty as "Easy" | "Medium" | "Hard",
  };

  const completedTasks = challenge.checklist.filter(
    (task) => task.completed
  ).length;

  const totalTasks = challenge.checklist.length;

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            ABTalks
          </p>

          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Daily Coding Challenge
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Complete today's challenge and keep your learning streak alive.
          </p>
        </div>

        {/* Challenge Header */}
        <ChallengeHeader
          day={challenge.day}
          title={challenge.title}
          description={challenge.description}
          difficulty={challenge.difficulty}
          estimatedTime={challenge.estimatedTime}
          progress={challenge.progress}
        />

        {/* Progress */}
        <div className="mt-6">
          <ChallengeProgress
            completed={completedTasks}
            total={totalTasks}
          />
        </div>

        {/* Main Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Task */}
          <TaskOverview
            title={challenge.title}
            description={challenge.description}
            technologies={challenge.technologies}
            expectedOutput={challenge.expectedOutput}
            learningObjectives={challenge.learningObjectives}
          />

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Challenge Information */}
            <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
              <h2 className="text-lg font-bold text-white">
                Challenge Details
              </h2>

              <div className="mt-5 space-y-4">

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Difficulty
                  </p>

                  <p className="mt-1 font-medium text-white">
                    {challenge.difficulty}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Estimated Time
                  </p>

                  <p className="mt-1 font-medium text-white">
                    {challenge.estimatedTime}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Estimated Effort
                  </p>

                  <p className="mt-1 font-medium text-white">
                    {challenge.estimatedEffort}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Progress
                  </p>

                  <p className="mt-1 font-medium text-violet-400">
                    {challenge.progress}%
                  </p>
                </div>

              </div>
            </section>

            {/* Acceptance Criteria */}
            <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
              <h2 className="text-lg font-bold text-white">
                Acceptance Criteria
              </h2>

              <div className="mt-5 space-y-3">
                {challenge.acceptanceCriteria.map((criterion) => (
                  <div
                    key={criterion}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-500" />

                    <p className="text-sm leading-6 text-zinc-300">
                      {criterion}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Resources */}
            <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
              <h2 className="text-lg font-bold text-white">
                Resources
              </h2>

              <div className="mt-5 space-y-3">
                {challenge.resources.map((resource) => (
                  <a
                    key={resource.url}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-violet-500/40 hover:bg-zinc-900"
                  >
                    <p className="font-medium text-white">
                      {resource.title}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      {resource.type}
                    </p>
                  </a>
                ))}
              </div>
            </section>

          </aside>
        </div>

      </div>
    </main>
  );
}