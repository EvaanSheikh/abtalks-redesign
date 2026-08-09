export default function BenefitsGrid() {
  const benefits = [
    {
      title: "Daily Consistency",
      desc: "Build a habit of coding every single day.",
    },
    {
      title: "Public Portfolio",
      desc: "Show real work through GitHub repositories.",
    },
    {
      title: "Recruiter Visibility",
      desc: "Share progress on LinkedIn and get noticed.",
    },
    {
      title: "Real Projects",
      desc: "Work on tasks that actually build skills.",
    },
    {
      title: "Learning Momentum",
      desc: "Avoid burnout and stay consistent.",
    },
    {
      title: "Career Growth",
      desc: "Move closer to internships and jobs.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Why Students Join ABTalks
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="w-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-[#A1A1AA] text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}