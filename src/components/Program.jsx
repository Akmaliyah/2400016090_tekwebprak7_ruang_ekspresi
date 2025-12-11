import React from "react";

export default function Program() {
  return (
    <section id="Program" className="py-10 px-4 md:px-16 lg:px-28">
      
      {/* SECTION TITLE */}
      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Jadwal & <span className="text-blue-600">Program Kegiatan</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto leading-tight md:px-15">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan 
          pengembangan skill setiap Sabtu.
        </p>
      </div>

      {/* KOLOM JADWAL */}
      <div className="w-full bg-white rounded-2xl shadow-xl p-6 max-w-7xl mx-auto">
        
        {/* Header Jadwal */}
        <div className="flex justify-center items-center gap-2 mb-4 font-medium md:flex-row">
          <img src="src/assets/icon_calendar.svg" alt="calendar icon"  className="w-6 h-6"/>
          <h3 className="text-blue-600 text-lg">Setiap Sabtu</h3>
        </div>

        {/* Session Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-8 px-6 md:px-15">

          {/* Sesi Pagi */}
          <article className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-green-200 
            rounded-lg p-3 flex items-center gap-2 border-l-4 border-blue-800 h-25 md:h-20">

            <img src="src/assets/icon-time.svg" alt="time icon" className="h-10 flex-shrink-0"/>

            <div>
              <h3 className="text-lg font-semibold">Sesi Pagi</h3>
              <p className="text-blue-800 font-medium text-sm">09.00 - 12.00 WIB</p>
              <p className="text-gray-800 text-sm leading-relaxed mt-1">
                Workshop, Career Talks, dan Extra Classes intensif.
              </p>
            </div>
          </article>

          {/* Sesi Sore */}
          <article className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-green-200 
            rounded-lg p-3 flex items-center gap-2 border-l-4 border-blue-800 h-25 md:h-20">

            <img src="src/assets/icon-time.svg" alt="time icon" className="h-10 flex-shrink-0"/>

            <div>
              <h3 className="text-lg font-semibold">Sesi Sore</h3>
              <p className="text-blue-800 font-medium text-sm">16.00 - 19.00 WIB</p>
              <p className="text-gray-800 text-sm leading-relaxed mt-1">
                Project Work, Mentoring, dan Collaboration Session.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* PROGRAM ITEM CARDS */}
      <div id="Program" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-10 max-w-6xl mx-auto">

        {/* Career Talks */}
        <article className="bg-yellow-200 rounded-lg p-6 shadow-sm border border-yellow-400">
          <img src="src/assets/icon_talks.svg" alt="talks" className="w-9 h-9 mb-2" />
          <h3 className="font-bold mb-1">Career Talks</h3>
          <p className="text-gray-800 text-sm leading-relaxed">
            Sesi sharing dari praktisi industri dan alumni sukses.
          </p>
        </article>

        {/* Extra Classes */}
        <article className="bg-green-200 rounded-lg p-6 shadow-sm border border-green-400">
          <img src="src/assets/icon_book.svg" alt="book" className="w-9 h-9 mb-2" />
          <h3 className="font-bold mb-1">Extra Classes</h3>
          <p className="text-gray-800 text-sm leading-relaxed">
            Kelas tambahan skill development dan workshop teknis.
          </p>
        </article>

        {/* Project Work */}
        <article className="bg-blue-200 rounded-lg p-6 shadow-sm border border-blue-400">
          <img src="src/assets/icon_project.svg" alt="project" className="w-9 h-9 mb-2" />
          <h3 className="font-bold mb-1">Project Work</h3>
          <p className="text-gray-800 text-sm leading-relaxed">
            Mengerjakan project nyata dengan bimbingan mentor.
          </p>
        </article>

        {/* Mentoring */}
        <article className="bg-pink-200 rounded-lg p-6 shadow-sm border border-pink-400">
          <img src="src/assets/icon_mentoring.svg" alt="mentoring" className="w-9 h-9 mb-2" />
          <h3 className="font-bold mb-1">Mentoring</h3>
          <p className="text-gray-800 text-sm leading-relaxed">
            Sesi konsultasi personal dengan mentor berpengalaman.
          </p>
        </article>
      </div>

    </section>
  );
}
