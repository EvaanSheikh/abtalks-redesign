"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Student } from "@/types/Student";
import { Award, Flame, ArrowRight, Zap } from "lucide-react";

interface GreetingHeaderProps {
  student: Student;
}

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};

export default function GreetingHeader({
  student,
}: GreetingHeaderProps) {
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

      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-5">

          <Avatar className="h-16 w-16 border border-violet-500/30">
            <AvatarImage src={student.avatar} />
            <AvatarFallback className="bg-violet-600 text-xl font-bold text-white">
              {student.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              {getGreeting()}
            </p>

            <h1 className="text-3xl font-bold text-white lg:text-4xl">
              {student.name}
            </h1>

            <p className="text-base text-zinc-400">
              {student.track}
            </p>

            <p className="max-w-xl text-sm text-zinc-500">
              Continue building your coding streak. You're making steady
              progress toward completing the 60-day challenge.
            </p>

            <Button className="mt-4">
              Continue Challenge
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 lg:min-w-[360px]">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <div className="mb-2 flex items-center gap-2 text-orange-400">
              <Flame className="h-5 w-5" />
              <span className="text-xs uppercase tracking-wider">
                Streak
              </span>
            </div>

            <p className="text-3xl font-bold text-white">
              {student.currentStreak}
            </p>

            <p className="text-xs text-zinc-500">
              Days
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <div className="mb-2 flex items-center gap-2 text-yellow-400">
              <Award className="h-5 w-5" />
              <span className="text-xs uppercase tracking-wider">
                Level
              </span>
            </div>

            <p className="text-3xl font-bold text-white">
              {student.level}
            </p>

            <p className="text-xs text-zinc-500">
              Current
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <div className="mb-2 flex items-center gap-2 text-violet-400">
              <Zap className="h-5 w-5" />
              <span className="text-xs uppercase tracking-wider">
                XP
              </span>
            </div>

            <p className="text-3xl font-bold text-white">
              {student.xp}
            </p>

            <p className="text-xs text-zinc-500">
              Total
            </p>
          </div>

        </div>

      </div>

    </Card>
  );
}