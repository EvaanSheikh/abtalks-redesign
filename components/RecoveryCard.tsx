"use client";

import { motion } from "framer-motion";
import {
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface RecoveryCardProps {
  missedDays: number;
}

export default function RecoveryCard({
  missedDays,
}: RecoveryCardProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -4,
      }}
      className="glass hover-card rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-900 p-6 shadow-lg"
    >
      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <div className="rounded-full bg-amber-500/15 p-3">
            <RotateCcw
              size={24}
              className="text-amber-400"
            />
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-xl font-bold text-white">
                Recovery Available
              </h2>

              <Sparkles
                size={18}
                className="text-yellow-400"
              />

            </div>

            <p className="mt-3 leading-7 text-zinc-400">
              You have missed{" "}
              <span className="font-semibold text-white">
                {missedDays}
              </span>{" "}
              day{missedDays > 1 ? "s" : ""}.
              Complete today's challenge to recover
              your streak.
            </p>

          </div>

        </div>

        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >
          <ShieldCheck
            size={30}
            className="text-green-400"
          />
        </motion.div>

      </div>

      <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

        <p className="text-sm text-green-300">
          ✅ Finish today's challenge and your
          learning streak will continue.
        </p>

      </div>

      <motion.button
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="mt-6 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
      >
        Recover My Streak
      </motion.button>

    </motion.section>
  );
}