"use client";

// src/app/components/Home.js
import ParticlesBackground from "./ParticlesBackground";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
    >
      <ParticlesBackground />
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          Hello, Explore My Work!
        </h1>

        <div className="my-8 inline-block">
          <div className="bg-black rounded-lg p-4">
            <TypeAnimation
              sequence={["<div> I am a Rendy Developer </div>", 1000]}
              wrapper="p"
              speed={50}
              className="text-base sm:text-lg md:text-xl text-green-400 font-mono"
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="mb-12">
          <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
            Explore
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-green-400">5+</p>
            <p className="text-gray-400">Completed Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-green-400">8+</p>
            <p className="text-gray-400">Project on Github</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-green-400">1k+</p>
            <p className="text-gray-400">Follower on Instagram</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-green-400">2</p>
            <p className="text-gray-400">Certified Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
