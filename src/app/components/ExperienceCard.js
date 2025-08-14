import Image from "next/image";

export default function ExperienceCard({
  heading,
  publis,
  address,
  asa,
  title,
  link,
  image,
}) {
  return (
    <div className="bg-gray-950 p-6 rounded-xl h-full transition-transform duration-300 hover:-translate-y-2 flex flex-col justify-between">
      {/* Konten utama */}
      <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
        {image && (
          <Image
            alt={heading}
            src={image}
            width={128}
            height={128}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-sm object-cover"
          />
        )}
        <div className="text-center sm:text-left">
          <h1 className="text-white font-bold text-lg">{heading}</h1>
          <p className="text-gray-300">{publis}</p>
          <p className="text-gray-300 text-xs">{address}</p>
          <p className="text-gray-300 text-xs">{asa}</p>
          <p className="text-gray-400 text-sm mt-2">{title}</p>
        </div>
      </div>

      {/* Tombol */}
      <div className="flex justify-center sm:justify-end mt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition"
        >
          Check this out
        </a>
      </div>
    </div>
  );
}
