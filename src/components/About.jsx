import React from 'react';

const About = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row mx-10 md:mx-20 justify-between items-center gap-10 py-10" id='about'>
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src="src/assets/profile-img.jpeg"
                        alt="Profile"
                        className="min-w-64 h-64 object-cover rounded-full shadow-lg transform transition duration-500 hover:scale-105"
                    />
                </div>
                <div className="w-full md:w-2/3 text-white">
                    <div className="">
                        <h1 className='text-amber-400 text-3xl font-semibold'>ABOUT ME</h1>
                        <div className="mt-2 w-36 h-1 bg-[#fef6b4] rounded-full"></div>
                    </div>
                    <p className='text-justify mt-5'> I’m Shivam Mandal, a passionate and results-driven programmer with a Master’s degree in Computer Applications (MCA) from Chandigarh University. I specialize in web development and have hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js).

                        Throughout my academic and project journey, I’ve built several real-world applications and completed internships that deepened my expertise in both frontend and backend development. I’m proficient in C, C++, and JavaScript, with a strong understanding of data structures and algorithms.

                        I enjoy building scalable, efficient, and user-friendly web applications. I'm eager to contribute to innovative and impactful projects that solve real-world problems through technology.</p>
                </div>
            </div>
        </>
    );
}

export default About;
