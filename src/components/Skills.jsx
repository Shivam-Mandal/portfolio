import React from "react";

const skills = {
  languages: ["C", "C++", "JavaScript"],
  frontend: ["React.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB", "MySQL", "PostgreSQL"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "ThunderClient", "AWS", "Vercel","Google Analytics", "Docker", "Firebase", 
    "Render"
  ],
  concepts: ["OOPs", "REST APIs", "Socket.IO", "STL", "DBMS", "DSA"],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-transparent text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-amber-400 tracking-wide">Skills</h2>
          <div className="mt-2 mx-auto w-20 h-1 bg-[#fef6b4] rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="backdrop-blur-md bg-transparent border border-[#444] rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold capitalize mb-4 text-yellow-300">
                {category.replace(/([A-Z])/g, " $1")}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="bg-yellow-100 text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-yellow-200 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
