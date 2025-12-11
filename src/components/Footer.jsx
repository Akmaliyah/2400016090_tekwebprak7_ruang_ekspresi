import React from "react";

export default function Footer() {
  return (
    <section id="Contact" className="py-5 px-2 pb-2 bg-blue-700">
      <div className="flex flex-col max-w-2xl mx-auto gap-2 md:flex-row md:gap-9 justify-between md:mb-2">

        <div className="flex-1 text-white font-thin">
          <div className="flex items-center gap-2 mb-2">
            <img src="src/assets/logo_footer.png" alt="logo_footer" className=" h-10 " />
            <div className="leading-tight">
              <h1 className="text-xl font-semibold">ruang</h1>
              <h1 className="text-xl font-semibold">ekspresi</h1>
            </div>
          </div>

          <p className="mb-2 text-sm leading-tight px-2  w-4/5">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin 
            mengembangkan potensi melalui ideation, creation, collaboration, dan guidance.
          </p>

          <div className="flex  mb-2 w-3/5">
            <img src="src/assets/icon_location.svg" alt="icon_location" className="w-10" />
            <p className="text-sm leading-tight">
              Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, 
              Bantul, Daerah Istimewa Yogyakarta 55191
            </p>
          </div>

          <div className="flex gap-2 mb-2 px-3">
            <img src="src/assets/icon_email.svg" alt="icon_email" className="w-4 mt-1" />
            <p className="text-sm leading-tight">ruang_ekspresi@webmail.uad.ac.id</p>
          </div>

          <div className="flex gap-2 mb-2 px-3">
            <img src="src/assets/icon_phone.svg" alt="icon_phone" className="w-4 mt-1" />
            <p className="text-sm leading-tight">(0274) 511830</p>
          </div>
        </div>

        <div className="text-white py-3 md:py-10">
          <h4 className="font-semibold mb-2">Quick Link</h4>
          <div className="space-y-1 text-sm">
            <p>Home</p>
            <p>About</p>
            <p>Program</p>
            <p>Project</p>
            <p>Testimonial</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="text-white py-3 md:py-10">
          <h4 className="font-semibold mb-2">Programs</h4>
          <div className="space-y-1 text-sm">
            <p>Career Talks</p>
            <p>Extra Classes</p>
            <p>Project Work</p>
            <p>Mentoring</p>
          </div>
        </div>

      </div>

      <div className="w-full border-t-2 border-white text-white mt-3 pt-2">
        <p className="text-center text-xs md:text-sm">
          ©2025 Ruang Ekspresi | All rights reserved
        </p>
      </div>
    </section>
  );
}
