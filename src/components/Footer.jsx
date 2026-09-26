import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import WhatsAppIcon from './WhatsAppIcon';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-zinc-800 dark:text-zinc-200">{personalInfo.name}</span> (Kyudyoz). All rights reserved.
          </p>
        </div>

        {/* Middle: Social Links */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
            className="p-2 rounded-lg text-zinc-500 hover:text-[#0A66C2] dark:text-zinc-400 dark:hover:text-[#0A66C2] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat"
            title="WhatsApp"
            className="p-2 rounded-lg text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.email}
            aria-label="Kirim Email"
            title="Email"
            className="p-2 rounded-lg text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
