export default function TimelineSection() {
  const timeline = [
    {
      day: "Day 1",
      title: "First Commit",
      desc: "Start your journey with your first GitHub commit.",
    },
    {
      day: "Day 7",
      title: "Habit Formed",
      desc: "You’ve built consistency for a full week.",
    },
    {
      day: "Day 21",
      title: "Portfolio Growing",
      desc: "Your GitHub starts showing real progress.",
    },
    {
      day: "Day 45",
      title: "Recruiter Visibility",
      desc: "Your work is now visible on LinkedIn.",
    },
    {
      day: "Day 60",
      title: "Challenge Completed",
      desc: "You’ve built a strong coding habit and portfolio.",
    },
  ];

  return (
    <section className="px-5 py-14 bg-[#09090B] text-white">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center">
        Your 60-Day Journey
      </h2>

      {/* Timeline */}
      <div className="mt-10 relative border-l border-[#27272A] pl-6 space-y-10">
        {timeline.map((item, index) => (
          <div key={index} className="relative">
            
            {/* Dot */}
            <div className="absolute -left-[10px] top-1 w-4 h-4 bg-[#6D5DF6] rounded-full"></div>

            {/* Content */}
            <p className="text-sm text-[#6D5DF6] font-medium">
              {item.day}
            </p>

            <h3 className="mt-1 text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-[#A1A1AA]">
              {item.desc}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}