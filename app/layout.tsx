import ChallengeHeader from "@/components/ChallengeHeader";
import TaskOverview from "@/components/TaskOverview";
import DifficultyBadge from "@/components/DifficultyBadge";
import ResourceList from "@/components/ResourceList";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 p-5">
      <div className="mx-auto flex max-w-md flex-col gap-4">
        <ChallengeHeader
          day={1}
          title="Two Sum"
          description="Solve today's challenge and upload your work."
          estimatedTime="30 min"
          difficulty="Easy"
        />

        <TaskOverview
          title="Two Sum"
          description="Find two numbers whose sum is equal to the target value."
          technologies={["Arrays", "HashMap", "C++"]}
        />

        <DifficultyBadge difficulty="Easy" />

        <ResourceList
          resources={[
            {
              title: "LeetCode Problem",
              url: "https://leetcode.com/problems/two-sum/",
            },
            {
              title: "Arrays Tutorial",
              url: "https://www.geeksforgeeks.org/array-data-structure/",
            },
          ]}
        />
      </div>
    </main>
  );
}