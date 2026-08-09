"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  CalendarCheck2,
  Flame,
} from "lucide-react";

interface WeeklyActivityProps {
  activity: {
    day: string;
    status: "completed" | "missed" | "recovery" | "today";
  }[];
}

const statusStyles = {
  completed: "bg-green-500",
  missed: "bg-zinc-800 border border-zinc-700",
  recovery: "bg-amber-500",
  today: "bg-violet-500 ring-2 ring-violet-400",
};

export default function WeeklyActivity({
  activity,
}: WeeklyActivityProps) {
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

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-white">
            Weekly Activity
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Stay consistent every day.
          </p>

        </div>

        <Badge variant="secondary">
          7 Days
        </Badge>

      </div>

      {/* Activity Grid */}

      <div className="mt-6 flex justify-between">

        {activity.map((item) => (
          <div
            key={item.day}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`h-10 w-10 rounded-xl transition-all duration-200 ${statusStyles[item.status]}`}
            />

            <span className="text-xs text-zinc-500">
              {item.day}
            </span>
          </div>
        ))}

      </div>

      {/* Legend */}

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-zinc-400">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-green-500" />
          Completed
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-amber-500" />
          Recovery
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-violet-500" />
          Today
        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">

        <Flame className="h-5 w-5 text-orange-500" />

        <div>

          <p className="font-medium text-white">
            Keep the momentum going
          </p>

          <p className="text-sm text-zinc-400">
            Complete today's challenge to extend your streak.
          </p>

        </div>

      </div>

    </Card>
  );
}