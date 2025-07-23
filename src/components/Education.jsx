import React from "react";

const educationDate = [
  {
    year: "July 2023 - July 2025",
    College: "Chandigarh University",
    Course: "MCA",
    CGPA: "8.28/10",
  },
  {
    year: "Sept 2020 - May 2023",
    College:
      "Lalit Narayan Mishra Institute of Economic Development and Social Change",
    Course: "BCA",
    CGPA: "8.49/10",
  },
  {
  year: "May 2018 - June 2020",
  College: "Scholars Abode School",
  Course: "Senior Secondary (Class 12, Science - PCM)",
  Percentage: "82.6%",
},
{
  year: "May 2018",
  College: "Annie Besant International School",
  Course: "Secondary (Class 10)",
  Percentage: "75.2%",
},
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 px-6 lg:px-24 bg-transparent text-white"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-amber-400 tracking-wide">
          My Education
        </h2>
        <div className="mt-2 mx-auto w-48 h-1 bg-[#fef6b4] rounded-full"></div>
      </div>

      <div className="relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#444] transform -translate-x-1/2 z-0"></div>

        {educationDate.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`w-full mb-12 flex flex-col md:flex-row ${
                !isLeft ? "md:flex-row-reverse" : ""
              } items-center relative z-10`}
            >
              {/* Timeline Dot */}
              <span className="absolute left-1/2 top-1/2 w-4 h-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-20" />

              {/* Card */}
              <div className="md:w-1/2 p-4">
                <div className="backdrop-blur-lg p-6 rounded-xl border border-[#444] shadow-md hover:shadow-xl transition duration-300 hover:border-yellow-500">
                  <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
                  <h3 className="text-xl font-semibold text-[#FFD93D]">
                    {exp.College}
                  </h3>
                  <h4 className="text-md font-medium text-[#FF6B6B] mb-2">
                    {exp.Course}
                  </h4>
                  {exp.CGPA ? (
                    <p className="text-gray-300 text-sm">CGPA: {exp.CGPA}</p>
                  ) : (
                    <p className="text-gray-300 text-sm">
                      Percentage: {exp.Percentage}
                    </p>
                  )}
                </div>
              </div>
              {/* Spacer for alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
