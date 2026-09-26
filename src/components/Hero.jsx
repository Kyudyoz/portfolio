import React from 'react';
import { ArrowDown, ExternalLink, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle modern background gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Column: Text & Intro */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-6 animate-in fade-in duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Terbuka untuk Kolaborasi & Proyek Baru</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15] mb-4">
              Halo, Saya <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400 mb-5">
              {personalInfo.tagline}
            </p>

            {/* Brief Bio */}
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Quick meta tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-8">
              <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60">
                <GraduationCap className="w-4 h-4 text-emerald-500" />
                <span>{personalInfo.institution}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm hover:shadow active:scale-95"
              >
                <span>Lihat Karya & Proyek</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 active:scale-95 group"
                title="Profil GitHub"
              >
                <GithubIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all hover:border-blue-300 dark:hover:border-blue-700/60 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] active:scale-95 group"
                title="Profil LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-300 group-hover:text-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right Column: Avatar & Card */}
          <div className="relative flex-shrink-0">
            {/* Ambient decorative glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-zinc-200/40 dark:via-zinc-800/40 to-transparent blur-xl -z-10" />

            <div className="relative p-2.5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://ui-avatars.com/api/?name=Iqbal+Firdaus&background=0D8ABC&color=fff";
                  }}
                />
              </div>

              {/* Floating mini badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 py-2 px-3 rounded-xl shadow-lg flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Laravel & Flutter Dev</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 sm:mt-20 pt-8 border-t border-zinc-200/70 dark:border-zinc-800/70">
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
