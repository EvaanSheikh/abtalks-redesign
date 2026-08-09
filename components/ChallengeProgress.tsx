"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

interface ChallengeProgressProps {
  completed: number;
  total: number;
}

export default function ChallengeProgress({
  completed,
  total,
}: ChallengeProgressProps) {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      whileHover={{
        y: -3,
        transition: { duration: 0.2 },
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Target
              size={20}
              className="text-violet-400"
            />

            <h2 className="text-xl font-bold text-white">
              Challenge Progress
            </h2>
          </div>

          <p className="mt-2 text-sm text-zinc-400">
            Track your progress for today's challenge.
          </p>
        </div>

        <motion.div
          key={percentage}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="rounded-full bg-violet-600/10 px-5 py-3 text-lg font-bold text-violet-400"
        >
          {percentage}%
        </motion.div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${percentage}%`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"
        />
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-500/10 p-2">
            <CheckCircle2
              size={18}
              className="text-green-400"
            />
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Completed Tasks
            </p>

            <p className="text-lg font-semibold text-white">
              {completed} / {total}
            </p>
          </div>
        </div>

        <motion.div
          animate={{
            scale: percentage === 100 ? [1, 1.15, 1] : 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="rounded-full bg-violet-600/10 px-4 py-2 font-bold text-violet-400"
        >
          {percentage === 100
            ? "Completed 🎉"
            : "In Progress"}
        </motion.div>
      </div>
    </motion.section>
  );
}
