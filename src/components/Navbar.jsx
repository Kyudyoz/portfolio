import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal, Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 group font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-105 shadow-sm">
            <Terminal className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
          </div>
          <span className="tracking-tight text-base sm:text-lg">
            Muhammad Iqbal Firdaus
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/70 dark:bg-zinc-900/70 p-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* GitHub button */}
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          {/* LinkedIn button */}
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          {/* Dark Mode Switch */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors relative"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-400 transition-transform rotate-0 scale-100" />
            ) : (
              <Moon className="w-5 h-5 text-zinc-700 transition-transform rotate-0 scale-100" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials quick links in mobile menu */}
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.socials.email}
              className="flex items-center justify-center p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              title="Kirim Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Mode Tema</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              {darkMode ? 'Mode Terang' : 'Mode Gelap'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
