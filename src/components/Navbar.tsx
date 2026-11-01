import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PlusCircle, User, Shield } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ApkDownloadButton } from './ApkDownloadButton';

interface NavbarProps {
  onOpenSellModal: () => void;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
  onSelectCategory?: (category: 'all' | 'youtube' | 'facebook' | 'instagram') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSellModal,
  onOpenAuthModal,
  onSelectCategory
}) => {
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
    { label: 'Home', href: '#hero' },
    { label: 'Explore Channels', href: '#categories', onClick: () => onSelectCategory && onSelectCategory('youtube') },
    { label: 'Facebook Pages', href: '#categories', onClick: () => onSelectCategory && onSelectCategory('facebook') },
    { label: 'Instagram Accounts', href: '#categories', onClick: () => onSelectCategory && onSelectCategory('instagram') },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Safety & Security', href: '#trust-security' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030817]/90 backdrop-blur-xl border-b border-[#0866FF]/30 shadow-lg shadow-black/50'
          : 'bg-[#030817]/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: YT MARKET Brand */}
        <a href="#hero" className="flex items-center shrink-0">
          <BrandLogo size="md" showTagline={true} />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#A7B4CA]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  link.onClick();
                }
              }}
              className="hover:text-white transition-colors duration-200 relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#00E5FF] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side CTAs */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* APK Highlight Button */}
          <ApkDownloadButton variant="header" />

          {/* Auth buttons */}
          <button
            onClick={() => onOpenAuthModal('login')}
            className="px-3.5 py-2 text-xs font-semibold text-[#A7B4CA] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <User className="w-3.5 h-3.5" /> Login
          </button>

          <button
            onClick={() => onOpenAuthModal('signup')}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-[#0B1428] hover:bg-[#122244] border border-[#0866FF]/40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Sign Up
          </button>

          {/* Start Selling CTA */}
          <button
            onClick={onOpenSellModal}
            className="group px-4 py-2 text-xs font-bold text-white bg-[#0866FF] hover:bg-[#0052cc] rounded-lg shadow-md shadow-[#0866FF]/40 hover:shadow-[#0866FF]/60 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap border border-[#0866FF]/60"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#00E5FF] group-hover:rotate-90 transition-transform" />
            <span>Start Selling</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <ApkDownloadButton variant="header" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0B1428] text-white border border-[#0866FF]/30 hover:border-[#00E5FF]/60 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1F] border-b border-[#0866FF]/30 px-5 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  if (link.onClick) link.onClick();
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#A7B4CA] hover:text-white hover:bg-[#0B1428] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSellModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-bold text-white bg-[#0866FF] hover:bg-[#0052cc] shadow-md shadow-[#0866FF]/30 flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-[#00E5FF]" />
              Start Selling Asset
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuthModal('login');
                }}
                className="w-full py-2 px-3 rounded-lg text-center text-xs font-semibold text-white bg-[#0B1428] border border-slate-700"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuthModal('signup');
                }}
                className="w-full py-2 px-3 rounded-lg text-center text-xs font-semibold text-white bg-[#0B1428] border border-[#0866FF]/50"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
