import React, { useState } from "react";
import frame4 from"../assets/Frame 4.png";
import budisantos from"../assets/budisantos.png";
import panah from"../assets/panah.svg";
import iconsplay from"../assets/icons_play.svg";
import iconsplay2 from"../assets/icons_play2.svg";

export default function Showcase() {
  const slides = [
    {
      category: "UI/UX Design",
      title: "Creative Portfolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas.",
      team: [
        { name: "Budi Santoso", role: "Frontend Developer", img: budisantos },
        { name: "Budi Santoso", role: "Frontend Developer", img: budisantos },
        { name: "Budi Santoso", role: "Frontend Developer", img: budisantos }
      ],
      image: frame4,
      demo: "#"
    },
    {
      category: "Web Development",
      title: "Creative Portfolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas.",
      team: [
        { name: "Budi Santoso", role: "Frontend Developer", img: budisantos },
        { name: "Budi Santoso", role: "Frontend Developer", img: budisantos },
        { name: "Budi Santoso", role: "Frontend Developer", img: budisantos }
      ],
      image: frame4,
      demo: "#"
    },
    {
      category: "Mobile Development",
      title: "Creative Portfolio Platform",
      desc: "Dashboard pembelajaran modern dengan progress tracking otomatis.",
      team: [
        { name: "Budi Santoso", role: "Frontend Engineer", img: budisantos },
        { name: "Agung Pratama", role: "Frontend Engineer", img: budisantos },
        { name: "Budi Santoso", role: "UI Specialist", img: budisantos }
      ],
      image: frame4,
      demo: "#"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState("");
  const slide = slides[current];

  // ANIMASI SLIDE KANAN
  const nextSlide = () => {
    setAnimate("slide-left"); // keluar kiri
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimate("slide-left-in"); // masuk dari kanan
    }, 300);
  };

  // ANIMASI SLIDE KIRI
  const prevSlide = () => {
    setAnimate("slide-right"); // keluar kanan
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimate("slide-right-in"); // masuk dari kiri
    }, 300);
  };

  return (
    <section id="Projects" className="py-2 px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-2">
        Showcase <span className="text-blue-600">Student Projects</span>
      </h2>

      <p className="text-center text-gray-600 mb-10 leading-relaxed px-2 md:px-90">
        Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi.
      </p>

      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center 
          gap-6 relative">

        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 p-3 z-20">
          <img src={iconsplay} className="w-10 h-10" />
        </button>

        <div className={`w-full max-w-xl px-4 md:px-20 ${animate}`}>
          <a href="#" className="text-gray-800 bg-blue-200 rounded-full px-5 py-1 inline-block mb-3">
            {slide.category}
          </a>

          <h4 className="text-2xl font-bold">{slide.title}</h4>
          <p className="text-gray-900 mb-4">{slide.desc}</p>

          <div className="space-y-5">
            {slide.team.map((member, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <img src={member.img} className="w-12 h-12 rounded-full" />
                <div>
                  <h6 className="font-medium">{member.name}</h6>
                  <p className="text-gray-800 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href={slide.demo}
              className="text-white font-semibold bg-blue-600 rounded-md
                py-2 px-4 inline-flex items-center gap-2 text-sm mx-auto md:mx-0"
            >
              <img src={panah} className="w-3 h-3" />
              Live Demo
            </a>
          </div>
        </div>

        <div className={`flex justify-center md:justify-end w-full md:w-auto px-15 ${animate}`}>
          <img
            src={slide.image}
            className="w-full max-w-[450px] md:max-w-[520px] rounded-lg"
          />
        </div>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 p-3 z-20"
        >
          <img src={iconsplay2} className="w-10 h-10" />
        </button>

        <div className="md:hidden flex justify-between items-center w-full px-6 mt-3">
          <img onClick={prevSlide} src={iconsplay} className="w-10 h-10" />
          <img onClick={nextSlide} src={iconsplay2} className="w-10 h-10" />
        </div>

      </div>
    </section>
  );
}
