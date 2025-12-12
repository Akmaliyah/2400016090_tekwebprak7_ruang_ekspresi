import React from "react";
import iconideation from"../assets/icon-ideation.png";
import iconcreatif from"../assets/icon-creatif.svg";
import iconcollaboration from"../assets/icon-collaboration.png";
import icongraduation from"../assets/icon-graduation.png";

export default function CardGallery() {
    return (
        <section id="About" className="py-10 px-15 md:px-30">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
                </h2>
                <p className="text-center text-gray-600 mb-9 max-w-2xl mx-auto px-2 md:px-20 leading-relaxed">
                    Komprehensif yang dirancang untuk mengembangkan potensi kreatif
                    mahasiswa melalui pendekatan holistik.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           
                    <article className="bg-yellow-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                        <img src={iconideation} alt='icon-ideation' className="w-10 h-12 mb-3"/>
                        <h3 className="text-lg font-semibold mb-4">Ideation</h3>
                        <p className="text-gray-800 text-sm leading-relaxed">
                            Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming
                            dan workshop ideation yang terarah.
                        </p>
                    </article>


                    <article className="bg-green-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                        <img src={iconcreatif} alt='icon-creatif' className='w-10 h-12 mb-3'/>
                         <h3 className="text-lg font-semibold mb-4">Creation</h3>
                         <p className="text-gray-800 text-sm leading-relaxed">
                            Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.
                        </p>
                    </article>


                    <article className="bg-blue-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                        <img src={iconcollaboration} alt="Collaboration" className="w-10 h-12 mb-3"/>
                        <h3 className="text-lg font-semibold mb-4">Collaboration</h3>
                        <p className="text-gray-800 text-sm leading-relaxed">
                            Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.
                        </p>
                    </article>


                    <article className="bg-pink-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                        <img src={icongraduation} alt="icon-graduation" className="w-10 h-12 mb-3"/>
                        <h3 className="text-lg font-semibold mb-4">Guidance & Support</h3>
                        <p className="text-gray-800 text-sm leading-relaxed mb-5">
                            Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
