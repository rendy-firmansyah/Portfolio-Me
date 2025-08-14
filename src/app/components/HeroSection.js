"use client";

import Image from "next/image";
// import HeroImagePortfolio from "../../../public/assets/bg-portfolio.jpg";
import { TypeAnimation } from "react-type-animation";
import { Github } from "lucide-react";

const stats = [
  { value: "5+", label: "Completed Real Projects" },
  { value: "8+", label: "Project on Github" },
  { value: "1k+", label: "Follower on Instagram" },
  { value: "2", label: "Certified Experience" },
];

export default function HeroSection({ title, bgImage }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white relative">
        <Image
          alt="Hero Background"
          src={bgImage}
          className="object-cover w-full h-60 sm:h-72 md:h-80"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10 rounded-2xl m-2 sm:m-3 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            {title}
          </h1>

          {/* Animation */}
          <div className="my-4 sm:my-6 inline-block">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 sm:p-3">
              <TypeAnimation
                sequence={["I am Rendy, a Developer", 3000]}
                wrapper="p"
                speed={50}
                className="text-sm sm:text-lg md:text-xl text-green-400 font-mono"
                repeat={Infinity}
              />
            </div>
          </div>

          {/* Button */}
          <div>
            <a
              href="https://github.com/rendy-firmansyah"
              className="bg-green-500 flex gap-2 items-center text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={28} /> Check Github Me
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8 sm:mt-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
