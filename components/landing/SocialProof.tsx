export default function SocialProof() {
  return (
    <section className="px-5 py-10 bg-[#09090B] text-white">
      
      {/* Heading */}
      <p className="text-center text-sm text-[#A1A1AA]">
        Trusted by developers worldwide
      </p>

      {/* Stats Row */}
      <div className="mt-6 flex justify-between text-center text-sm">
        <div>
          <p className="text-lg font-semibold text-white">12K+</p>
          <p className="text-[#A1A1AA]">Active Users</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-white">500K+</p>
          <p className="text-[#A1A1AA]">Commits</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-white">150+</p>
          <p className="text-[#A1A1AA]">Countries</p>
        </div>
      </div>

      {/* Logos (placeholder for now) */}
      <div className="mt-8 flex justify-center gap-6 opacity-60 text-xs">
        <span>Google</span>
        <span>Microsoft</span>
        <span>Amazon</span>
        <span>Startups</span>
      </div>

    </section>
  );
}