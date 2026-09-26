import React from 'react';
import { Code2, Database, Smartphone, Wrench, Cpu } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-5 h-5 text-emerald-500" />;
      case 1:
        return <Database className="w-5 h-5 text-blue-500" />;
      case 2:
        return <Smartphone className="w-5 h-5 text-purple-500" />;
      case 3:
      default:
        return <Wrench className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-200/70 dark:border-zinc-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Keahlian & Kemampuan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Tech Stack & Alat Kerja
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Teknologi dan kerangka kerja yang rutin saya gunakan untuk mengembangkan sistem web handal, aplikasi mobile, dan pemrosesan algoritma komputasi.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <div
              key={group.category}
              className="p-6 bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80">
                  {getIcon(idx)}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                  {group.category}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-medium bg-zinc-50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200/50 dark:border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
