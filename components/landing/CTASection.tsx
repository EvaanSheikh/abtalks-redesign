export default function CTASection() {
  return (
    <section className="px-5 py-16 bg-[#09090B] text-white">
      
      <div className="border border-[#27272A] rounded-2xl p-8 text-center">
        
        {/* Headline */}
        <h2 className="text-2xl font-semibold">
          Start your coding streak today.
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-sm text-[#A1A1AA]">
          One small step every day can change your career.
        </p>

        {/* CTA Button */}
        <button className="mt-6 bg-[#6D5DF6] px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition">
          Start Challenge
        </button>

      </div>

    </section>
  );
}