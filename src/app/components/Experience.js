import HeroSection from "./HeroSection";
import imageExperience from "../../../public/assets/experience.jpg";
import ExperienceCard from "./ExperienceCard";
import msib from "../../../public/assets/msib.png";
import mm from "../../../public/assets/magang_mandiri.jpg";

export default function Experience() {
  const experienceData = [
    {
      heading: "Certified Independent Study",
      publis: "PT GITS Indonesia",
      address: "Bandung, West Java, Indonesia",
      asa: "as Fullstack Web Developer - Laravel Framework",
      title:
        "Carry out certified independent studies in the field of web developer.",
      link: "https://drive.google.com/file/d/1fjOjNltjwDBW73YDUoro5OEV1scymatz/view?usp=sharing",
      image: msib,
    },
    {
      heading: "Independent Internship",
      publis: "PT Datanode Naralogi Siberkarya",
      address: "Madiun, East Java, Indonesia",
      asa: "as Web Developer",
      title: "Worked on modern web applications with React and Tailwind CSS.",
      link: "https://drive.google.com/file/d/1ElfCaGGol9AnN-GTjNrJW5aJnvp_wNdn/view?usp=sharing",
      image: mm,
    },
  ];

  return (
    <div className="min-h-screen p-6 sm:p-10">
      <HeroSection title="Some of my experiences!" bgImage={imageExperience} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
