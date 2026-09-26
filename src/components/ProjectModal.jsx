import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200  transition-colors z-10"
          aria-label="Tutup Detail"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-6 border border-zinc-200/80 dark:border-zinc-700/80 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md border border-white/10">
            {project.badge}
          </div>
        </div>

        {/* Modal Header */}
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
            {project.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlight Note */}
        {project.highlight && (
          <div className="mb-6 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Sorotan Proyek
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 mt-0.5">
                {project.highlight}
              </p>
            </div>
          </div>
        )}

        {/* Tech Stack List */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Teknologi yang Digunakan
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md border border-zinc-200/60 dark:border-zinc-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Buka Repositori GitHub</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Kunjungi Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
