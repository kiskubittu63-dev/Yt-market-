import React from 'react';
import { Check, X, Shield, Zap, RefreshCw, MessageSquare, Headphones, FileBarChart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Financial Escrow Protection',
      ytMarket: 'Authorized Escrow Partner holding until buyer verification',
      traditional: 'High risk of direct wire scams / chargebacks',
      forums: 'No financial protection, mutual trust only'
    },
    {
      feature: 'Audited Analytics & Strike Verification',
      ytMarket: 'Live screen audits + zero-strike verification',
      traditional: 'Falsified screenshots & unverified claims',
      forums: 'Unchecked claims, frequent fake proof'
    },
    {
      feature: 'Supported Transfer Protocols',
      ytMarket: 'Google Brand Account & Meta Suite guided transfer',
      traditional: 'Clumsy password sharing prone to recovery theft',
      forums: 'High risk of account pull-backs'
    },
    {
      feature: 'Neutral Human Dispute Resolution',
      ytMarket: 'Dedicated 24-hr mediation with evidence logs',
      traditional: 'Zero dispute arbitration or recourse',
      forums: 'Unmoderated threads with no power to refund'
    },
    {
      feature: 'Mobile App with Push Notifications',
      ytMarket: 'Official Android APK with live escrow tracking',
      traditional: 'Slow unencrypted email threads',
      forums: 'Random Telegram / Discord chat groups'
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#030817] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>THE YT MARKET ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Why Choose YT MARKET?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            See how our institutional-grade security framework outclasses hazardous direct P2P messaging and unmoderated forums.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF] mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Dedicated Social Media Marketplace</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
              Purpose-built exclusively for social media assets rather than generic websites or domain names, tailored for creators and agencies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF] mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Multi-Platform Ecosystem</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
              Seamlessly trade across YouTube channels, Facebook pages, and Instagram accounts within a unified, monitored ecosystem.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF] mb-4">
              <FileBarChart className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Transparent Audited Metrics</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
              Access real 90-day retention graphs, traffic origins, AdSense monetization statements, and copyright strike verifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF] mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Organized Buyer-Seller Chat</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
              End-to-end recorded communication ensures both parties maintain a clear paper trail for escrow release conditions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF] mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Live Transaction Tracking</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
              Follow every stage from escrow deposit to primary ownership handover in real-time with automatic status updates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF] mb-4">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Human Support & Dispute Teams</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
              Real social media asset specialists available via tickets, email, and WhatsApp to arbitrate and assist at any stage.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Matrix */}
        <div className="rounded-3xl bg-[#0B1428] border border-[#0866FF]/30 overflow-hidden shadow-2xl">
          <div className="p-5 sm:p-6 bg-[#070D1F] border-b border-slate-800">
            <h3 className="font-display font-bold text-lg text-white">
              Institutional Comparison Table
            </h3>
            <p className="text-xs text-[#A7B4CA] mt-0.5">
              Comparison between YT MARKET and unverified alternatives.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase text-[10px]">
                  <th className="py-4 px-6 w-1/3">Security & Marketplace Capability</th>
                  <th className="py-4 px-6 text-[#00E5FF] font-bold bg-[#0866FF]/10">YT MARKET (Escrow Protected)</th>
                  <th className="py-4 px-6 text-slate-400">Direct P2P Deals</th>
                  <th className="py-4 px-6 text-slate-400">Public Online Forums</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {comparisonItems.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">{row.feature}</td>
                    <td className="py-4 px-6 font-medium text-white bg-[#0866FF]/5 border-x border-[#0866FF]/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.ytMarket}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{row.forums}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
