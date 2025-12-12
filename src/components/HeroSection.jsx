import React from "react";
import fotoSection1 from"../assets/foto_section1.jpg";
export default function HeroSection() {
    return (
        <section id="About" class="bg-white py-4 px-6 pt-28">
            <div className=" max-w-7xl mx-auto flex flex-col items-center gap-10 md:flex-row-reverse">
                <img src={fotoSection1} alt="foto_section1" className="w-90 h-80 border-10b rounded-md"/>

                <div className="w-full  text-left" >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 leading-tight">RUANG EKSPRESI : 
                        <span className='text-gray-800'>Wadah </span>
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">kreatif & Kompetitif 
                        Mahasiswa
                    </h1>
                    
                    <div className="flex flex-wrap space-y-2 md:space-y-0 md:flex-row md:space-x-2 mb-9">
                        <a href="#Ideation" className="text-gray-800 bg-yellow-200 rounded-full 
                        hover:text-gray-800 py-2 p-4 px-9">Ideation</a>
                        <a href="#Creation" className="text-gray-800 bg-green-200 rounded-full 
                        hover:text-gray-800 py-2 p-4 px-9">Creation</a>
                        <a href="#Collaboration"className="text-gray-800 bg-blue-200 rounded-full 
                        hover:text-gray-800 py-2 p-4 px-9">Collaboration</a>
                        <a href="#Guidance &  Support" className="text-gray-800 bg-pink-200 rounded-full 
                        hover:text-gray-800 py-2 p-4 px-9">Guidance &  Support</a>
                    </div>
                </div>
            </div>
        </section>
    )
}