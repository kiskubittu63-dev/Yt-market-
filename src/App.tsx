import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { CategorySection } from './components/CategorySection';
import { FeaturedListings } from './components/FeaturedListings';
import { AppScreenshotsGallery } from './components/AppScreenshotsGallery';
import { HowItWorks } from './components/HowItWorks';
import { EscrowSection } from './components/EscrowSection';
import { TrustSecuritySection } from './components/TrustSecuritySection';
import { RefundPolicySection } from './components/RefundPolicySection';
import { RulesSection } from './components/RulesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { AppPromotionSection } from './components/AppPromotionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ApkDownloadButton } from './components/ApkDownloadButton';

// Modals
import { ListingDetailModal } from './components/Modals/ListingDetailModal';
import { SellModal } from './components/Modals/SellModal';
import { AuthModal } from './components/Modals/AuthModal';
import { PolicyModal } from './components/Modals/PolicyModal';

// Types
import { Listing, PlatformType } from './types/marketplace';

export default function App() {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | null>(null);
  const [policyModalType, setPolicyModalType] = useState<'terms' | 'privacy' | 'refund' | 'cancellation' | 'buyer' | 'seller' | 'disclaimer' | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType | 'all'>('all');
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; role: string } | null>(null);

  const handleSelectCategory = (platform: PlatformType | 'all') => {
    setSelectedPlatform(platform);
    const element = document.getElementById('marketplace-listings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const element = document.getElementById('marketplace-listings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030817] text-white flex flex-col font-sans selection:bg-[#0866FF]/30 selection:text-white">
      
      {/* User Login notification banner (if logged in) */}
      {currentUser && (
        <div className="bg-[#0866FF] text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>Welcome back, {currentUser.name} ({currentUser.email}) · Logged in as {currentUser.role}</span>
          <button
            onClick={() => setCurrentUser(null)}
            className="underline hover:text-cyan-200 cursor-pointer ml-4"
          >
            Sign Out
          </button>
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenSellModal={() => setSellModalOpen(true)}
        onOpenAuthModal={(mode) => setAuthModalMode(mode)}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Real App Screen & Official Logo */}
        <Hero
          onExploreClick={handleExploreClick}
          onStartSellingClick={() => setSellModalOpen(true)}
        />

        {/* 2. Official App Milestone Stats (500k+ Downloads, 12k+ Sold) */}
        <StatsSection />

        {/* 3. Category Section: YouTube, Facebook, Instagram with INR prices */}
        <CategorySection onSelectCategory={handleSelectCategory} />

        {/* 4. Featured Marketplace Listings with Real Accounts (₹ INR) */}
        <FeaturedListings
          onSelectListing={(listing) => setSelectedListing(listing)}
          selectedPlatformFilter={selectedPlatform}
          onPlatformChange={(p) => setSelectedPlatform(p)}
        />

        {/* 5. Authentic App Screenshots Gallery (Viewer for all 6 App Screens) */}
        <AppScreenshotsGallery />

        {/* 6. How It Works (Buyers & Sellers) */}
        <HowItWorks />

        {/* 7. Escrow Wallet & Payment Protection (in ₹ INR) */}
        <EscrowSection />

        {/* 8. Trust & Security Section (6 Cards) */}
        <TrustSecuritySection />

        {/* 9. Refund & Cancellation Policy */}
        <RefundPolicySection />

        {/* 10. Buyer & Seller Rules */}
        <RulesSection />

        {/* 11. Why Choose YT MARKET? */}
        <WhyChooseUs />

        {/* 12. Real Customer Reviews from App (10,200+ Reviews · 4.8★) */}
        <TestimonialsSection />

        {/* 13. FAQ Section (15 Questions Interactive Accordion) */}
        <FAQSection />

        {/* 14. App Promotion Section (Mobile Mockup & Highlight APK Download) */}
        <AppPromotionSection />

        {/* 15. Contact & Support Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicyModal={(type) => setPolicyModalType(type)}
      />

      {/* Floating Highlight APK Download Badge (Bottom Right) */}
      <ApkDownloadButton variant="floating" />

      {/* Modals */}
      {selectedListing && (
        <ListingDetailModal
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
        />
      )}

      {sellModalOpen && (
        <SellModal
          onClose={() => setSellModalOpen(false)}
        />
      )}

      {authModalMode && (
        <AuthModal
          initialMode={authModalMode}
          onClose={() => setAuthModalMode(null)}
          onSuccess={(user) => setCurrentUser(user)}
        />
      )}

      {policyModalType && (
        <PolicyModal
          type={policyModalType}
          onClose={() => setPolicyModalType(null)}
        />
      )}

    </div>
  );
}
