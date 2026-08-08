"use client";

import { useState } from "react";

import ChallengeHeader from "@/components/ChallengeHeader";
import TaskOverview from "@/components/TaskOverview";
import ResourceList from "@/components/ResourceList";
import Checklist from "@/components/Checklist";
import SubmissionForm from "@/components/SubmissionForm";
import SubmissionSuccess from "@/components/SubmissionSuccess";
import RecoveryCard from "@/components/RecoveryCard";
import ChallengeProgress from "@/components/ChallengeProgress";

import challenge from "@/data/challenge.json";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 p-6">

        <ChallengeHeader
          day={challenge.day}
          title={challenge.title}
          description={challenge.description}
          estimatedTime={challenge.estimatedTime}
          difficulty={
            challenge.difficulty as "Easy" | "Medium" | "Hard"
          }
          progress={challenge.progress}
        />

        <TaskOverview
          title={challenge.title}
          description={challenge.description}
          technologies={challenge.technologies}
          expectedOutput={challenge.expectedOutput}
          learningObjectives={challenge.learningObjectives}
        />

        <ResourceList
          resources={challenge.resources}
        />
      
      <ChallengeProgress
  completed={
    challenge.checklist.filter((item) => item.completed).length
  }
  total={challenge.checklist.length}
/>

        <Checklist
          items={challenge.checklist}
        />

        {!submitted ? (
          <SubmissionForm
            githubRepository={challenge.submission.githubRepository}
            githubCommit={challenge.submission.githubCommit}
            linkedinPost={challenge.submission.linkedinPost}
            reflection={challenge.submission.reflection}
            onSubmit={() => setSubmitted(true)}
          />
        ) : (
          <SubmissionSuccess />
        )}

        {challenge.recovery.enabled && (
          <RecoveryCard
            missedDays={challenge.recovery.missedDays}
          />
        )}
      <ChallengeProgress
  completed={0}
  total={challenge.checklist.length}
/>
      </div>
    </main>
  );
}