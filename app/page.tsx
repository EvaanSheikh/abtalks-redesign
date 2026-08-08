"use client";

import { useEffect, useState } from "react";

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

  const [checklist, setChecklist] = useState(challenge.checklist);

  // Restore saved data
  useEffect(() => {
    const savedChecklist = localStorage.getItem("challenge-checklist");
    const savedSubmitted = localStorage.getItem("challenge-submitted");

    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    }

    if (savedSubmitted) {
      setSubmitted(JSON.parse(savedSubmitted));
    }
  }, []);

  // Save checklist
  useEffect(() => {
    localStorage.setItem(
      "challenge-checklist",
      JSON.stringify(checklist)
    );
  }, [checklist]);

  // Save submission status
  useEffect(() => {
    localStorage.setItem(
      "challenge-submitted",
      JSON.stringify(submitted)
    );
  }, [submitted]);

  const toggleChecklist = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  const completedTasks = checklist.filter(
    (item) => item.completed
  ).length;

  const allCompleted =
    completedTasks === checklist.length;

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 p-6">

        <ChallengeHeader
          day={challenge.day}
          title={challenge.title}
          description={challenge.description}
          estimatedTime={challenge.estimatedTime}
          difficulty={
            challenge.difficulty as
              | "Easy"
              | "Medium"
              | "Hard"
          }
          progress={Math.round((completedTasks / checklist.length) * 100)}
        />

        <ChallengeProgress
          completed={completedTasks}
          total={checklist.length}
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

        <Checklist
          items={checklist}
          onToggle={toggleChecklist}
        />

        {!submitted ? (
          <SubmissionForm
            githubRepository={challenge.submission.githubRepository}
            githubCommit={challenge.submission.githubCommit}
            linkedinPost={challenge.submission.linkedinPost}
            reflection={challenge.submission.reflection}
            canSubmit={allCompleted}
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

      </div>
    </main>
  );
}