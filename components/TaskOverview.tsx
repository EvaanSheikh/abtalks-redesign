"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Target,
  Sparkles,
} from "lucide-react";

interface TaskOverviewProps {
  title: string;
  description: string;
  technologies: string[];
  expectedOutput: string;
  learningObjectives: string[];
}

export default function TaskOverview({
  description,
  technologies,
  expectedOutput,
  learningObjectives,
}: TaskOverviewProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -3,
        transition: { duration: 0.2 },
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-violet-600/10 p-3">
          <Target
            size={20}
            className="text-violet-400"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            Today's Goal
          </h2>

          <p className="text-sm text-zinc-400">
            Complete today's coding challenge successfully.
          </p>
        </div>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-zinc-400 leading-7"
      >
        {description}
      </motion.p>

      {/* Expected Output */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
      >
        <div className="flex items-center gap-2">
          <Sparkles
            size={18}
            className="text-yellow-400"
          />

          <h3 className="font-semibold text-white">
            Expected Output
          </h3>
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {expectedOutput}
        </p>
      </motion.div>

      {/* Technologies */}
      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <Code2
            size={18}
            className="text-violet-400"
          />

          <h3 className="font-semibold text-white">
            Technologies
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.1 * index,
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="mt-8">
        <h3 className="mb-4 font-semibold text-white">
          Learning Objectives
        </h3>

        <div className="space-y-4">
          {learningObjectives.map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.15 * index,
                }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 text-green-400"
                />

                <p className="text-sm leading-6 text-zinc-300">
                  {item}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}