import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-4 py-3 shadow-lg
      shadow-gray-300 bg-white fixed top-0 z-50">
      

      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img src="src/assets/logo.png" alt="logo" className="h-10" />
        <div className="leading-tight text-blue-600">
          <h1 className="text-xl font-semibold">ruang</h1>
          <h1 className="text-xl font-semibold">ekspresi</h1>
        </div>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-6 text-black">
        <a href="#Home" className="hover:text-blue-600 cursor-pointer">Home</a>
        <a href="#About" className="hover:text-blue-600 cursor-pointer">About</a>
        <a href="#Program" className="hover:text-blue-600 cursor-pointer">Program</a>
        <a href="#Projects" className="hover:text-blue-600 cursor-pointer">Projects</a>
        <a href="#Testimonials" className="hover:text-blue-600 cursor-pointer">Testimonials</a>
        <a href="#Contact"className="hover:text-blue-600 cursor-pointer">Contact</a>
      </div>

      {/* BUTTON MOBILE */}
      <button
        className="md:hidden text-3xl p-2 text-gray-800"
        onClick={() => setOpen(!open)}
      > ☰
      </button>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-0 top-full w-full bg-white shadow-md md:hidden transition-all 
          duration-300 overflow-hidden ${
            open ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
        <div className="top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-3 text-black text-md">
         <a href="#Home" className="hover:text-blue-600 ">Home</a>
         <a href="#About" className="hover:text-blue-600 ">About</a>
         <a href="#Program" className="hover:text-blue-600 ">Program</a>
         <a href="#Projects" className="hover:text-blue-600 ">Projects</a>
         <a href="#Testimonials" className="hover:text-blue-600 ">Testimonials</a>
         <a href="#Contact"className="hover:text-blue-600 ">Contact</a>
        </div>
      </div>
    </nav>
  );
}
