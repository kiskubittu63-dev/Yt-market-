import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ApkDownloadButton } from './ApkDownloadButton';
import { ShieldCheck, ArrowUp, Heart } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../data/mockData';

interface FooterProps {
  onOpenPolicyModal: (type: 'terms' | 'privacy' | 'refund' | 'cancellation' | 'buyer' | 'seller' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050E] text-[#A7B4CA] border-t border-[#0866FF]/20 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" showTagline={true} />
            <p className="text-xs sm:text-sm text-[#A7B4CA] leading-relaxed max-w-sm pt-2">
              The premier international digital asset marketplace connecting buyers and creators of YouTube channels, Facebook pages, and Instagram accounts with escrow security.
            </p>

            <div className="pt-2">
              <ApkDownloadButton variant="header" />
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
              <span>Independent Escrow & Audit Architecture</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Marketplace
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#00E5FF] transition-colors">Home</a></li>
              <li><a href="#marketplace-listings" className="hover:text-[#00E5FF] transition-colors">Featured Listings</a></li>
              <li><a href="#categories" className="hover:text-[#00E5FF] transition-colors">YouTube Channels</a></li>
              <li><a href="#categories" className="hover:text-[#00E5FF] transition-colors">Facebook Pages</a></li>
              <li><a href="#categories" className="hover:text-[#00E5FF] transition-colors">Instagram Accounts</a></li>
              <li><a href="#escrow-wallet" className="hover:text-[#00E5FF] transition-colors">Escrow Portal</a></li>
            </ul>
          </div>

          {/* Platform & Trust (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Trust & Guidelines
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-[#00E5FF] transition-colors">How It Works</a></li>
              <li><a href="#trust-security" className="hover:text-[#00E5FF] transition-colors">Safety & Security</a></li>
              <li><button onClick={() => onOpenPolicyModal('buyer')} className="hover:text-[#00E5FF] transition-colors text-left cursor-pointer">Buyer Guidelines</button></li>
              <li><button onClick={() => onOpenPolicyModal('seller')} className="hover:text-[#00E5FF] transition-colors text-left cursor-pointer">Seller Guidelines</button></li>
              <li><button onClick={() => onOpenPolicyModal('refund')} className="hover:text-[#00E5FF] transition-colors text-left cursor-pointer">Refund Policy</button></li>
              <li><button onClick={() => onOpenPolicyModal('cancellation')} className="hover:text-[#00E5FF] transition-colors text-left cursor-pointer">Cancellation Policy</button></li>
              <li><a href="#faq" className="hover:text-[#00E5FF] transition-colors">FAQ Knowledgebase</a></li>
            </ul>
          </div>

          {/* Legal & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Legal & Disclaimers
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onOpenPolicyModal('terms')} className="hover:text-[#00E5FF] transition-colors text-left cursor-pointer">Terms & Conditions</button></li>
              <li><button onClick={() => onOpenPolicyModal('privacy')} className="hover:text-[#00E5FF] transition-colors text-left cursor-pointer">Privacy Policy</button></li>
              <li><button onClick={() => onOpenPolicyModal('disclaimer')} className="hover:text-[#00E5FF] transition-colors text-left cursor-pointer">Platform Disclaimer</button></li>
              <li><a href="#contact" className="hover:text-[#00E5FF] transition-colors">Contact Support</a></li>
              <li>
                <a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-bold hover:underline inline-flex items-center gap-1"
                >
                  Direct APK Mirror ↗
                </a>
              </li>
            </ul>

            {/* Social channels */}
            <div className="pt-3">
              <span className="text-[10px] uppercase font-bold text-slate-500 block mb-2 font-mono">Follow YT MARKET</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="w-8 h-8 rounded-lg bg-[#0B1428] border border-slate-800 hover:border-red-500 hover:text-red-400 flex items-center justify-center text-slate-400 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Page"
                  className="w-8 h-8 rounded-lg bg-[#0B1428] border border-slate-800 hover:border-[#1877F2] hover:text-[#1877F2] flex items-center justify-center text-slate-400 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Account"
                  className="w-8 h-8 rounded-lg bg-[#0B1428] border border-slate-800 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center text-slate-400 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 YT MARKET. All Rights Reserved. BUY • SELL • GROW.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-[#0B1428] border border-slate-700 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
