import React from "react";

export default function CardGallery() {
    return (
        <section id="About" class="py-10 px-15 md:px-30">
            <div class="w-full max-w-7xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-2">
                    Empat Pilar <span class="text-blue-600">Ruang Ekspresi</span>
                </h2>
                <p class="text-center text-gray-600 mb-9 max-w-2xl mx-auto px-2 md:px-20 leading-relaxed">
                    Komprehensif yang dirancang untuk mengembangkan potensi kreatif
                    mahasiswa melalui pendekatan holistik.
                </p>


                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           
                    <article class="bg-yellow-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                        <img src='src/assets/icon-ideation.png' alt='icon-ideation' class="w-10 h-12 mb-3"/>
                        <h3 class="text-lg font-semibold mb-4">Ideation</h3>
                        <p class="text-gray-800 text-sm leading-relaxed">
                            Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming
                            dan workshop ideation yang terarah.
                        </p>
                    </article>


                    <article class="bg-green-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                        <img src='src/assets/icon-creatif.svg' alt='icon-creatif' class='w-10 h-12 mb-3'/>
                         <h3 class="text-lg font-semibold mb-4">Creation</h3>
                         <p class="text-gray-800 text-sm leading-relaxed">
                            Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.
                        </p>
                    </article>


                    <article class="bg-blue-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                        <img src="src/assets/icon-collaboration.png" alt="Collaboration" class="w-10 h-12 mb-3"/>
                        <h3 class="text-lg font-semibold mb-4">Collaboration</h3>
                        <p class="text-gray-800 text-sm leading-relaxed">
                            Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.
                        </p>
                    </article>


                    <article class="bg-pink-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
                        <img src="src/assets/icon-graduation.png" alt="icon-graduation" class="w-10 h-12 mb-3"/>
                        <h3 class="text-lg font-semibold mb-4">Guidance & Support</h3>
                        <p class="text-gray-800 text-sm leading-relaxed mb-5">
                            Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
