import React from "react";

const skills = {
    languages: ["C", "C++", "JavaScript"],
    frontend: ["React.js", "React Native", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "MySQL", "PostgreSQl"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "ThunderClient", "AWS", "Vercel"],
    concepts: ["OOPs", "REST APIs", "Socket.IO", "STL", "DBMS",],
};

export default function Skills() {
    return (
        <section className="bg-transparent text-white py-16 px-6" id="skills">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-center text-yellow-400 tracking-wide">Skills
                    </h2>
                    <div className="mt-2 mx-auto w-20 h-1 bg-[#fef6b4] rounded-full"></div>

                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-2xl font-semibold capitalize mb-4 text-yellow-300">
                                {category.replace(/([A-Z])/g, " $1")}
                            </h3>
                            <ul className="flex flex-wrap gap-3">
                                {items.map((skill, idx) => (
                                    <li
                                        key={idx}
                                        className="bg-yellow-100 text-black px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-yellow-200 transition"
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
