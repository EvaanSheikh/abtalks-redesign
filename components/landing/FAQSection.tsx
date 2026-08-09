"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How much time does it take daily?",
      answer: "Most challenges take 30–60 minutes to complete.",
    },
    {
      question: "Do I need prior coding experience?",
      answer: "No. You can start as a beginner and learn along the way.",
    },
    {
      question: "Is it free to join?",
      answer: "Yes. You can start the challenge for free.",
    },
    {
      question: "What if I miss a day?",
      answer:
        "You can recover your streak by completing a recovery challenge.",
    },
    {
      question: "Can recruiters see my work?",
      answer:
        "Yes. Your GitHub and LinkedIn activity becomes your public portfolio.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-5 py-14 bg-[#09090B] text-white">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="mt-10 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="card"
          >
            {/* Question */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left p-5 flex justify-between items-center"
            >
              <span className="text-sm font-medium">
                {item.question}
              </span>
              <span className="text-[#A1A1AA]">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-5 pb-5 text-sm text-[#A1A1AA]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}