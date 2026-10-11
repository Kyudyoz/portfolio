import React from 'react';
import { User, CheckCircle2, GraduationCap, Code, Rocket } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const points = [
    {
      title: "Proyek dengan Fungsi yang Jelas",
      desc: "Portofolio ini mencakup aplikasi kasir kafe, pelaporan barang hilang di kampus, dan pencatatan keuangan pribadi.",
      icon: <Rocket className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Web dan Mobile",
      desc: "Saya menggunakan Laravel dan Livewire untuk aplikasi web, React untuk antarmuka, serta Flutter untuk aplikasi mobile.",
      icon: <Code className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Latar Belakang Sistem Informasi",
      desc: "Saya belajar di Universitas Jambi dan pernah mengerjakan proyek rekayasa perangkat lunak serta riset operasi.",
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
              Saya Membuat Aplikasi Web dan Mobile
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>
                Saya belajar Sistem Informasi di <span className="font-semibold text-zinc-900 dark:text-zinc-200">{personalInfo.institution}</span> dan tertarik mengembangkan aplikasi web maupun mobile.
              </p>
              <p>
                Saya pernah mengerjakan proyek kuliah, capstone, dan proyek mandiri. Pekerjaan saya mencakup pengelolaan data, logika aplikasi, dan antarmuka.
              </p>
              <p>
                Teknologi yang paling sering saya gunakan adalah <span className="text-emerald-600 dark:text-emerald-400 font-medium">Laravel & Livewire</span>, <span className="text-emerald-600 dark:text-emerald-400 font-medium">Tailwind CSS & React</span>, dan <span className="text-emerald-600 dark:text-emerald-400 font-medium">Flutter</span>.
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
