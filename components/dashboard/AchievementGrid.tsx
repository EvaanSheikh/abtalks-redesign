"use client";

import AchievementCard from "./AchievementCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

import { Achievement } from "@/types/Achievement";

interface AchievementGridProps {
  achievements: Achievement[];
}

export default function AchievementGrid({
  achievements,
}: AchievementGridProps) {
  const unlocked = achievements.filter((a) => a.unlocked).length;

 return (
  <Card
    className="
      group
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-950/70
      p-8
      lg:p-10
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-violet-500/40
      hover:shadow-[0_20px_80px_rgba(124,58,237,.12)]
    "
  >
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Achievements
        </h2>

        <p className="mt-2 text-zinc-400">
          Every milestone reflects your consistency.
        </p>
      </div>

      <Badge className="gap-2 bg-violet-500/10 px-3 py-2 text-violet-300">
        <Trophy className="h-4 w-4" />
        {unlocked}/{achievements.length}
      </Badge>
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
        />
      ))}
    </div>
  </Card>
);
}