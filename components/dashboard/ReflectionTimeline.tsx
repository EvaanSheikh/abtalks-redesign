"use client";

import { BookOpen, ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Reflection } from "@/types/Reflection";

interface ReflectionTimelineProps {
  reflections: Reflection[];
}

export default function ReflectionTimeline({
  reflections,
}: ReflectionTimelineProps) {
  if (!reflections.length) {
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
        <h2 className="text-lg font-semibold">
          Learning Timeline
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Your reflections will appear here after you complete
          your first challenge.
        </p>

        <Button className="mt-5 w-full">
          Complete Today's Challenge
        </Button>
      </Card>
    );
  }

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

      <div className="mb-5">

        <h2 className="text-lg font-semibold">
          Learning Timeline
        </h2>

        <p className="text-sm text-muted-foreground">
          Track what you've learned every day.
        </p>

      </div>

      <div className="space-y-5">

        {reflections.map((reflection, index) => (
          <div
            key={reflection.id}
            className="relative flex gap-4"
          >
            {index !== reflections.length - 1 && (
              <div className="absolute left-[14px] top-8 h-full w-px bg-border" />
            )}

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>

            <div className="flex-1 rounded-xl border p-4">

              <div className="flex items-center justify-between">

                <h3 className="font-medium">
                  {reflection.title}
                </h3>

                <span className="text-xs text-muted-foreground">
                  Day {reflection.day}
                </span>

              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {reflection.learned}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="mt-3 px-0"
              >
                View Reflection
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>

            </div>

          </div>
        ))}

      </div>

    </Card>
  );
}