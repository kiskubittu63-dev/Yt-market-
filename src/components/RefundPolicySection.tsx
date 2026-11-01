import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, FileText, CheckCircle2, XCircle, Clock, ExternalLink } from 'lucide-react';
import { PolicyModal } from './Modals/PolicyModal';

export const RefundPolicySection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="refund-policy" className="py-16 sm:py-24 bg-[#030817] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>CONSUMER PROTECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Clear Refund & Cancellation Policy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            We uphold strict, fair, and documented dispute rules so you always know where your money stands.
          </p>
        </div>

        {/* 2-Column Rules Overview: When Refunds Apply vs Non-Refundable */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Box 1: Valid Refund Situations */}
          <div className="rounded-2xl bg-[#0B1428] border border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Refund Eligible Scenarios</h3>
                  <p className="text-xs text-[#A7B4CA]">Protected during the active escrow and 48h inspection stage</p>
                </div>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Seller Transfer Failure:</strong> If the seller fails to initiate or complete primary ownership transfer within the agreed 72-hour window.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Material Misrepresentation:</strong> If analytics, strikes, monetization status, or follower count differ significantly from the audited listing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Ownership Verification Failure:</strong> If the seller cannot prove legitimate administrative title or fails two-factor recovery handover.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Pre-Transfer Cancellation:</strong> If both parties agree to cancel before credentials or brand invites have been dispatched.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Refund processing timeline: 3 to 7 business days via original payment provider.</span>
            </div>
          </div>

          {/* Box 2: Non-Refundable Situations */}
          <div className="rounded-2xl bg-[#0B1428] border border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Non-Refundable Situations</h3>
                  <p className="text-xs text-[#A7B4CA]">Dispute protection does not cover subjective or post-confirmation events</p>
                </div>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><strong>Post-Confirmation Releases:</strong> Once the buyer has formally clicked "Confirm Transfer & Release Funds" on the escrow platform.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><strong>Buyer's Remorse / Change of Mind:</strong> Cancellation requests made after seller has provided full access credentials without defects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><strong>Future Algorithmic Performance:</strong> Drops in reach, monetization changes by YouTube/Meta, or view volatility post-handover.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><strong>Violation of Handover Rules:</strong> Transacting outside YT MARKET escrow or sharing sensitive recovery codes prematurely.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-amber-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Unconditional refunds are strictly prohibited to protect verified sellers from fraud.</span>
            </div>
          </div>

        </div>

        {/* Dispute Resolution Procedure Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#070D1F] border border-[#0866FF]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-base font-bold text-white">How Evidence Is Reviewed</h4>
            <p className="text-xs sm:text-sm text-[#A7B4CA] max-w-2xl">
              Disputes are arbitrated by independent compliance officers who examine timestamped Google/Meta email logs, screen recordings, API token logs, and transaction chat histories within 24 hours of filing.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#0B1428] hover:bg-[#122347] border border-[#00E5FF]/40 text-xs font-bold text-white shadow-md flex items-center gap-2 transition-colors cursor-pointer shrink-0"
          >
            <FileText className="w-4 h-4 text-[#00E5FF]" />
            <span>Read Full Refund Policy</span>
          </button>
        </div>

      </div>

      {/* Policy Modal */}
      {modalOpen && (
        <PolicyModal
          type="refund"
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};
