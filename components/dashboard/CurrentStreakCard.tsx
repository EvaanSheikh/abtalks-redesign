"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Student } from "@/types/Student";

import {
  Flame,
  Trophy,
  RotateCcw,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface CurrentStreakCardProps {
  student: Student;
}

export default function CurrentStreakCard({
  student,
}: CurrentStreakCardProps) {
  const progressToNextMilestone =
    student.currentStreak >= 30
      ? 100
      : (student.currentStreak / 30) * 100;

  return (
    <Card
className="
group
relative
overflow-hidden
rounded-3xl
border
border-zinc-800
bg-zinc-950/70
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-1
hover:border-violet-500/40
hover:shadow-[0_20px_80px_rgba(124,58,237,.12)]
"
>

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Current Streak
          </p>

          {student.currentStreak > 0 ? (
            <>
              <div className="mt-5 flex items-end gap-3">

                <Flame className="h-10 w-10 text-orange-500" />

                <span className="text-6xl font-bold leading-none text-white">
                  {student.currentStreak}
                </span>

                <span className="mb-2 text-lg text-zinc-400">
                  Days
                </span>

              </div>

              <p className="mt-4 text-sm text-zinc-400">
                You're building real consistency. Keep your momentum alive.
              </p>
            </>
          ) : (
            <>
              <h2 className="mt-5 text-3xl font-bold text-white">
                Start Your First Streak
              </h2>

              <p className="mt-3 text-zinc-400">
                Complete today's challenge to begin your journey.
              </p>
            </>
          )}

        </div>

        {student.recoveryAvailable && (
          <Badge className="border border-amber-500/30 bg-amber-500/10 text-amber-300">
            Recovery
          </Badge>
        )}

      </div>

      <div className="mt-8 space-y-6">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">

          <div className="flex items-center gap-3">

            <Trophy className="h-5 w-5 text-yellow-400" />

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Longest Streak
              </p>

              <p className="text-xl font-semibold text-white">
                {student.longestStreak} Days
              </p>
            </div>

          </div>

        </div>

        <div>

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm text-zinc-400">
              Progress to 30-Day Badge
            </span>

            <div className="flex items-center gap-1 text-violet-400">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">
                {Math.round(progressToNextMilestone)}%
              </span>
            </div>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 transition-all duration-700"
              style={{
                width: `${progressToNextMilestone}%`,
              }}
            />

          </div>

          <p className="mt-3 text-sm text-zinc-500">
            {Math.max(30 - student.currentStreak, 0)} days until your next milestone.
          </p>

        </div>

        {student.recoveryAvailable && (

          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">

            <div className="flex gap-3">

              <RotateCcw className="mt-1 h-5 w-5 text-amber-400" />

              <div>

                <h3 className="font-semibold text-white">
                  Momentum Recovery
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Complete today's challenge and a recovery task to restore your streak.
                </p>

                <Button
                  variant="ghost"
                  className="mt-4 px-0 text-violet-400 hover:text-violet-300"
                >
                  Recover Now

                  <ChevronRight className="ml-1 h-4 w-4" />

                </Button>

              </div>

            </div>

          </div>

        )}

      </div>

    </Card>
  );
}