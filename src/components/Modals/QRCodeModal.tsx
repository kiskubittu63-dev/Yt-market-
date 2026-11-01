import React from 'react';
import { X, Smartphone, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

interface QRCodeModalProps {
  downloadUrl: string;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ downloadUrl, onClose }) => {
  // Safe SVG QR Code representation encoding the APK download link
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0B1428] border-2 border-[#00E5FF]/60 shadow-[0_0_50px_rgba(0,229,255,0.4)] overflow-hidden text-white my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#070D1F] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Smartphone className="w-5 h-5 text-[#00E5FF]" />
            <h3 className="font-display font-bold text-base text-white">Scan to Install on Mobile</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#030817] text-slate-400 hover:text-white border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 text-center space-y-6">
          <BrandLogo size="md" showTagline={true} className="justify-center" />

          {/* QR Code Container */}
          <div className="p-5 rounded-2xl bg-white mx-auto w-56 h-56 flex items-center justify-center shadow-2xl relative border-4 border-[#00E5FF]">
            {/* High visual fidelity QR code image using public qr api */}
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(downloadUrl)}`}
              alt="Scan to download YT MARKET APK"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-1.5 text-xs text-[#A7B4CA]">
            <p className="font-semibold text-white">How to install:</p>
            <p>1. Open your Android phone camera or scanner.</p>
            <p>2. Scan this QR code to open MediaFire direct download.</p>
            <p>3. Tap Install to experience the full YT MARKET mobile app.</p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0866FF] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#0866FF] text-xs font-bold text-white shadow-lg shadow-[#00E5FF]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Or Download Directly (MediaFire Mirror)</span>
            </a>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Clean APK · Version 2.4.1 · 18.4 MB</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
