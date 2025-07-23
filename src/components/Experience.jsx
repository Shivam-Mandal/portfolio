import React from "react";

const experienceData = [
    {
        year: "June 2024 - Present",
        company: "Vaishali Tech",
        role: "Full Stack Developer",
        details:
            "Working as a Full Stack Developer with a strong focus on backend development, building scalable services using Node.js, Express.js, and MongoDB. Emphasizing efficient RESTful API design, optimized database operations, and seamless integration with frontend systems."
    },
    {
        year: "Jan 2023 - Mar 2023",
        company: "Dotplus Technologies, Patna",
        role: "Web Developer Intern",
        details:
            "Developed a scalable hotel management web application using ASP.NET and Microsoft SQL Server, resulting in a 30% improvement in operational efficiency. Collaborated in a 3-member Agile team, actively contributing to resolving 10+ real-time UI/UX issues."
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-6 lg:px-24 bg-transparent text-white">
            <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-4xl font-bold text-center mb-12 text-yellow-400 tracking-wide">
                    My Experience
                </span>
                <div className="mt-2 mx-auto w-48 h-1 bg-[#fef6b4] rounded-full"></div>

            </h2>

            <div className="relative border-l-2 border-[#555] pl-8">
                {experienceData.map((exp, index) => (
                    <div key={index} className="mb-12 relative">
                        <span className="absolute w-4 h-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full left-[-10px] top-2 z-10 shadow-lg" />

                        <div className=" backdrop-blur-lg p-6 rounded-xl border border-[#444] shadow-md hover:shadow-xl transition duration-300">
                            <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
                            <h3 className="text-xl font-semibold text-[#FFD93D]">{exp.company}</h3>
                            <h4 className="text-md font-medium text-[#FF6B6B] mb-2">{exp.role}</h4>
                            <p className="text-gray-300 text-sm">{exp.details}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
