import React, { useState } from 'react';
import { Smartphone, Download, QrCode, ShieldCheck, Zap, Bell, CheckCircle2, Sparkles } from 'lucide-react';
import { APK_DOWNLOAD_URL, APP_SCREENSHOTS } from '../data/mockData';
import { BrandLogo } from './BrandLogo';
import { QRCodeModal } from './Modals/QRCodeModal';

export const AppPromotionSection: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(APK_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
  };

  const appFeatures = [
    { title: 'Explore Accounts in Indian Rupees (₹)', desc: 'Instant filtering of YouTube channels, Meta pages, and IG IDs starting at ₹99.', icon: Zap },
    { title: 'Escrow Safe 100% Refund', desc: 'Protected funds vault until you confirm verified administrative handover.', icon: ShieldCheck },
    { title: 'Live Handover Push Alerts', desc: 'Instant push notifications when buyer deposits or ownership transfer starts.', icon: Bell },
    { title: 'Instant Support & Chat', desc: 'Chat with buyers and sellers through verified in-app sessions.', icon: CheckCircle2 }
  ];

  return (
    <section id="mobile-app" className="py-16 sm:py-24 bg-[#030817] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#0866FF]/20 via-[#00E5FF]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: App Copy, Features & Highlighted Download Button (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1428] border border-[#00E5FF]/40 text-xs font-semibold text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL ANDROID APP · 500K+ DOWNLOADS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
              Your Digital Marketplace, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#00E5FF] via-cyan-100 to-white bg-clip-text text-transparent">
                Right in Your Pocket.
              </span>
            </h2>

            <p className="text-base text-[#A7B4CA] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the full YT Market app on Android. Browse trending assets, buy verified accounts in Indian Rupees (₹), track escrow milestones in real-time, and get 24/7 support.
            </p>

            {/* App Capability Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {appFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="p-3.5 rounded-xl bg-[#0B1428] border border-slate-800 flex items-start gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-[#0866FF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{feat.title}</h4>
                      <p className="text-[11px] text-[#A7B4CA] mt-0.5 leading-snug">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlighted Premium Download Button Area */}
            <div className="pt-4 space-y-4">
              
              {/* Main Glowing APK Download Card */}
              <div className="p-1 rounded-2xl bg-gradient-to-r from-[#0866FF] via-[#00E5FF] to-[#0866FF] shadow-[0_0_45px_rgba(0,229,255,0.5)] hover:shadow-[0_0_65px_rgba(0,229,255,0.75)] transition-all">
                <div className="bg-[#070E22] p-5 sm:p-6 rounded-[14px] flex flex-col sm:flex-row items-center justify-between gap-6">
                  
                  {/* Brand App Icon + Meta */}
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-br from-[#0866FF] to-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.5)] shrink-0">
                      <img
                        src="/assets/aistudio/file_0000000061f081f5a84ef0cf00cf3077_54be5f0a.png"
                        alt="YT Market Logo"
                        className="w-full h-full object-cover rounded-[14px]"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-extrabold tracking-widest text-[#00E5FF]">YT MARKET APP</span>
                        <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-[10px] font-mono font-bold">500K+ USERS</span>
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        Official Package: <span className="font-mono text-cyan-200">yt market.in.apk</span>
                      </div>
                      <div className="text-xs text-[#A7B4CA] mt-1 flex items-center gap-2">
                        <span>v2.4.1</span>
                        <span>·</span>
                        <span>18.4 MB</span>
                        <span>·</span>
                        <span>Android 8.0+</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Download Trigger */}
                  <a
                    href={APK_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-display font-extrabold text-sm text-[#030817] bg-[#00E5FF] hover:bg-white shadow-lg shadow-[#00E5FF]/40 flex items-center justify-center gap-2.5 transition-all transform hover:scale-105 cursor-pointer shrink-0"
                  >
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <span>Download APK Now</span>
                  </a>

                </div>
              </div>

              {/* Secondary Options */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#A7B4CA]">
                <button
                  onClick={() => setQrModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white hover:underline cursor-pointer"
                >
                  <QrCode className="w-4 h-4 text-[#00E5FF]" />
                  <span>Scan QR Code to Download on Mobile</span>
                </button>

                <span className="text-slate-700">|</span>

                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> Direct MediaFire Cloud Mirror (100% Virus Free)
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Real Smartphone Mockup with Real App Screen (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Neon aura */}
              <div className="absolute inset-0 bg-[#00E5FF]/25 rounded-[40px] blur-3xl transform scale-90 pointer-events-none" />

              {/* Real Phone Frame */}
              <div className="relative rounded-[36px] overflow-hidden p-2.5 bg-gradient-to-b from-[#0866FF] via-[#00E5FF]/40 to-[#030817] border-2 border-[#00E5FF] shadow-[0_0_45px_rgba(0,229,255,0.4)] group">
                <div className="rounded-[28px] overflow-hidden bg-black relative">
                  <img
                    src={APP_SCREENSHOTS.homeDashboard}
                    alt="YT MARKET Real App Mockup"
                    className="w-full h-auto max-h-[580px] object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030817] via-transparent to-transparent opacity-60" />

                  {/* Floating Action Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#070D1F]/90 backdrop-blur-md border border-[#0866FF]/60 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#00E5FF] text-[#030817] flex items-center justify-center font-bold">
                        <Download className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Direct APK Download</div>
                        <div className="text-[10px] text-cyan-300">Fast MediaFire Transfer</div>
                      </div>
                    </div>
                    <a
                      href={APK_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDownload}
                      className="px-3.5 py-1.5 rounded-lg bg-[#0866FF] hover:bg-[#0052cc] text-[11px] font-bold text-white shadow"
                    >
                      Install
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* QR Code Modal */}
      {qrModalOpen && (
        <QRCodeModal
          downloadUrl={APK_DOWNLOAD_URL}
          onClose={() => setQrModalOpen(false)}
        />
      )}
    </section>
  );
};
