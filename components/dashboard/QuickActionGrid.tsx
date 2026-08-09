"use client";

import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function QuickActionGrid() {
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
          Quick Actions
        </h2>

        <p className="text-sm text-muted-foreground">
          Jump back into your challenge.
        </p>
      </div>

      <div className="grid gap-3">

        <Link href="/day/12" className="block">
  <Button
    size="lg"
    className="w-full justify-between"
  >
    Continue Challenge
    <ArrowRight className="h-4 w-4" />
  </Button>
</Link>

        <Link href="#" className="block">
  <Button
    variant="secondary"
    size="lg"
    className="w-full justify-between"
  >
    View Previous Days
    <CalendarDays className="h-4 w-4" />
  </Button>
</Link>

        <Link href="#" className="block">
  <Button
    variant="outline"
    size="lg"
    className="w-full justify-between"
  >
    Edit Profile
    <User className="h-4 w-4" />
  </Button>
</Link>

      </div>

    </Card>
  );
}