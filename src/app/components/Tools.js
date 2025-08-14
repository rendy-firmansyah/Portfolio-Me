import HeroSection from "./HeroSection";
import imageTools from "../../../public/assets/tools.jpg";
import Image from "next/image";

import laravel from "../../../public/assets/logo-tools/laravel.png";
import python from "../../../public/assets/logo-tools/python-logo.png";
import react from "../../../public/assets/logo-tools/react-logo.png";
import tailwind from "../../../public/assets/logo-tools/tailwind.png";
import nextjs from "../../../public/assets/logo-tools/nextjs.png";
import mysql from "../../../public/assets/logo-tools/mysql.png";
import php from "../../../public/assets/logo-tools/php.png";
import tableau from "../../../public/assets/logo-tools/tableau.png";
import excel from "../../../public/assets/logo-tools/excel.png";
import powerbi from "../../../public/assets/logo-tools/powerbi.png";
import figma from "../../../public/assets/logo-tools/figma.png";

// src/app/components/About.js
export default function Tools() {
  return (
    <div className="min-h-screen p-6 sm:p-10">
      <HeroSection title="Tools that I master!" bgImage={imageTools} />
      <div className="flex flex-wrap mt-8 gap-4 justify-center mx-auto">
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center gap-2">
            <Image alt="python" src={python} className="h-14 w-14" />
            <h1 className="text-[#37709f] text-xl font-bold">Python</h1>
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center">
            <Image alt="php" src={php} className="h-14 w-14" />
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center gap-2">
            <Image alt="laravel" src={laravel} className="h-14 w-14" />
            <h1 className="text-[#ff2a19] text-xl font-bold">Laravel</h1>
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center">
            <Image alt="next" src={nextjs} className="h-14 w-20" />
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center">
            <Image alt="react" src={react} className="h-14 w-22" />
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center">
            <Image alt="tailwind" src={tailwind} className="h-14 w-20" />
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center">
            <Image alt="mysql" src={mysql} className="h-14 w-18" />
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center">
            <Image alt="tableau" src={tableau} className="h-14 w-20" />
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center">
            <Image alt="powerbi" src={powerbi} className="h-14 w-20" />
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center gap-2">
            <Image alt="excel" src={excel} className="h-14 w-18" />
            <h1 className="text-[#01542c] text-xl font-bold">Excel</h1>
          </div>
        </div>
        <div className="bg-white px-4 py-2 max-w-fit transition-transform duration-300 hover:-translate-y-2 rounded-xl">
          <div className="flex items-center gap-2">
            <Image alt="figma" src={figma} className="h-14 w-10" />
            <h1 className="text-[#f14e1c] text-xl font-bold">Figma</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
