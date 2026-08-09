export default function HeroSection() {
  return (
    <section className="w-full py-16 lg:py-24">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-16">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="w-full text-center lg:text-left">

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Build Something Every Day for 60 Days.
            </h1>

            {/* Subheadline */}
            <p className="mt-4 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              One commit. One post. One step closer to your career.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="btn-primary">
                Start the Challenge
              </button>

              <button className="btn-secondary">
                Explore the Journey
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p className="text-white font-semibold">12,000+</p>
                <p>Students Joined</p>
              </div>

              <div>
                <p className="text-white font-semibold">540K+</p>
                <p>Commits</p>
              </div>

              <div>
                <p className="text-white font-semibold">92%</p>
                <p>Satisfaction</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (empty space for desktop balance) */}
          <div className="hidden lg:block"></div>

        </div>

      </div>
    </section>
  );
}