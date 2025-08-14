// src/app/components/ExpertiseCard.js

import Link from "next/link";

// Komponen ini menerima title dan description sebagai props
export default function PortfolioCard({ title, description, link }) {
  return (
    // Efek hover untuk mengangkat kartu sedikit
    <div className="bg-gray-950 p-6 rounded-xl h-full transition-transform duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
      <a
        href={link}
        className="bg-green-500 block py-3 max-w-fit px-4 rounded-lg mt-8 transition-all ease-linear hover:bg-green-600 cursor-pointer"
      >
        Check this out.
      </a>
    </div>
  );
}
