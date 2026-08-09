"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, ClipboardList } from "lucide-react";

interface ChecklistItem {
  id: number;
  title: string;
  completed: boolean;
}

interface ChecklistProps {
  items: ChecklistItem[];
  onToggle: (id: number) => void;
}

export default function Checklist({
  items,
  onToggle,
}: ChecklistProps) {
  const completed = items.filter(
    (item) => item.completed
  ).length;

  const total = items.length;

  const percentage =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-2">

            <ClipboardList
              size={20}
              className="text-violet-400"
            />

            <h2 className="text-xl font-bold text-white">
              Today's Checklist
            </h2>

          </div>

          <p className="mt-2 text-sm text-zinc-400">
            Complete every task to unlock submission.
          </p>

        </div>

        <motion.div
          key={completed}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          className="rounded-full bg-violet-600/10 px-4 py-2 font-bold text-violet-400"
        >
          {completed}/{total}
        </motion.div>

      </div>

      {/* Checklist */}

      <div className="mt-6 space-y-4">

        {items.map((item, index) => (

          <motion.button
            key={item.id}
            type="button"
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.01,
              borderColor: "#8b5cf6",
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onToggle(item.id)}
            className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
              item.completed
                ? "border-green-500/40 bg-green-500/10"
                : "border-zinc-800 bg-zinc-950"
            }`}
          >
            {item.completed ? (
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                <CheckCircle2
                  size={24}
                  className="text-green-400"
                />
              </motion.div>
            ) : (
              <Circle
                size={24}
                className="text-zinc-500"
              />
            )}

            <p
              className={`flex-1 ${
                item.completed
                  ? "text-green-300 line-through"
                  : "text-white"
              }`}
            >
              {item.title}
            </p>

          </motion.button>

        ))}

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-3 flex justify-between">

          <span className="text-sm text-zinc-400">
            Overall Progress
          </span>

          <motion.span
            key={percentage}
            initial={{
              scale: 1.3,
            }}
            animate={{
              scale: 1,
            }}
            className="font-semibold text-violet-400"
          >
            {percentage}%
          </motion.span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${percentage}%`,
            }}
            transition={{
              duration: 0.8,
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"
          />

        </div>

      </div>
    </motion.section>
  );
}