"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import { Challenge } from "@/types/Challenge";

import {
  ArrowRight,
  Clock3,
  Code2,
  CalendarDays,
  Target,
} from "lucide-react";

interface TodayChallengeCardProps {
  challenge: Challenge;
  completedDays: number;
  totalDays: number;
}

export default function TodayChallengeCard({
  challenge,
  completedDays,
  totalDays,
}: TodayChallengeCardProps) {
  const progress = (completedDays / totalDays) * 100;

  return (
    <Card className="h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl">

      <div className="flex flex-col gap-8">

        {/* Top */}

        <div className="flex flex-wrap items-center justify-between gap-4">

          <Badge className="px-4 py-1 text-sm">
            Day {challenge.day}
          </Badge>

          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <CalendarDays className="h-4 w-4" />
            {totalDays - completedDays} Days Remaining
          </div>

        </div>

        {/* Title */}

        <div className="space-y-3">

          <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
            Today's Challenge
          </p>

          <h2 className="text-3xl font-bold text-white">
            {challenge.title}
          </h2>

          <p className="max-w-2xl text-zinc-400">
            Complete today's task to continue your learning streak and
            unlock the next milestone.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
              Difficulty
            </p>

            <Badge>
              {challenge.difficulty}
            </Badge>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
              Estimated Time
            </p>

            <div className="flex items-center gap-2 text-white">
              <Clock3 className="h-4 w-4 text-violet-400" />
              {challenge.estimatedTime} mins
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 col-span-2 lg:col-span-1">
            <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
              Goal
            </p>

            <div className="flex items-center gap-2 text-white">
              <Target className="h-4 w-4 text-violet-400" />
              Finish Today's Task
            </div>
          </div>

        </div>

        {/* Technologies */}

        <div>

          <p className="mb-3 text-sm font-medium text-zinc-400">
            Technologies
          </p>

          <div className="flex flex-wrap gap-3">

            {challenge.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full px-3 py-1"
              >
                <Code2 className="mr-2 h-3.5 w-3.5" />
                {tech}
              </Badge>
            ))}

          </div>

        </div>

        {/* Progress */}

        <div className="space-y-3">

          <div className="flex justify-between text-sm">

            <span className="text-zinc-400">
              Overall Progress
            </span>

            <span className="font-medium text-white">
              {completedDays}/{totalDays} Days
            </span>

          </div>

          <Progress value={progress} />

          <p className="text-sm text-zinc-500">
            {Math.round(progress)}% Complete
          </p>

        </div>

        {/* Actions */}

        <div className="flex flex-col gap-4 sm:flex-row">

          <Button className="h-12 flex-1">
            Continue Challenge
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="h-12 flex-1"
          >
            Preview Task
          </Button>

        </div>

      </div>

    </Card>
  );
}