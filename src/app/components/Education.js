export default function Education() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-8 sm:my-12 text-white">
        Education
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {/* Pendidikan */}
        <div className="w-full">
          <p className="text-gray-400 mb-8 text-center md:text-left text-sm sm:text-base">
            Here is the educational journey that I have undertaken, starting
            from high school/vocational school to higher education.
          </p>
          <div className="relative space-y-8">
            <div className="absolute left-2 md:left-2.5 top-2 h-full border-l-2 border-green-500"></div>

            <div className="relative pl-12 sm:pl-10">
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full"></div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                S1 of University Jember
              </h3>
              <p className="text-gray-300">
                Faculty of Computer Science (S.Kom)
              </p>
              <p className="text-gray-300">Informatics Study Program</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Since 2021 - 2025
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">IPK 3.7</p>
            </div>

            <div className="relative pl-12 sm:pl-10">
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full"></div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Kalibaru State Vocational High School
              </h3>
              <p className="text-gray-300">Computer and Network Engineering</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Since 2018 - 2021
              </p>
            </div>
          </div>
        </div>

        {/* Pengalaman Organisasi */}
        <div className="w-full">
          <p className="text-gray-400 mb-8 text-center md:text-left text-sm sm:text-base">
            Here is the organizational experience I gained during my education.
          </p>
          <div className="relative space-y-8">
            <div className="absolute left-2 md:left-2.5 top-2 h-full border-l-2 border-green-500"></div>

            <div className="relative pl-12 sm:pl-10">
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full"></div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Technology Infrastructure Laboratory
              </h3>
              <p className="text-gray-300">Faculty of Computer Science</p>
              <p className="text-gray-300">as Coordinator & Lab Assistant</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Since 2023 - 2024
              </p>
            </div>

            <div className="relative pl-12 sm:pl-10">
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full"></div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Al-Azhar Student Activity Unit
              </h3>
              <p className="text-gray-300">Faculty of Computer Science</p>
              <p className="text-gray-300">as Media and Information Staff</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Since 2023 - 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
