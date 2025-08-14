// src/app/components/About.js
import Image from "next/image";
import { Linkedin, Instagram, Github, Phone } from "lucide-react";
import bgProfile from "../../../public/assets/profile1.jpg";
import imageAbout from "../../../public/assets/about.jpg";
import HeroSection from "../components/HeroSection";
import Education from "./Education";

export default function About() {
  return (
    <div className="min-h-screen p-6 sm:p-10 gap-8">
      <HeroSection
        title={"This is my personal data and education!"}
        bgImage={imageAbout}
      />
      <div className="flex flex-col md:flex-row mt-18 gap-6">
        <Image
          alt="gambar-datadiri"
          src={bgProfile}
          className="w-96 rounded-tl-3xl rounded-br-3xl"
        />
        <div className="my-6 mx-8">
          <p className="text-lg">MY BIOGRAPHY</p>
          <h1 className="text-4xl mt-8 font-bold">
            IT Developer<br></br>& Freelance Web Developer.
          </h1>
          <p className="my-6 text-justify">
            I am a graduate student of Jember University, Faculty of Computer
            Science, Informatics Engineering Study Program. I have
            organizational experience ranging from being the Chief Coordinator
            of the Technology Infrastructure Laboratory Assistant as well as
            Laboratory Assistant, I have also been part of the information media
            staff at Al-Azhar Islamic Spirituality UKM. I have expertise in data
            and web programming, ranging from data entry, data analyst, machine
            learning, it and website developer. I am very interested in this
            field and I am very ready to work professionally and responsibly
            with the skills I have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p className="mb-2">Name: Mohammad Rendy Firmansyah</p>
              <p>Email: rendy.firmans28@gmail.com</p>
            </div>
            <div className="">
              <p className="mb-2">From: Banyuwangi</p>
              <p>Phone: +62 8564-8408-330</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center mt-3">
            <span className="me-5">Follow me on</span>
            <div className="flex gap-3 mt-3">
              <a
                href="https://www.linkedin.com/in/rendy-firmansyah28/"
                className="bg-green-500 rounded-full p-2"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/rendyfrmsy_/"
                className="bg-green-500 rounded-full p-2"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/rendy-firmansyah"
                className="bg-green-500 rounded-full p-2"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://wa.me/6285648408330"
              className="bg-green-500 text-base md:text-lg block py-3 max-w-fit px-2 md:px-4 rounded-sm mt-8 transition-all ease-linear hover:bg-green-600 cursor-pointer"
            >
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1EqI_IKZ037EMxnSHmYYx0hG5C12IVckm/view?usp=sharing"
              className="bg-green-500 text-base md:text-lg block py-3 max-w-fit px-2 md:px-4 rounded-sm mt-8 transition-all ease-linear hover:bg-green-600 cursor-pointer"
            >
              Check CV
            </a>
          </div>
        </div>
      </div>
      <Education />
    </div>
  );
}
