"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Trophy,
  Flame,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function SubmissionSuccess() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        type: "spring",
      }}
      className="overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 via-zinc-900 to-violet-900/20 p-8 shadow-xl"
    >
      {/* Success Icon */}

      <motion.div
        initial={{
          scale: 0,
          rotate: -180,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 220,
        }}
        className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20"
      >
        <CheckCircle2
          size={52}
          className="text-green-400"
        />
      </motion.div>

      {/* Title */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.35,
        }}
        className="mt-8 text-center text-4xl font-bold text-white"
      >
        🎉 Challenge Completed!
      </motion.h2>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.45,
        }}
        className="mx-auto mt-3 max-w-xl text-center leading-7 text-zinc-400"
      >
        Great job! Today's coding challenge has been completed
        successfully. Keep your learning streak alive.
      </motion.p>

      {/* Rewards */}

      <div className="mt-10 grid gap-5 md:grid-cols-3">

        <motion.div
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6 text-center"
        >
          <Flame
            className="mx-auto text-orange-400"
            size={32}
          />

          <p className="mt-3 text-sm text-zinc-400">
            Daily Streak
          </p>

          <h3 className="mt-2 text-3xl font-bold text-orange-400">
            +1
          </h3>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6 text-center"
        >
          <Trophy
            className="mx-auto text-violet-400"
            size={32}
          />

          <p className="mt-3 text-sm text-zinc-400">
            XP Earned
          </p>

          <h3 className="mt-2 text-3xl font-bold text-violet-400">
            +150
          </h3>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-center"
        >
          <Sparkles
            className="mx-auto text-yellow-400"
            size={32}
          />

          <p className="mt-3 text-sm text-zinc-400">
            Achievement
          </p>

          <h3 className="mt-2 text-lg font-bold text-yellow-400">
            Consistency
          </h3>
        </motion.div>

      </div>

      {/* Continue Button */}

      <motion.button
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={() => window.location.reload()}
        className="mx-auto mt-10 flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-500"
      >
        Continue Tomorrow

        <ArrowRight size={18} />
      </motion.button>
    </motion.section>
  );
}