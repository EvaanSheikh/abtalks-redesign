"use client";

import { motion } from "framer-motion";
import { Clock3, Flame, Trophy } from "lucide-react";

interface ChallengeHeaderProps {
  day: number;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedTime: string;
  progress: number;
}

export default function ChallengeHeader({
  day,
  title,
  description,
  difficulty,
  estimatedTime,
  progress,
}: ChallengeHeaderProps) {
  const difficultyStyle =
    difficulty === "Easy"
      ? "bg-green-500/10 text-green-400"
      : difficulty === "Medium"
      ? "bg-yellow-500/10 text-yellow-400"
      : "bg-red-500/10 text-red-400";

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -3 }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl"
    >
      {/* Day Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="inline-flex rounded-full bg-violet-600/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-300"
      >
        Day {day}
      </motion.div>

      {/* Brand */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400"
      >
        ABTalks Daily Challenge
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-4xl font-bold leading-tight text-white"
      >
        {title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 max-w-3xl text-base leading-7 text-zinc-400"
      >
        {description}
      </motion.p>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <div
          className={`rounded-full px-5 py-2 text-sm font-semibold ${difficultyStyle}`}
        >
          {difficulty}
        </div>

        <div className="flex items-center gap-2 rounded-full bg-zinc-800 px-5 py-2 text-sm text-zinc-300">
          <Clock3 size={16} />
          {estimatedTime}
        </div>

        <div className="flex items-center gap-2 rounded-full bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
          <Flame size={16} />
          Daily Challenge
        </div>
      </motion.div>

      {/* Progress */}
      <div className="mt-10">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-zinc-400">
            Today's Progress
          </span>

          <motion.span
            key={progress}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            className="font-semibold text-violet-400"
          >
            {progress}%
          </motion.span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          />
        </div>
      </div>

      {/* Milestone */}
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.2,
        }}
        className="mt-8 flex items-center justify-between rounded-2xl border border-zinc-800 bg-black p-5"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Current Milestone
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Day {day} of 60
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            Keep your streak alive 🚀
          </p>
        </div>

        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600/10"
        >
          <Trophy
            size={30}
            className="text-violet-400"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}