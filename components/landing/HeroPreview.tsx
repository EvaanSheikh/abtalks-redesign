import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Flame,
  Code2,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function HeroPreview() {
  return (
    <Card className="w-full max-w-md rounded-3xl border-zinc-800 bg-zinc-900/80 p-6 shadow-xl">
      <div className="space-y-6">

        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">
              Today's Challenge
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              Build a Responsive Landing Page
            </h3>
          </div>

          <Badge className="bg-[#6D5DF6]">
            Day 12
          </Badge>
        </div>

        {/* Streak */}

        <div className="flex items-center gap-3 rounded-2xl bg-zinc-800 p-4">
          <Flame className="h-6 w-6 text-orange-500" />

          <div>
            <p className="text-sm text-zinc-400">
              Current Streak
            </p>

            <p className="text-xl font-bold text-white">
              12 Days
            </p>
          </div>
        </div>

        {/* Progress */}

        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-zinc-400">
              Challenge Progress
            </span>

            <span className="text-sm text-white">
              20%
            </span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-2 w-1/5 rounded-full bg-[#6D5DF6]" />
          </div>
        </div>

        {/* Submission Status */}

        <div className="space-y-3">

          <div className="flex items-center justify-between rounded-xl bg-zinc-800 p-3">
            <div className="flex items-center gap-3">
              <Code2  className="h-5 w-5 text-white" />

              <span className="text-sm text-white">
                GitHub Repository
              </span>
            </div>

            <CheckCircle2 className="h-5 w-5 text-green-500" />
          </div>

          <div className="flex items-center justify-between rounded-xl bg-zinc-800 p-3">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#0A66C2]" />

              <span className="text-sm text-white">
                LinkedIn Post
              </span>
            </div>

            <CheckCircle2 className="h-5 w-5 text-green-500" />
          </div>

        </div>

      </div>
    </Card>
  );
}