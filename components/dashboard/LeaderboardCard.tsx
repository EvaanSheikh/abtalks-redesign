"use client";

import {
  Trophy,
  Medal,
  Flame,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LeaderboardEntry } from "@/types/LeaderboardEntry";

interface LeaderboardCardProps {
  leaderboard: LeaderboardEntry[];
  currentUserId: string;
}

export default function LeaderboardCard({
  leaderboard,
  currentUserId,
}: LeaderboardCardProps) {
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

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold">
            Leaderboard
          </h2>

          <p className="text-sm text-muted-foreground">
            Top performers this week
          </p>
        </div>

        <Trophy className="h-5 w-5 text-yellow-500" />

      </div>

      <div className="space-y-3">

        {leaderboard.slice(0, 5).map((user) => {
          const isCurrentUser =
            user.id === currentUserId;

          return (
            <div
              key={user.id}
              className={`flex items-center justify-between rounded-xl border p-3 transition-colors ${
                isCurrentUser
                  ? "border-primary bg-primary/10"
                  : "border-border"
              }`}
            >

              <div className="flex items-center gap-3">

                <span className="w-6 text-center font-semibold text-muted-foreground">
                  #{user.rank}
                </span>

                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={user.avatar}
                    alt={user.name}
                  />

                  <AvatarFallback>
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-medium">
                    {user.name}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">

                    <span className="flex items-center gap-1">
                      <Flame className="h-3.5 w-3.5 text-orange-500" />
                      {user.streak}
                    </span>

                    <span>
                      {user.xp} XP
                    </span>

                  </div>
                </div>

              </div>

              {user.rank <= 3 && (
                <Medal
                  className={`h-5 w-5 ${
                    user.rank === 1
                      ? "text-yellow-500"
                      : user.rank === 2
                      ? "text-zinc-300"
                      : "text-orange-500"
                  }`}
                />
              )}

            </div>
          );
        })}

      </div>

    </Card>
  );
}