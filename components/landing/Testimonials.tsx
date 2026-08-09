export default function Testimonials() {
  const testimonials = [
    {
      name: "Aman Verma",
      college: "Delhi University",
      quote:
        "I finally stayed consistent. Posting daily on LinkedIn helped me get my first internship.",
    },
    {
      name: "Priya Sharma",
      college: "IP University",
      quote:
        "Before this, I kept quitting. The daily structure made everything easier.",
    },
    {
      name: "Rahul Singh",
      college: "AKTU",
      quote:
        "My GitHub profile actually looks strong now. I feel confident applying for jobs.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Students Are Already Building Momentum
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              {/* Quote */}
              <p className="text-sm text-[#A1A1AA]">
                "{item.quote}"
              </p>

              {/* Name */}
              <h4 className="mt-4 text-white font-semibold">
                {item.name}
              </h4>

              {/* College */}
              <p className="text-xs text-[#A1A1AA]">
                {item.college}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}