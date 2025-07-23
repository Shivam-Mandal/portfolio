import React from "react";

const achievements = [
  {
    title: "LeetCode Problem Solving",
    description:
      "Solved 500+ problems on LeetCode with a global ranking around 1 Lakh.",
    icon: "/assets/leetcode_icon.png",
  },
  {
    title: "Techfest Coding Champion",
    description:
      "3rd Prize for presenting IOT based smart Irrigation system",
    icon: "/assets/techfest.png",
  },
  {
    title: "CM Award for Painting",
    description:
      "Won a painting competition awarded by the Chief Minister during school.",
    icon: "/assets/painting.png",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-16 px-6 lg:px-24 bg-transparent text-white"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-amber-400 tracking-wide">
          Achievements
        </h2>
        <div className="mt-2 mx-auto w-48 h-1 bg-[#fef6b4] rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center text-center bg-black bg-opacity-20 backdrop-blur-md p-6 rounded-xl border border-[#444] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-24 h-24 object-contain mb-4 rounded-md shadow-md p-2 bg-white/10"
            />
            <h3 className="text-xl font-semibold text-[#FFD93D] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
