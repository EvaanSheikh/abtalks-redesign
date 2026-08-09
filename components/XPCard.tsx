interface XPCardProps {
  xp: number;
}

export default function XPCard({
  xp,
}: XPCardProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-zinc-400">
        Current XP
      </p>

      <h2 className="mt-2 text-4xl font-bold text-violet-400">
        {xp}
      </h2>

      <p className="mt-3 text-sm text-zinc-500">
        Earn XP by completing daily challenges.
      </p>
    </section>
  );
}