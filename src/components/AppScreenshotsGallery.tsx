import React, { useState } from 'react';
import { Smartphone, CheckCircle2, Star, ShieldCheck, Download, Eye, ExternalLink } from 'lucide-react';
import { APK_DOWNLOAD_URL, APP_SCREENSHOTS } from '../data/mockData';

export const AppScreenshotsGallery: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<string>('home');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const screens = [
    {
      id: 'home',
      label: 'App Home & Escrow',
      title: "India's Trusted Digital Asset Marketplace",
      desc: 'Real dashboard showing 500k+ Downloads, 12k+ Assets Sold, 10k+ Reviews, and Ownership Transfer Rules.',
      img: APP_SCREENSHOTS.homeDashboard,
      highlight: '500k+ Downloads · 100% Refund'
    },
    {
      id: 'youtube',
      label: 'YouTube Channels',
      title: 'Verified YouTube Channels (₹ INR)',
      desc: 'Live listings including HELKAO YOUTUBE (₹2,999) and sjDfreak 2.0 with Escrow Protection & instant handover.',
      img: APP_SCREENSHOTS.youtubeChannels,
      highlight: 'Starting from ₹2,999'
    },
    {
      id: 'facebook',
      label: 'Facebook Pages',
      title: 'Active Facebook Pages (₹ INR)',
      desc: 'In-stream ads ready Facebook pages like morning tea story (₹499) and Rahul Gupta with organic reach.',
      img: APP_SCREENSHOTS.facebookPages,
      highlight: 'Starting from ₹499'
    },
    {
      id: 'instagram',
      label: 'Instagram Accounts',
      title: 'Instagram Accounts Starting at ₹99',
      desc: 'Aesthetic creator profiles (ANSHIKA, aditi Yadav, SHRUTI, VANAJA) verified with original emails.',
      img: APP_SCREENSHOTS.instagramAccounts1,
      highlight: 'Starting from ₹99'
    },
    {
      id: 'reviews',
      label: '10,200+ App Reviews',
      title: 'Genuine Customer Reviews (4.8★)',
      desc: 'Over 10,200 verified customer order reviews and ratings directly from the YT Market Android app.',
      img: APP_SCREENSHOTS.customerReviews,
      highlight: '4.8 ★ / 5.0 Rating'
    }
  ];

  const currentScreenData = screens.find(s => s.id === selectedScreen) || screens[0];

  return (
    <section id="app-screenshots" className="py-16 sm:py-24 bg-[#070D1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#00E5FF]/40 text-xs font-semibold text-[#00E5FF] mb-3 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <Smartphone className="w-3.5 h-3.5" />
            <span>AUTHENTIC ANDROID APP EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Real App Interface & Live Listings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            Explore the authentic YT Market Android application interface, real customer feedback, and active listings priced in Indian Rupees (₹).
          </p>

          {/* Screen category switch tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {screens.map((sc) => (
              <button
                key={sc.id}
                onClick={() => setSelectedScreen(sc.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedScreen === sc.id
                    ? 'bg-gradient-to-r from-[#0866FF] to-[#00E5FF] text-white shadow-lg shadow-[#00E5FF]/25 border border-[#00E5FF]'
                    : 'bg-[#0B1428] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {sc.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div className="rounded-3xl bg-[#0B1428] border border-[#0866FF]/40 p-6 sm:p-10 shadow-[0_0_40px_rgba(8,102,255,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Explanatory info & features (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{currentScreenData.highlight}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {currentScreenData.title}
              </h3>

              <p className="text-sm text-[#A7B4CA] leading-relaxed">
                {currentScreenData.desc}
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Real Indian creator channels with active audience</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>All transactions protected by Escrow Safe 100% Refund</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Transparent pricing in Indian Rupees (₹99 – ₹14,500)</span>
                </div>
              </div>

              {/* Download APK Direct Button */}
              <div className="pt-4">
                <a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0866FF] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#0866FF] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#00E5FF]/30 hover:scale-105 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download YT Market APK on Android</span>
                </a>
              </div>
            </div>

            {/* Right: Phone Frame with Authentic App Screenshot (7 cols) */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-sm rounded-[36px] p-3 bg-gradient-to-b from-[#0866FF] via-[#043380] to-[#030817] shadow-[0_0_50px_rgba(0,229,255,0.4)] border border-[#00E5FF]/60">
                
                {/* Phone Speaker & Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#030817] rounded-full z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Screenshot Display */}
                <div className="relative rounded-[28px] overflow-hidden bg-black border border-slate-800 shadow-inner group">
                  <img
                    src={currentScreenData.img}
                    alt={currentScreenData.title}
                    className="w-full h-auto max-h-[580px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                    onClick={() => setLightboxImage(currentScreenData.img)}
                    referrerPolicy="no-referrer"
                  />

                  {/* Zoom indicator on hover */}
                  <div
                    onClick={() => setLightboxImage(currentScreenData.img)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  >
                    <div className="px-4 py-2 rounded-xl bg-[#030817]/90 border border-[#00E5FF] text-xs font-bold text-white flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#00E5FF]" />
                      <span>Click to Enlarge App Screenshot</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Gallery Thumbnails Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {Object.entries(APP_SCREENSHOTS).map(([key, imgPath], idx) => (
            <div
              key={key}
              onClick={() => setLightboxImage(imgPath)}
              className="group relative rounded-xl overflow-hidden border border-slate-800 hover:border-[#00E5FF] transition-all cursor-pointer h-28 bg-[#0B1428]"
            >
              <img
                src={imgPath}
                alt={`App Screen ${idx + 1}`}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                <span className="text-[9px] font-mono font-bold text-cyan-300">Screen #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-md max-h-[90vh] rounded-2xl overflow-hidden border-2 border-[#00E5FF] shadow-2xl bg-black">
            <img
              src={lightboxImage}
              alt="Enlarged App Screenshot"
              className="w-full h-auto max-h-[85vh] object-contain"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/80 text-white border border-slate-600 text-xs font-bold"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
