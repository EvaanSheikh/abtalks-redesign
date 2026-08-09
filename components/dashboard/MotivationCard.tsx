"use client";

import {
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Card } from "@/components/ui/card";

import { Student } from "@/types/Student";

interface MotivationCardProps {
  student: Student;
}

export default function MotivationCard({
  student,
}: MotivationCardProps) {
  const remaining =
    30 - student.currentStreak;

  const message =
    student.currentStreak === 0
      ? "Complete today's challenge to begin your first streak."
      : remaining > 0
      ? `You're only ${remaining} days away from your next badge.`
      : "You're building an incredible habit. Keep going.";

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

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>

        <div className="flex-1">

          <h2 className="text-lg font-semibold">
            Daily Insight
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {message}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-primary">

            <TrendingUp className="h-4 w-4" />

            <span>
              Every completed day strengthens your learning momentum.
            </span>

          </div>

        </div>

      </div>

    </Card>
  );
}