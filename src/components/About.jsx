import React from 'react';

const About = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row mx-10 md:mx-20 justify-between items-center gap-10 py-10" id='about'>
                <div className="w-full md:w-1/3 flex justify-center">
                    <img src="src/assets/profile-img.jpeg" alt="Profile" className="rounded-full shadow-lg transform transition duration-500 hover:scale-105    " />
                </div>
                <div className="w-full md:w-2/3 text-white">
                    <h1 className='text-amber-400 text-3xl font-semibold'>ABOUT ME</h1>
                    <p className='text-justify mt-5'>I am Shivam Mandal, currently pursuing a Master's degree in Computer Applications from Chandigarh University. With a strong foundation in programming and web development, I have honed my skills through various projects and internships. My expertise includes working with technologies such as React, Node.js, and MongoDB, and I am proficient in languages like C, C++, and JavaScript. I am passionate about building efficient and scalable web applications and have a proven track record of delivering high-quality projects. I am eager to leverage my technical skills and academic knowledge to contribute to innovative and impactful projects in the tech industry.</p>
                </div>
            </div>
        </>
    );
}

export default About;
