import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 px-6 md:px-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto backdrop-blur-md bg-transparent border border-[#444] rounded-2xl shadow-lg p-8 md:p-12 transition duration-300 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/assets/profile-img.jpeg"
              alt="Profile"
              className="min-w-64 h-64 object-cover rounded-full shadow-md transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* About Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-amber-400 tracking-wide mb-2">
              About Me
            </h2>
            <div className="w-36 h-1 bg-[#fef6b4] rounded-full mb-4" />

            <p className="text-gray-300 text-justify leading-relaxed text-sm md:text-base">
              I’m <span className="text-yellow-300 font-semibold">Shivam Mandal</span>, a passionate and results-driven programmer with a Master’s degree in Computer Applications (MCA) from Chandigarh University. I specialize in web and mobile app development and have hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js) as well as React Native for cross-platform mobile applications.
              <br /><br />
              Throughout my academic and project journey, I’ve built several real-world applications and completed internships that deepened my expertise in both frontend and backend development. I’m proficient in C, C++, and JavaScript, with a strong understanding of data structures and algorithms.
              <br /><br />
I enjoy building scalable, efficient, and user-friendly applications—both web and mobile. I'm eager to contribute to innovative and impactful projects that solve real-world problems through technology.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
