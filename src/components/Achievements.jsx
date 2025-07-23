import React from "react";

const achievements = [
  {
    title: "LeetCode Problem Solving",
    description: "Solved 500+ problems on LeetCode with a global ranking around 1 Lakh.",
  },
  {
    title: "Techfest Coding Champion",
    description: "3rd Prize for presenting IOT based smart Irrigation system",
  },
  {
    title: "CM Award for Painting",
    description: "Won a painting competition awarded by the Chief Minister during school.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-6 lg:px-24 bg-transparent text-white">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-yellow-400 tracking-wide">
          Achievements
        </h2>
        <div className="mt-2 mx-auto w-48 h-1 bg-[#fef6b4] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="aspect-square flex flex-col justify-center items-center text-center backdrop-blur-lg p-6 rounded-xl border border-[#444] shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#FFD93D] mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
