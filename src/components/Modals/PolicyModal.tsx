import React from 'react';
import { X, FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface PolicyModalProps {
  type: 'terms' | 'privacy' | 'refund' | 'cancellation' | 'buyer' | 'seller' | 'disclaimer';
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  const policyContent = {
    refund: {
      title: 'YT MARKET Refund & Dispute Policy',
      tag: 'Legal Policy · Version 2026.1',
      sections: [
        {
          heading: '1. Escrow Protection Principle',
          body: 'All transaction funds are deposited into segregated escrow holding accounts. The seller is not remunerated until the buyer completes the 48-hour inspection period and executes the digital transfer confirmation.'
        },
        {
          heading: '2. Circumstances Justifying Full Refund',
          body: 'A buyer is entitled to a 100% principal refund if: (a) The seller fails to transfer administrative ownership of the YouTube brand account or Meta page within 72 hours; (b) The asset possesses undisclosed copyright strikes, community guideline warnings, or monetization penalties; (c) Audience geography or subscriber numbers deviate by more than 15% from the audited listing.'
        },
        {
          heading: '3. Evidence Submission & Review Process',
          body: 'Buyers must raise a dispute via the transaction portal within 48 hours of asset handover notification. Evidence required includes unedited screen recordings of creator studio settings, Google brand account invitation logs, and communications history.'
        },
        {
          heading: '4. Non-Refundable Scenarios',
          body: 'Refunds are strictly rejected once the buyer confirms satisfactory receipt, for post-transfer channel growth fluctuations, or if the dispute is filed after funds have been legally disbursed from escrow.'
        },
        {
          heading: '5. Reimbursement Timelines',
          body: 'Approved refunds are returned to the original funding instrument within 3 to 7 business days, strictly conforming to the underlying payment gateway processing schedules.'
        }
      ]
    },
    cancellation: {
      title: 'Order Cancellation Policy',
      tag: 'Legal Policy · Version 2026.1',
      sections: [
        {
          heading: '1. Pre-Transfer Cancellation',
          body: 'A buyer or seller may request mutual order cancellation without penalty if no credentials or brand account invitations have been dispatched.'
        },
        {
          heading: '2. Seller Cancellation Penalties',
          body: 'Sellers who cancel accepted offers after buyer escrow funding without valid grounds face a listing suspension and a 3% platform reprocessing fee.'
        },
        {
          heading: '3. Auto-Cancellation on Inactivity',
          body: 'If a seller fails to acknowledge an escrow deposit within 48 hours, the order is automatically cancelled and funds are returned in full to the buyer.'
        }
      ]
    },
    buyer: {
      title: 'Buyer Code of Conduct & Guidelines',
      tag: 'Marketplace Standard',
      sections: [
        {
          heading: '1. Verification Responsibility',
          body: 'Buyers are required to inspect the YouTube Creator Studio or Meta Business Suite analytics thoroughly during the designated 48-hour inspection window.'
        },
        {
          heading: '2. Account Security Hygiene',
          body: 'Buyers must immediately update backup recovery emails, register hardware 2FA keys, and revoke any pre-existing third-party app permissions upon receiving asset control.'
        },
        {
          heading: '3. Platform Terms Adherence',
          body: 'Buyers acknowledge that social media accounts remain governed by third-party platform terms (Google Terms of Service, YouTube Policies, Meta Terms) and that YT MARKET facilitates peer transfer mechanisms.'
        }
      ]
    },
    seller: {
      title: 'Seller Verification & Transfer Guidelines',
      tag: 'Marketplace Standard',
      sections: [
        {
          heading: '1. Sole Lawful Ownership',
          body: 'Sellers represent and warrant that they possess undivided legal authority to transfer the listed channel or page and that the account is free of liens or third-party claims.'
        },
        {
          heading: '2. Transfer Protocols',
          body: 'YouTube channels must be transferred via Google Brand Account Primary Ownership invitations (which require a 7-day maturation period). Facebook pages must be handed over via Meta Business Manager full control.'
        },
        {
          heading: '3. Prohibition of Recovery Tactics',
          body: 'Any attempt to reverse or reclaim a transferred account using original recovery emails constitutes criminal fraud and will result in permanent referral to legal authorities.'
        }
      ]
    },
    terms: {
      title: 'General Terms & Conditions',
      tag: 'Contractual Agreement',
      sections: [
        {
          heading: '1. Marketplace Intermediary Role',
          body: 'YT MARKET operates strictly as an intermediary platform providing verification, communication escrow facilitation, and dispute mediation.'
        },
        {
          heading: '2. No Growth Guarantee',
          body: 'Purchasing an established social media account does not guarantee future algorithm distribution, subscriber growth, or sustained revenue.'
        },
        {
          heading: '3. Compliance with Applicable Laws',
          body: 'Users are strictly prohibited from using the platform for money laundering, illicit property conveyance, or evasion of financial sanctions.'
        }
      ]
    },
    privacy: {
      title: 'Privacy & Data Protection Notice',
      tag: 'Data Compliance',
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'We collect account identification, verified channel audit metadata, and encrypted payment records solely for escrow execution and fraud prevention.'
        },
        {
          heading: '2. Data Retention & Security',
          body: 'All transaction logs and dispute evidence are encrypted at rest using AES-256 and retained only as required by financial anti-fraud regulations.'
        }
      ]
    },
    disclaimer: {
      title: 'Platform Legal Disclaimer',
      tag: 'Legal Notice',
      sections: [
        {
          heading: '1. Independent Marketplace',
          body: 'YT MARKET is an independent marketplace and is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with YouTube, Google LLC, Meta Platforms Inc., Facebook, or Instagram.'
        },
        {
          heading: '2. Trademarks',
          body: 'The names YouTube, Facebook, and Instagram, as well as related names, marks, emblems, and images are registered trademarks of their respective owners and used here strictly for nominative identification purposes.'
        }
      ]
    }
  };

  const currentPolicy = policyContent[type] || policyContent.terms;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0B1428] border-2 border-[#0866FF]/60 shadow-[0_0_50px_rgba(8,102,255,0.4)] overflow-hidden text-white my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#070D1F] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#00E5FF]" />
            <div>
              <h3 className="font-display font-bold text-lg text-white">{currentPolicy.title}</h3>
              <span className="text-[10px] font-mono text-cyan-300 uppercase">{currentPolicy.tag}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#030817] text-slate-400 hover:text-white border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
          {currentPolicy.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-2xl bg-[#030817] border border-slate-800">
              <h4 className="font-display font-bold text-white text-sm sm:text-base">
                {sec.heading}
              </h4>
              <p>{sec.body}</p>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-[#070D1F] border border-[#0866FF]/30 text-xs text-slate-300">
            For specific legal inquiries or official law enforcement requests, contact <strong className="text-white">legal@ytmarket.in</strong>.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#070D1F] border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#0866FF] hover:bg-[#0052cc] text-xs font-bold text-white cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
