export default function HowItWorks() {
  return (
    <section className="px-5 py-14 bg-[#09090B] text-white">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center">
        How It Works
      </h2>

      {/* Steps */}
      <div className="mt-10 space-y-8">
        
        {/* Step 1 */}
        <div className="card">
          <p className="text-sm text-[#6D5DF6] font-medium">Step 1</p>
          <h3 className="mt-2 text-lg font-semibold">
            Start the 60-Day Challenge
          </h3>
          <p className="mt-2 text-sm text-[#A1A1AA]">
            Join the challenge and get your daily coding tasks.
          </p>
        </div>

        {/* Step 2 */}
        <div className="card">
          <p className="text-sm text-[#6D5DF6] font-medium">Step 2</p>
          <h3 className="mt-2 text-lg font-semibold">
            Build & Commit Daily
          </h3>
          <p className="mt-2 text-sm text-[#A1A1AA]">
            Solve problems, push to GitHub, and stay consistent.
          </p>
        </div>

        {/* Step 3 */}
        <div className="card">
          <p className="text-sm text-[#6D5DF6] font-medium">Step 3</p>
          <h3 className="mt-2 text-lg font-semibold">
            Share Your Progress
          </h3>
          <p className="mt-2 text-sm text-[#A1A1AA]">
            Post on LinkedIn and grow your personal brand.
          </p>
        </div>

      </div>

    </section>
  );
}