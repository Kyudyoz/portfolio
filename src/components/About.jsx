import React from 'react';
import { User, CheckCircle2, GraduationCap, Code, Rocket } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const points = [
    {
      title: "Solusi Berbasis Kebutuhan Nyata",
      desc: "Mengembangkan aplikasi yang langsung menjawab tantangan nyata, mulai dari sistem kasir kafe, pelaporan barang hilang kampus, hingga pencatatan keuangan pribadi.",
      icon: <Rocket className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Arsitektur Bersih & Terstruktur",
      desc: "Berpengalaman mengimplementasikan pola MVC dengan Laravel, reaktivitas modern menggunakan Livewire & React, serta desain antarmuka bersih dengan Tailwind CSS.",
      icon: <Code className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Pondasi Akademik Kuat",
      desc: "Menempuh pendidikan di Universitas Jambi dengan ketertarikan pada rekayasa perangkat lunak, optimasi komputasi riset operasi, dan mobile app engineering.",
      icon: <GraduationCap className="w-5 h-5 text-purple-500" />
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-200/70 dark:border-zinc-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              <User className="w-3.5 h-3.5" />
              <span>Tentang Saya</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
              Membangun Pengalaman Digital yang Bersih & Bertenaga
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>
                Saya adalah mahasiswa di <span className="font-semibold text-zinc-900 dark:text-zinc-200">{personalInfo.institution}</span> yang memiliki antusiasme mendalam pada rekayasa web dan mobile.
              </p>
              <p>
                Melalui berbagai proyek akademik, capstone, dan riset mandiri, saya terbiasa membangun sistem dari perancangan basis data hingga antarmuka pengguna yang responsif. Saya percaya bahwa kode yang baik adalah kode yang rapi, mudah dirawat, dan memberikan manfaat langsung bagi penggunanya.
              </p>
              <p>
                Saat ini, saya banyak berfokus pada ekosistem <span className="text-emerald-600 dark:text-emerald-400 font-medium">Laravel & Livewire</span>, perancangan antarmuka <span className="text-emerald-600 dark:text-emerald-400 font-medium">Tailwind CSS & React</span>, serta pengembangan mobile <span className="text-emerald-600 dark:text-emerald-400 font-medium">Flutter</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Key Principles */}
          <div className="lg:col-span-6 space-y-4">
            {points.map((pt, i) => (
              <div
                key={i}
                className="p-5 bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                    {pt.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
