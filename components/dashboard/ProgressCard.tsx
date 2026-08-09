"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import { Student } from "@/types/Student";

import {
  Target,
  Calendar,
  Trophy,
  TrendingUp,
} from "lucide-react";

interface ProgressCardProps {
  student: Student;
}

export default function ProgressCard({
  student,
}: ProgressCardProps) {
  const progress =
    (student.completedDays / student.totalDays) * 100;

  const remainingDays =
    student.totalDays - student.completedDays;

  const nextMilestone =
    Math.ceil(student.completedDays / 10) * 10;

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
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-500/40
        hover:shadow-[0_20px_80px_rgba(124,58,237,.12)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Overall Progress
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Day {student.completedDays} of {student.totalDays}
          </h2>
        </div>

        <Badge className="bg-violet-500/10 text-violet-300 border border-violet-500/20">
          {Math.round(progress)}%
        </Badge>

      </div>

      {/* Progress */}

      <div className="mt-8 space-y-3">

        <Progress value={progress} />

        <div className="flex justify-between text-xs">

          <span className="text-zinc-500">
            {student.completedDays} Completed
          </span>

          <span className="text-zinc-500">
            {remainingDays} Remaining
          </span>

        </div>

        <p className="text-xs text-zinc-500">
          Stay consistent and you'll reach your next milestone sooner.
        </p>

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-2 gap-5">

        <div
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/60
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-violet-500/30
          "
        >
          <div className="flex items-center gap-2">

            <Calendar className="h-4 w-4 text-violet-400" />

            <span className="text-sm text-zinc-400">
              Remaining
            </span>

          </div>

          <p className="mt-4 text-3xl font-black text-white">
            {remainingDays}
          </p>

          <p className="text-sm text-zinc-500">
            Days Left
          </p>

        </div>

        <div
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/60
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-violet-500/30
          "
        >
          <div className="flex items-center gap-2">

            <Target className="h-4 w-4 text-green-400" />

            <span className="text-sm text-zinc-400">
              Next Goal
            </span>

          </div>

          <p className="mt-4 text-3xl font-black text-white">
            {nextMilestone}
          </p>

          <p className="text-sm text-zinc-500">
            Milestone Day
          </p>

        </div>

      </div>

      {/* Completion Card */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/60
          p-5
          transition-all
          duration-300
          hover:border-violet-500/30
        "
      >
        <div className="flex items-start gap-3">

          <TrendingUp className="mt-1 h-5 w-5 text-violet-400" />

          <div>

            <p className="text-sm text-zinc-400">
              Expected Completion
            </p>

            <p className="mt-2 text-sm leading-6 text-white">
              Continue your current pace and you'll successfully complete
              the entire 60-Day Challenge without breaking your streak.
            </p>

          </div>

        </div>

      </div>

      {/* Milestone */}

      <div
        className="
          mt-5
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-violet-500/20
          bg-violet-500/5
          p-5
        "
      >
        <Trophy className="h-5 w-5 text-violet-400" />

        <p className="text-sm text-zinc-300">
          Only{" "}
          <span className="font-semibold text-white">
            {nextMilestone - student.completedDays} days
          </span>{" "}
          left until your next achievement milestone.
        </p>

      </div>

    </Card>
  );
}