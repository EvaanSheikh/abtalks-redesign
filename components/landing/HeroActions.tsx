"use client";

import Link from "next/link";

interface HeroActionsProps {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export default function HeroActions({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: HeroActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        href={primaryHref}
        className="
          inline-flex
          h-12
          items-center
          justify-center
          rounded-xl
          bg-[#6D5DF6]
          px-6
          text-sm
          font-medium
          text-white
          transition-all
          duration-200
          hover:bg-[#5B4CF2]
          hover:-translate-y-0.5
          focus:outline-none
          focus:ring-2
          focus:ring-[#6D5DF6]
          focus:ring-offset-2
          focus:ring-offset-black
        "
      >
        {primaryLabel}
      </Link>

      <Link
        href={secondaryHref}
        className="
          inline-flex
          h-12
          items-center
          justify-center
          rounded-xl
          border
          border-zinc-700
          bg-transparent
          px-6
          text-sm
          font-medium
          text-white
          transition-all
          duration-200
          hover:bg-zinc-900
          hover:-translate-y-0.5
          focus:outline-none
          focus:ring-2
          focus:ring-[#6D5DF6]
          focus:ring-offset-2
          focus:ring-offset-black
        "
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}