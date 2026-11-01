import React from 'react';
import { ShieldCheck, Eye, Lock, UserCheck, Scale, Headset, CheckCircle2 } from 'lucide-react';

export const TrustSecuritySection: React.FC = () => {
  const trustCards = [
    {
      title: 'Ownership Verification',
      desc: 'Sellers must demonstrate genuine administrative control through Google Brand Account invitations, live screen verification, or Meta Business Manager audits before any listing is published.',
      icon: UserCheck,
      details: ['Live screen auditing', 'Brand Account ownership proof', 'OGE (Original Email) checks']
    },
    {
      title: 'Transparent Listings',
      desc: 'Every channel displays authentic 90-day audience retention, verified monetization status, top geographic breakdown, and a clean zero-copyright-strike declaration.',
      icon: Eye,
      details: ['Audited view trends', 'Demographic distribution', 'Monetization eligibility proof']
    },
    {
      title: 'Secure Payment Process',
      desc: 'All funds move through authorized payment providers and dedicated escrow vaults. Sellers never receive your banking data, and buyers never risk upfront payments directly to individuals.',
      icon: Lock,
      details: ['Segregated holding accounts', 'Encrypted checkout protocols', 'Multi-currency support']
    },
    {
      title: 'Buyer Protection Process',
      desc: 'Payments remain strictly locked in escrow during the required inspection period. If the seller cannot complete the asset transfer as agreed, your payment is protected.',
      icon: ShieldCheck,
      details: ['48-hour inspection grace', 'Funds hold until approval', 'Zero unauthorized releases']
    },
    {
      title: 'Dispute Resolution',
      desc: 'If discrepancies arise between the advertised listing and the delivered account, our human compliance team steps in to inspect transfer evidence and arbitrate a fair outcome.',
      icon: Scale,
      details: ['24-hour response SLA', 'Evidence-based reviews', 'Fair binding arbitration']
    },
    {
      title: 'Dedicated Customer Support',
      desc: 'Get continuous guidance from real digital asset specialists for YouTube channel handovers, Meta business page transfer protocols, and account security hygiene.',
      icon: Headset,
      details: ['Live chat and ticket support', 'Step-by-step handover guidance', 'WhatsApp assistance channel']
    }
  ];

  return (
    <section id="trust-security" className="py-16 sm:py-24 bg-[#070D1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>UNCOMPROMISING MARKETPLACE STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Your Trust Matters to Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            Digital asset acquisitions require strict security and total transparency. Here is how YT MARKET protects every participant on our platform.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] p-7 transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,102,255,0.35)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#030817] border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF] mb-5 group-hover:scale-110 group-hover:border-[#00E5FF] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest block mb-1">
                    Standard 0{idx + 1}
                  </span>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                  {card.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer */}
        <div className="mt-12 p-4 rounded-2xl bg-[#030817] border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-white">Responsible Marketplace Notice:</strong> YT MARKET facilitates verified peer-to-peer digital account transactions with escrow mechanisms and moderation. All transactions must comply with third-party platform terms of service (YouTube, Meta, Instagram). We do not claim external certifications not explicitly held.
          </p>
        </div>

      </div>
    </section>
  );
};
