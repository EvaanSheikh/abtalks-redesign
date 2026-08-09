"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  const [checklist, setChecklist] = useState(
    challenge.checklist
  );

  // Restore saved data
  useEffect(() => {
    const savedChecklist = localStorage.getItem(
      "challenge-checklist"
    );

    const savedSubmitted = localStorage.getItem(
      "challenge-submitted"
    );

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

  // Save submission
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-5xl flex-col gap-6 p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
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
            progress={Math.round(
              (completedTasks /
                checklist.length) *
                100
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ChallengeProgress
            completed={completedTasks}
            total={checklist.length}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TaskOverview
            title={challenge.title}
            description={challenge.description}
            technologies={
              challenge.technologies
            }
            expectedOutput={
              challenge.expectedOutput
            }
            learningObjectives={
              challenge.learningObjectives
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ResourceList
            resources={challenge.resources}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Checklist
            items={checklist}
            onToggle={toggleChecklist}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {!submitted ? (
            <SubmissionForm
              githubRepository={
                challenge.submission
                  .githubRepository
              }
              githubCommit={
                challenge.submission
                  .githubCommit
              }
              linkedinPost={
                challenge.submission
                  .linkedinPost
              }
              reflection={
                challenge.submission
                  .reflection
              }
              canSubmit={allCompleted}
              onSubmit={() =>
                setSubmitted(true)
              }
            />
          ) : (
            <SubmissionSuccess />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {challenge.recovery.enabled && (
            <RecoveryCard
              missedDays={
                challenge.recovery
                  .missedDays
              }
            />
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}