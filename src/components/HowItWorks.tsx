import React, { useState } from 'react';
import { Compass, CheckSquare, ShieldAlert, ArrowRight, UserPlus, UploadCloud, FileCheck, Wallet, ArrowDown } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');

  const buyerSteps = [
    {
      step: '01',
      title: 'Explore',
      desc: 'Browse available social media accounts filtered by niche, verified subscriber count, monetization state, and price range.',
      icon: Compass,
      tag: 'Step 1'
    },
    {
      step: '02',
      title: 'Select',
      desc: 'Choose an account that matches your requirements, review 90-day audience analytics, strike audits, and transfer methods.',
      icon: CheckSquare,
      tag: 'Step 2'
    },
    {
      step: '03',
      title: 'Secure Transaction',
      desc: 'Follow the platform’s supported payment process. Funds are safely locked into an authorized escrow holding vault.',
      icon: ShieldAlert,
      tag: 'Step 3'
    },
    {
      step: '04',
      title: 'Transfer & Confirm',
      desc: 'Complete the ownership transfer through Google Brand Account or Meta Business Suite, verify access, and confirm release.',
      icon: Wallet,
      tag: 'Step 4'
    }
  ];

  const sellerSteps = [
    {
      step: '01',
      title: 'Create an Account',
      desc: 'Register on YT MARKET with your contact credentials and set up your verified seller profile and payout method.',
      icon: UserPlus,
      tag: 'Step 1'
    },
    {
      step: '02',
      title: 'Add Your Listing',
      desc: 'Submit channel/page details, screenshots, monetization status, audience demographics, and desired asking price.',
      icon: UploadCloud,
      tag: 'Step 2'
    },
    {
      step: '03',
      title: 'Verification',
      desc: 'Complete the applicable ownership and listing checks via live screen audit or proof invitation with YT MARKET compliance.',
      icon: FileCheck,
      tag: 'Step 3'
    },
    {
      step: '04',
      title: 'Sell & Receive Payment',
      desc: 'Hand over asset ownership through supported secure channels. Once the buyer confirms, payout is released immediately.',
      icon: Wallet,
      tag: 'Step 4'
    }
  ];

  const steps = activeTab === 'buyer' ? buyerSteps : sellerSteps;

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#070D1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>STRUCTURED PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Simple, Transparent & Easy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            Whether you are acquiring a high-growth channel or liquidating digital assets, YT MARKET enforces clear milestones from start to payout.
          </p>

          {/* Interactive Toggle for Buyer vs Seller */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#030817] border border-[#0866FF]/40 shadow-lg">
            <button
              onClick={() => setActiveTab('buyer')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'buyer'
                  ? 'bg-gradient-to-r from-[#0866FF] to-[#00E5FF] text-white shadow-md shadow-[#00E5FF]/20'
                  : 'text-[#A7B4CA] hover:text-white'
              }`}
            >
              FOR BUYERS
            </button>
            <button
              onClick={() => setActiveTab('seller')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'seller'
                  ? 'bg-gradient-to-r from-[#0866FF] to-[#00E5FF] text-white shadow-md shadow-[#00E5FF]/20'
                  : 'text-[#A7B4CA] hover:text-white'
              }`}
            >
              FOR SELLERS
            </button>
          </div>
        </div>

        {/* 4-Step Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(8,102,255,0.3)] flex flex-col justify-between"
              >
                {/* Step indicator watermark */}
                <div className="absolute top-4 right-4 font-mono font-extrabold text-2xl text-slate-700/50 group-hover:text-[#00E5FF]/40 transition-colors">
                  {item.step}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#030817] border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF] mb-5 group-hover:scale-110 group-hover:border-[#00E5FF] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-bold text-cyan-300 block mb-1">
                    {item.tag}
                  </span>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-[#A7B4CA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-[11px] font-semibold text-[#00E5FF]">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-500 group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-all" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust assurance footnote */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1428] border border-slate-800 text-xs text-[#A7B4CA]">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>All transfers are documented with audit logs and official transaction receipts.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
