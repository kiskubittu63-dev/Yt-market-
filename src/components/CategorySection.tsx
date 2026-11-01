import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PlatformType } from '../types/marketplace';
import { APP_SCREENSHOTS } from '../data/mockData';

interface CategorySectionProps {
  onSelectCategory: (platform: PlatformType) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>EXPLORE ASSETS BY CATEGORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Explore Digital Assets (₹ INR)
          </h2>
          <p className="mt-3 text-base text-[#A7B4CA]">
            Select your preferred social platform to discover verified listings with authentic Indian creator audiences, clean strike records, and monitored escrow handovers.
          </p>
        </div>

        {/* Three Category Cards with Real App Screenshots */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: YouTube Channels */}
          <div className="group relative rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,102,255,0.35)] flex flex-col overflow-hidden">
            {/* Visual Thumbnail using Real App Screenshot */}
            <div className="relative h-52 overflow-hidden bg-slate-900">
              <img
                src={APP_SCREENSHOTS.youtubeChannels}
                alt="YouTube Channels Marketplace in YT Market App"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1428] via-[#0B1428]/40 to-transparent" />
              
              {/* Platform Logo Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-red-500/40">
                <div className="w-5 h-5 rounded-md bg-red-600 flex items-center justify-center text-white">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-white tracking-wide">YouTube</span>
              </div>

              {/* Price badge in ₹ INR */}
              <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded bg-[#030817]/90 border border-slate-700 text-xs font-mono text-emerald-400 tabular-nums">
                Starting from ₹2,999
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                  YouTube Channels
                </h3>
                <p className="mt-2 text-sm text-[#A7B4CA] leading-relaxed">
                  Monetized channels and verified creators (HELKAO YOUTUBE, sjDfreak 2.0). Ready for Google Brand Account owner transfer with clean copyright records.
                </p>

                {/* Category tags */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#A7B4CA]">
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">Santali / Regional</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">Tech & Motivation</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">AdSense Active</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  <span className="text-white font-bold font-mono">140+</span> Listed Channels
                </div>
                <button
                  onClick={() => onSelectCategory('youtube')}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0866FF] hover:bg-[#0052cc] border border-[#00E5FF]/40 shadow-md shadow-[#0866FF]/30 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>View YouTube Channels</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00E5FF]" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: Facebook Pages */}
          <div className="group relative rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,102,255,0.35)] flex flex-col overflow-hidden">
            {/* Visual Thumbnail */}
            <div className="relative h-52 overflow-hidden bg-slate-900">
              <img
                src={APP_SCREENSHOTS.facebookPages}
                alt="Facebook Pages Marketplace in YT Market App"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1428] via-[#0B1428]/40 to-transparent" />
              
              {/* Platform Logo Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-blue-500/40">
                <div className="w-5 h-5 rounded-md bg-[#1877F2] flex items-center justify-center text-white font-bold text-xs">
                  f
                </div>
                <span className="text-xs font-bold text-white tracking-wide">Facebook</span>
              </div>

              {/* Price badge in ₹ INR */}
              <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded bg-[#030817]/90 border border-slate-700 text-xs font-mono text-emerald-400 tabular-nums">
                Starting from ₹499
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                  Facebook Pages
                </h3>
                <p className="mt-2 text-sm text-[#A7B4CA] leading-relaxed">
                  Established pages with organic reach (morning tea story, Rahul Gupta). In-stream ads ready with Meta Business Manager primary admin permissions.
                </p>

                {/* Category tags */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#A7B4CA]">
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">Stories & Quotes</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">Spiritual & Viral</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">In-Stream Ads</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  <span className="text-white font-bold font-mono">92+</span> Active Pages
                </div>
                <button
                  onClick={() => onSelectCategory('facebook')}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0866FF] hover:bg-[#0052cc] border border-[#00E5FF]/40 shadow-md shadow-[#0866FF]/30 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Explore Facebook Pages</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00E5FF]" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3: Instagram Accounts */}
          <div className="group relative rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,102,255,0.35)] flex flex-col overflow-hidden">
            {/* Visual Thumbnail */}
            <div className="relative h-52 overflow-hidden bg-slate-900">
              <img
                src={APP_SCREENSHOTS.instagramAccounts1}
                alt="Instagram Accounts Marketplace in YT Market App"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1428] via-[#0B1428]/40 to-transparent" />
              
              {/* Platform Logo Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-pink-500/40">
                <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600 flex items-center justify-center text-white">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-white tracking-wide">Instagram</span>
              </div>

              {/* Price badge in ₹ INR */}
              <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded bg-[#030817]/90 border border-slate-700 text-xs font-mono text-emerald-400 tabular-nums">
                Starting from ₹99
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                  Instagram Accounts
                </h3>
                <p className="mt-2 text-sm text-[#A7B4CA] leading-relaxed">
                  Real creator handles (ANSHIKA, aditi Yadav, SHRUTI, VANAJA) starting at ₹99 with original email credentials and active story viewers.
                </p>

                {/* Category tags */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#A7B4CA]">
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">Content 360</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">Fashion & Vlogs</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#030817] border border-slate-800">Starting ₹99</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  <span className="text-white font-bold font-mono">118+</span> Verified Accounts
                </div>
                <button
                  onClick={() => onSelectCategory('instagram')}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0866FF] hover:bg-[#0052cc] border border-[#00E5FF]/40 shadow-md shadow-[#0866FF]/30 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Explore Instagram Accounts</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00E5FF]" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
