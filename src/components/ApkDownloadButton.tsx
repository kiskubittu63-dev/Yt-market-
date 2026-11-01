import React from 'react';
import { Download, ShieldCheck, Smartphone } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../data/mockData';

interface ApkDownloadButtonProps {
  variant?: 'hero' | 'header' | 'card' | 'floating';
  className?: string;
  showDetails?: boolean;
}

export const ApkDownloadButton: React.FC<ApkDownloadButtonProps> = ({
  variant = 'hero',
  className = '',
  showDetails = true
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(APK_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'header') {
    return (
      <a
        href={APK_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium text-xs text-white bg-gradient-to-r from-[#0866FF] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#0866FF] shadow-lg shadow-[#00E5FF]/25 hover:shadow-[#00E5FF]/40 border border-[#00E5FF]/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer whitespace-nowrap ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <Download className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        <span className="font-semibold tracking-wide">Download APK</span>
      </a>
    );
  }

  if (variant === 'floating') {
    return (
      <a
        href={APK_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0B1428]/95 backdrop-blur-xl border-2 border-[#00E5FF] text-white shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] transition-all duration-300 hover:scale-105 group cursor-pointer"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0866FF] to-[#00E5FF] flex items-center justify-center text-white shadow-md">
          <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00E5FF]">Official App</span>
            <span className="text-[9px] px-1 py-0.2 bg-[#0866FF]/30 border border-[#00E5FF]/40 rounded text-cyan-300">v2.4</span>
          </div>
          <div className="text-sm font-bold leading-tight flex items-center gap-1.5">
            Download APK <Download className="w-3.5 h-3.5 text-[#00E5FF] animate-bounce" />
          </div>
        </div>
      </a>
    );
  }

  // Hero / Card full highlight variant
  return (
    <div className={`flex flex-col items-start gap-2.5 ${className}`}>
      <a
        href={APK_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative inline-flex items-center justify-between gap-4 sm:gap-6 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0866FF] via-[#0084FF] to-[#00E5FF] p-[2px] transition-all duration-300 hover:scale-[1.02] shadow-[0_0_35px_rgba(8,102,255,0.4),0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_55px_rgba(0,229,255,0.6)] cursor-pointer w-full sm:w-auto overflow-hidden"
      >
        {/* Shimmer sweep effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all pointer-events-none" />

        <div className="w-full flex items-center justify-between gap-4 px-4 py-2.5 rounded-[14px] bg-[#030817]/40 backdrop-blur-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:rotate-6 transition-transform">
              <Smartphone className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold tracking-wider text-cyan-200 uppercase flex items-center gap-1.5">
                <span>Android Direct Download</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00E5FF]/20 text-[#00E5FF] font-mono font-bold">APK</span>
              </div>
              <div className="text-lg sm:text-xl font-display font-extrabold text-white tracking-tight leading-snug">
                Download YT MARKET APK
              </div>
            </div>
          </div>

          <div className="w-10 h-10 rounded-xl bg-[#00E5FF] text-[#030817] flex items-center justify-center font-bold shadow-lg shadow-[#00E5FF]/30 group-hover:translate-y-0.5 transition-transform shrink-0">
            <Download className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>
      </a>

      {showDetails && (
        <div className="flex items-center gap-4 text-xs text-[#A7B4CA] px-2">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" /> Direct MediaFire Host
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Version 2.4.1</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>18.4 MB (Fast & Safe)</span>
        </div>
      )}
    </div>
  );
};
