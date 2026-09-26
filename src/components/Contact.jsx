import React, { useState } from 'react';
import { Mail, MapPin, Check, Copy, MessageSquare } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import WhatsAppIcon from './WhatsAppIcon';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = personalInfo.socials.email.replace(/^mailto:/, '');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const rawNumber = personalInfo.socials.whatsappNumber || "628xxxxxxxxxx";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');

    const firstName = personalInfo.name || "Iqbal";
    const intro = `Halo ${firstName}, perkenalkan saya *${formData.name.trim()}*${formData.email.trim() ? ` (${formData.email.trim()})` : ''}.`;
    const body = formData.message.trim();
    const fullText = `${intro}\n\n${body}`;

    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(fullText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200/70 dark:border-zinc-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Mari Mulai Berkolaborasi
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Apakah Anda memiliki proyek, peluang kerja sama, atau sekadar ingin berdiskusi seputar teknologi? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* WhatsApp Direct Card */}
            <a
              href={personalInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-400/80 dark:hover:border-emerald-600/80 transition-all flex items-center justify-between group shadow-sm hover:shadow"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">WhatsApp Chat</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Chat Langsung
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                Buka Chat &rarr;
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#0A66C2]/40 dark:hover:border-[#0A66C2]/50 transition-all flex items-center justify-between group shadow-sm hover:shadow"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-[#0A66C2]/10 text-[#0A66C2] group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-[#0A66C2] transition-colors">
                    Muhammad Iqbal Firdaus
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-[#0A66C2] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                Terhubung &rarr;
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-between group shadow-sm hover:shadow"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">GitHub Profile</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    github.com/Kyudyoz
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                Kunjungi &rarr;
              </span>
            </a>

            {/* Email Card with direct mailto & copy button */}
            <div className="p-4 sm:p-5 bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-between shadow-sm">
              <a
                href={personalInfo.socials.email}
                className="flex items-center gap-3.5 flex-1 min-w-0 group"
                title="Kirim email"
              >
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Email Utama</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {emailAddress}
                  </div>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ml-2 flex-shrink-0"
                title="Salin alamat email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Domisili</div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm">
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Kirim Pesan via WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Isi form di bawah untuk otomatis merapikan pesan Anda dan membukanya langsung di WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm flex items-center gap-3 animate-in fade-in">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Membuka WhatsApp... Jika tidak terbuka otomatis, silakan klik tombol WhatsApp di samping.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                        Nama Lengkap <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama Anda"
                        className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-zinc-900 dark:text-zinc-100 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                        Email atau No. HP <span className="text-zinc-400 font-normal">(Opsional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email / nomor kontak Anda"
                        className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-zinc-900 dark:text-zinc-100 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Pesan atau Detail Proyek <span className="text-emerald-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan proyek, peluang kerja sama, atau pesan yang ingin didiskusikan..."
                      className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-zinc-900 dark:text-zinc-100 transition-all placeholder:text-zinc-400 resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-sm hover:shadow active:scale-95 group"
                    >
                      <WhatsAppIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span>Kirim via WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-2">
                      * Mengarahkan langsung ke WhatsApp Web / Aplikasi tanpa perantara bot.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
