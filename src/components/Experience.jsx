import React from "react";

const experienceData = [
    {
        year: "June 2024 - Present",
        company: "Vaishali Tech",
        role: "Full Stack Developer Intern",
        details:
            "Contributing to backend architecture using Node.js, Express.js, and MongoDB. Focused on designing scalable RESTful APIs, optimizing query performance, and integrating seamlessly with modern frontend systems using React.",
    },
    {
        year: "Jan 2023 - Mar 2023",
        company: "Dotplus Technologies, Patna",
        role: "Web Developer Intern",
        details:
            "Developed a robust hotel management system with ASP.NET and SQL Server, improving operations by 30%. Collaborated in a 3-member Agile team to resolve over 10 real-world UI/UX issues efficiently.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-20 px-6 lg:px-24 bg-transparent text-white"
        >
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-amber-400 tracking-wide">
                    My Experience
                </h2>
                <div className="mt-2 mx-auto w-48 h-1 bg-[#fef6b4] rounded-full"></div>
            </div>

            <div className="relative flex flex-col items-center">
                {/* Vertical Timeline Line */}
                <div className="absolute w-1 bg-[#444] h-full left-1/2 transform -translate-x-1/2 z-0" />

                {experienceData.map((exp, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`w-full mb-12 flex flex-col md:flex-row  ${!isLeft ? "md:flex-row-reverse" : ""
                                } items-center relative z-10`}
                        >
                            {/* Timeline Dot */}
                            <span className="absolute left-1/2 top-1/2 w-4 h-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-20" />

                            {/* Card */}
                            <div className="md:w-1/2 p-4 ">
                                <div className="backdrop-blur-lg p-6 rounded-xl border border-[#444] shadow-md hover:shadow-xl transition duration-300 hover:border-yellow-500">
                                    <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
                                     <h3 className="text-xl font-semibold text-[#FFD93D]">
                                    {exp.company}
                                </h3>
                                <h4 className="text-md font-medium text-[#FF6B6B] mb-3">
                                    {exp.role}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {exp.details}
                                </p>
                                </div>
                            </div>
                            {/* Spacer for alignment */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </div>
                    );
                    // return (
                    //     <div
                    //         key={index}
                    //         className={`w-full mb-16 flex flex-col md:flex-row items-start relative ${!isLeft ? "md:flex-row-reverse" : ""
                    //             }`}
                    //     >
                    //         {/* Timeline Dot */}
                    //         <span className="absolute w-5 h-5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full left-1/2 transform -translate-x-1/2 top-6 z-10 shadow-xl border-2 border-black" />

                    //         {/* Timeline Card */}
                    //         <div
                    //             className={`w-full md:w-1/2 px-6 py-6 backdrop-blur-lg bg-[#1e1e1ecc] rounded-2xl border border-[#444] shadow-md hover:shadow-xl transition duration-300 ${isLeft ? "md:mr-20 text-right md:items-end" : "md:ml-20"
                    //                 }`}
                    //         >
                    //             <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
                    //             <h3 className="text-xl font-semibold text-[#FFD93D]">
                    //                 {exp.company}
                    //             </h3>
                    //             <h4 className="text-md font-medium text-[#FF6B6B] mb-3">
                    //                 {exp.role}
                    //             </h4>
                    //             <p className="text-gray-300 text-sm leading-relaxed">
                    //                 {exp.details}
                    //             </p>
                    //         </div>
                    //     </div>
                    // );
                })}
            </div>
        </section>
    );
}
