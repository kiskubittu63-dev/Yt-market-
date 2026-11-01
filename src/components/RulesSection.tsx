import React from 'react';
import { UserCheck, Shield, AlertOctagon, Check, X, ShieldAlert } from 'lucide-react';

export const RulesSection: React.FC = () => {
  return (
    <section id="marketplace-rules" className="py-16 sm:py-24 bg-[#070D1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>GOVERNANCE & INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Marketplace Rules & Guidelines
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            To ensure a safe environment for all transactions, every member must strictly adhere to our operating code of conduct.
          </p>
        </div>

        {/* 3 Columns: Buyer Rules, Seller Rules, Prohibited Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: BUYER RULES */}
          <div className="rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 p-6 sm:p-7 flex flex-col justify-between hover:border-[#00E5FF] transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase">Part 1</span>
                  <h3 className="text-xl font-display font-bold text-white">Buyer Rules</h3>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Review Listings Carefully:</strong> Inspect historical audience analytics and strike records before submitting payment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Check Account Details:</strong> Verify proof of monetization and niche compatibility in the listing inspector.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Official Channels Only:</strong> Transact solely through YT MARKET escrow; never send off-platform payments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Keep Security Safe:</strong> Never share sensitive 2FA backup codes or OTPs with anyone.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Supported Transfer Methods:</strong> Use Google Brand Account invites or Meta Business Suite permissions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Report Suspicious Activity:</strong> Notify support immediately if a counterparty requests off-site contacts.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: SELLER RULES */}
          <div className="rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 p-6 sm:p-7 flex flex-col justify-between hover:border-[#00E5FF] transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#0866FF]/40 flex items-center justify-center text-[#00E5FF]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase">Part 2</span>
                  <h3 className="text-xl font-display font-bold text-white">Seller Rules</h3>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Lawful Ownership:</strong> List only accounts you legally own or possess authorized documentation to transfer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Accurate Data:</strong> Provide truthful information regarding strikes, warnings, monetization, and geography.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No Fabricated Analytics:</strong> Uploading edited screenshots or falsified studio reports leads to permanent ban.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Genuine Audience:</strong> Do not misrepresent bot followers or automated engagement as organic traffic.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Cooperate with Audits:</strong> Complete live screen checks or API verification when requested by moderators.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Prompt Handover:</strong> Deliver administrative rights within 48 to 72 hours of escrow deposit confirmation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: PROHIBITED ACTIVITIES */}
          <div className="rounded-2xl bg-[#0B1428] border border-red-500/40 p-6 sm:p-7 flex flex-col justify-between hover:border-red-400 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-red-400 uppercase">Zero Tolerance</span>
                  <h3 className="text-xl font-display font-bold text-white">Prohibited Activities</h3>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong>Fake Followers & Engagement Manipulation:</strong> Botting, click farms, or artificial subscriber inflation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong>Stolen or Hacked Accounts:</strong> Attempting to trade compromised or unauthorized digital properties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong>Fraudulent Listings & Impersonation:</strong> Falsely representing creators, companies, or verified public figures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong>Unauthorized Account Transfers:</strong> Circumventing established platform handover procedures or security controls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong>Payment Scams & Off-Platform Deals:</strong> Asking for direct wire transfers or gift cards outside escrow.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong>Misleading Product Information:</strong> Concealing strikes, copyright notices, or demonetization penalties.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Clear Notice Footnote */}
        <div className="mt-10 p-4 rounded-xl bg-[#030817] border border-slate-800 text-center text-xs text-slate-400 max-w-4xl mx-auto flex items-center justify-center gap-3">
          <ShieldAlert className="w-4 h-4 text-[#00E5FF] shrink-0" />
          <span>
            <strong>Compliance Disclaimer:</strong> All transfers must strictly comply with applicable third-party platform policies (YouTube, Google, Meta, Instagram) and local laws. Violations result in immediate account termination and escrow forfeiture.
          </span>
        </div>

      </div>
    </section>
  );
};
