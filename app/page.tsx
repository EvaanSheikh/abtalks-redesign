import ChallengeHeader from "@/components/ChallengeHeader";
import TaskOverview from "@/components/TaskOverview";
import DifficultyBadge from "@/components/DifficultyBadge";
import ResourceList from "@/components/ResourceList";
import Checklist from "@/components/Checklist";
import SubmissionForm from "@/components/SubmissionForm";
import SubmissionSuccess from "@/components/SubmissionSuccess";
import RecoveryCard from "@/components/RecoveryCard";

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
              url:
                "https://www.geeksforgeeks.org/array-data-structure/",
            },
            {
              title: "Hash Map Tutorial",
              url:
                "https://www.geeksforgeeks.org/hashing-data-structure/",
            },
          ]}
        />

        <Checklist
          items={[
            {
              id: 1,
              title: "Complete the challenge",
              completed: true,
            },
            {
              id: 2,
              title: "Push the code to GitHub",
              completed: false,
            },
            {
              id: 3,
              title: "Create a LinkedIn post",
              completed: false,
            },
          ]}
        />

        <SubmissionForm
          githubRepository="https://github.com/devansh/two-sum"
          githubCommit="a9d4f12"
          linkedinPost="https://linkedin.com/posts/devansh"
          reflection="Today I learned how to solve the Two Sum problem using a hash map."
        />
      </div>
      <SubmissionSuccess />
      <RecoveryCard missedDays={1} />
    </main>
  );
}