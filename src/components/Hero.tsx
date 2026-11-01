import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Sparkles, Star } from 'lucide-react';
import { ApkDownloadButton } from './ApkDownloadButton';
import { APP_SCREENSHOTS } from '../data/mockData';

interface HeroProps {
  onExploreClick: () => void;
  onStartSellingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStartSellingClick }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#0866FF]/20 via-[#00E5FF]/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#0866FF]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Brand Tagline Kicker with Official Logo */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1428] border border-[#00E5FF]/40 text-xs font-medium text-[#A7B4CA] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">INDIA'S MOST TRUSTED MARKETPLACE</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-300 font-mono">100% ESCROW REFUND</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              BUY & SELL <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-cyan-100 to-[#00E5FF] bg-clip-text text-transparent">
                MONETIZED ASSETS SAFELY.
              </span>
            </h1>

            {/* Supporting Text matching the app hero */}
            <p className="text-base sm:text-lg text-[#A7B4CA] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover quality YouTube channels, Facebook pages, and Instagram accounts. Verified creator accounts, secure escrow payments in Indian Rupees (₹), and instant ownership handover.
            </p>

            {/* Live Stats Pill Strip matching app screenshot */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono">
              <div className="px-3.5 py-1.5 rounded-xl bg-[#0B1428] border border-[#0866FF]/40 text-white font-bold">
                <span className="text-cyan-300">500k+</span> Downloads
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-[#0B1428] border border-[#0866FF]/40 text-white font-bold">
                <span className="text-emerald-400">12k+</span> Assets Sold
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-[#0B1428] border border-[#0866FF]/40 text-white font-bold flex items-center gap-1">
                <span className="text-amber-400">10k+</span> Reviews (4.8★)
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0866FF] hover:bg-[#0052cc] shadow-lg shadow-[#0866FF]/40 hover:shadow-[#0866FF]/60 border border-[#00E5FF]/40 flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer group"
              >
                <span>Explore Trending Assets (₹)</span>
                <ArrowRight className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartSellingClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0B1428] hover:bg-[#111f3d] border border-slate-700 hover:border-[#0866FF] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>Sell Your Channel</span>
              </button>
            </div>

            {/* Standout Highlight APK Download Section in Hero */}
            <div className="pt-2">
              <div className="p-1 rounded-2xl bg-gradient-to-r from-[#0866FF]/40 via-[#00E5FF]/50 to-[#0866FF]/40 shadow-[0_0_25px_rgba(0,229,255,0.25)]">
                <div className="bg-[#070E22] p-4 sm:p-5 rounded-[14px] flex flex-col md:flex-row items-center justify-between gap-4 border border-[#00E5FF]/30">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#00E5FF] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Official Android Application
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      Install YT MARKET Mobile for Instant Push Alerts & Escrow Tracking
                    </div>
                  </div>
                  <ApkDownloadButton variant="hero" showDetails={false} className="shrink-0" />
                </div>
              </div>
            </div>

            {/* Three Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3 border-t border-slate-800/80">
              <div className="flex items-start gap-3 text-left p-3 rounded-xl bg-[#0B1428]/50 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Verified Indian Assets</h4>
                  <p className="text-xs text-[#A7B4CA] mt-0.5">Real subscribers, genuine views & clean strike audits.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left p-3 rounded-xl bg-[#0B1428]/50 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">100% Escrow Safe</h4>
                  <p className="text-xs text-[#A7B4CA] mt-0.5">Payment locked until account transfer confirmation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left p-3 rounded-xl bg-[#0B1428]/50 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Instant Handover</h4>
                  <p className="text-xs text-[#A7B4CA] mt-0.5">Google Brand Account & Meta Suite guided transfer.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Real YT Market App Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Glowing halo backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0866FF]/40 to-[#00E5FF]/30 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              {/* Real App Screenshot Showcase Frame */}
              <div className="relative rounded-[36px] overflow-hidden p-2.5 bg-gradient-to-b from-[#0866FF] via-[#043380] to-[#030817] border-2 border-[#00E5FF] shadow-[0_0_50px_rgba(0,229,255,0.4)] group">
                
                {/* Real App Screenshot */}
                <div className="rounded-[28px] overflow-hidden bg-black relative">
                  <img
                    src={APP_SCREENSHOTS.homeDashboard}
                    alt="YT MARKET Real App Interface"
                    className="w-full h-auto max-h-[580px] object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030817]/80 via-transparent to-transparent opacity-50" />

                  {/* Floating Micro Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#070D1F]/95 backdrop-blur-md border border-[#00E5FF]/50 shadow-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0866FF] to-[#00E5FF] p-0.5">
                        <img
                          src="/assets/aistudio/file_0000000061f081f5a84ef0cf00cf3077_54be5f0a.png"
                          alt="YT Market Logo"
                          className="w-full h-full object-cover rounded-[10px]"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">YT Market Official APK</div>
                        <div className="text-[10px] text-cyan-300 font-mono">500k+ Installs · v2.4</div>
                      </div>
                    </div>
                    <a
                      href="#app-screenshots"
                      className="px-3 py-1.5 rounded-lg bg-[#0866FF] hover:bg-[#0052cc] text-[11px] font-bold text-white shadow"
                    >
                      View Screens
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
