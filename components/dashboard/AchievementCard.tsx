"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import { Lock, CheckCircle2, Sparkles } from "lucide-react";

import { Achievement } from "@/types/Achievement";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  return (
    <Card
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${
          achievement.unlocked
            ? "border-violet-500/30 bg-gradient-to-br from-violet-950/40 to-zinc-900 hover:border-violet-400"
            : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700"
        }
      `}
    >
      {achievement.unlocked && (
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />
      )}

      <div className="relative flex items-start justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-3xl">
          {achievement.icon}
        </div>

        {achievement.unlocked ? (
          <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-xs font-medium">
              Unlocked
            </span>
          </div>
        ) : (
          <div className="rounded-full bg-zinc-800 p-2">
            <Lock className="h-4 w-4 text-zinc-500" />
          </div>
        )}

      </div>

      <div className="relative mt-6">

        <h3 className="text-lg font-semibold text-white">
          {achievement.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {achievement.description}
        </p>

      </div>

      {achievement.unlocked ? (

        <div className="mt-6 flex items-center gap-2 text-violet-300">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm">
            Achievement Earned
          </span>
        </div>

      ) : (

        <div className="mt-6">

          <div className="mb-2 flex justify-between text-xs">

            <span className="text-zinc-500">
              Progress
            </span>

            <span className="text-white">
              {achievement.progress}%
            </span>

          </div>

          <Progress value={achievement.progress} />

        </div>

      )}

    </Card>
  );
}