import Link from "next/link";

import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button
        asChild
        size="lg"
        className="h-12 rounded-xl bg-[#6D5DF6] px-6 text-white hover:bg-[#5D4EEB]"
      >
        <Link href={primaryHref}>{primaryLabel}</Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="h-12 rounded-xl border-zinc-700 bg-transparent px-6 text-white hover:bg-zinc-900"
      >
        <Link href={secondaryHref}>{secondaryLabel}</Link>
      </Button>
    </div>
  );
}