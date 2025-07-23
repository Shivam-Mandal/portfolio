import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Food Delivery Application",
    tech: "MERN Stack",
    description:
      "A full-stack app with Admin & User panels. Features include authentication (JWT), REST APIs, Context API for state, Stripe payment integration, and mailing system.",
    github: "https://fooddelivery-application-frontend.onrender.com/",
  },
  {
    title: "Multiplayer Tic Tac Toe Game",
    tech: "React, Node.js, Socket.IO",
    description:
      "Real-time multiplayer TicTacToe game with socket-based matchmaking, game sync, and instant updates.",
    github: "https://multiplayer-game-tic-tac-toe-1.onrender.com/",
  },
  {
    title: "INOTEBOOK",
    tech: "MERN Stack",
    description:
      "A secure note-taking app with JWT-based authentication and CRUD functionality. Responsive UI with user-specific data access.",
    github: "https://github.com/Shivam-Mandal/iNotebook",
  },
  {
    title: "Multiplayer Typing Race Game",
    tech: "React, Node.js, Socket.IO",
    description:
      "A real-time multiplayer typing game where players compete to finish a given text first. Uses websockets for live race updates and progress tracking.",
    github: "https://typospeed.onrender.com/",
  },
  {
    title: "Quiz App",
    tech: "React Native CLI",
    description:
      "An interactive mobile quiz app with multiple categories and real-time score tracking. Features include timer-based questions and smooth navigation.",
    github: "https://github.com/Shivam-Mandal/QuizApp",
  },
  {
    title: "Movie App",
    tech: "React Native CLI, TMDB API",
    description:
      "A mobile app to browse trending movies using TMDB API. Includes search, movie details view, and modern UI with smooth transitions.",
    github: "https://github.com/Shivam-Mandal/react-native-movie-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 lg:px-24 bg-transparent">
      <h2 className="text-4xl font-bold mb-12 text-center text-amber-400 tracking-wide">
        Projects
        <div className="mt-2 w-24 mx-auto h-1 bg-[#fef6b4] rounded-full"></div>
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-600 hover:border-yellow-400 p-6 bg-[#0b0c0c]/40 backdrop-blur-md group relative transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ffd700] group-hover:underline">{project.title}</h3>
            <p className="text-sm text-[#fef6b4] italic mb-3">{project.tech}</p>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fef6b4] flex items-center gap-1 font-medium hover:underline"
            >
              View <FaExternalLinkAlt size={12} />
            </a>
            <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full shadow-md" />
          </div>
        ))}
      </div>
    </section>
  );
}
