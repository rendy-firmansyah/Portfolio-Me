// src/app/portfolio/page.js

import HeroSection from "../components/HeroSection";
import ExpertiseCard from "../components/PortfolioCard";
import imagePortfolio from "../../../public/assets/portfolio.jpg";

const expertiseData = [
  {
    title: "UMKM Desa Karangbendo",
    description:
      "I am one of the developers of this application website. This website is developed using the Laravel framework.",
    link: "https://umkmdesakarangbendo.com/",
  },
  {
    title: "Azwa Design Studio",
    description:
      "I am one of the developers of this application website. This website is developed using the Laravel framework.",
    link: "https://azwadesignstudio.com/",
  },
  {
    title: "Sall-Bondo App",
    description:
      "I am one of the developers of this application website. This website is developed using the React Vite + Laravel Framework",
    link: "https://sallbondo.com/",
  },
  {
    title: "Project Visualisasi Data",
    description:
      "This is a data visualization project that I have created using Tableau software.",
    link: "https://rendy-firmansyah.github.io/rendy_portfolio/",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen p-6 sm:p-10">
      {/* Section 1: Hero */}
      <HeroSection title="Check out my portfolio!" bgImage={imagePortfolio} />

      {/* Section 2: Portfolio Grid */}
      <section>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
