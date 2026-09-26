import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, ArrowRight, FolderGit2, Star } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { projects, projectCategories } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      // Category filter
      let matchesCategory = true;
      if (activeCategory === 'Unggulan') {
        matchesCategory = item.featured;
      } else if (activeCategory !== 'Semua') {
        matchesCategory = item.category === activeCategory;
      }

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 border-t border-zinc-200/70 dark:border-zinc-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portofolio Repositori</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Proyek Pilihan & Repositori
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Daftar proyek aplikasi web, mobile, dan sistem informasi yang dikembangkan dan bersumber dari repositori GitHub saya.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Cari proyek atau teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-zinc-800 dark:text-zinc-200 transition-all placeholder:text-zinc-400"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {category === 'Unggulan' && (
                  <Star className="w-3.5 h-3.5 inline mr-1 text-amber-400 fill-amber-400" />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 overflow-hidden hover:shadow-lg dark:hover:shadow-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
              >
                {/* Image & Badges */}
                <div
                  className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-zinc-900/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-white/10">
                    {project.badge}
                  </div>

                  {/* Live demo indicator pill if present */}
                  {project.demoUrl && (
                    <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Live</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    {/* Category */}
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-1">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer section: Tags & Links */}
                  <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[11px] font-medium text-zinc-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        <span>Detail</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Repositori GitHub"
                            className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Buka Demo"
                            className="p-1.5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty search state */
          <div className="text-center py-16 bg-white dark:bg-zinc-900/50 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
            <Search className="w-8 h-8 text-zinc-400 mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
              Tidak ada proyek yang sesuai
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Coba cari dengan kata kunci lain atau pilih kategori "Semua".
            </p>
            <button
              onClick={() => {
                setActiveCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
