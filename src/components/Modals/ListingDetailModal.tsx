import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertTriangle, Users, Calendar, Eye, Send, Lock, ArrowRight } from 'lucide-react';
import { Listing } from '../../types/marketplace';

interface ListingDetailModalProps {
  listing: Listing | null;
  onClose: () => void;
}

export const ListingDetailModal: React.FC<ListingDetailModalProps> = ({ listing, onClose }) => {
  const [purchaseStep, setPurchaseStep] = useState<'details' | 'escrow-confirm' | 'success'>('details');
  const [contactMessage, setContactMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  if (!listing) return null;

  const handleStartEscrow = () => {
    setPurchaseStep('escrow-confirm');
  };

  const handleConfirmEscrow = () => {
    setPurchaseStep('success');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setContactMessage('');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0B1428] border-2 border-[#0866FF]/60 shadow-[0_0_50px_rgba(8,102,255,0.4)] overflow-hidden text-white my-8">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-[#070D1F]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#0866FF]/20 border border-[#0866FF]/50 text-xs font-bold uppercase tracking-wider text-[#00E5FF]">
              {listing.platform} Asset Audit
            </span>
            <span className="text-xs text-slate-400 font-mono">ID: {listing.id}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#030817] text-slate-400 hover:text-white border border-slate-700 hover:border-[#00E5FF] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {purchaseStep === 'details' && (
            <>
              {/* Media & Title Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 h-48 rounded-2xl overflow-hidden border border-slate-700 relative">
                  <img
                    src={listing.thumbnail}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] text-emerald-400 border border-emerald-500/40 font-mono">
                    Escrow Protected
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#00E5FF]">{listing.category}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-slate-400">{listing.accountAge} established</span>
                  </div>
                  <h2 className="text-2xl font-display font-extrabold text-white leading-tight">
                    {listing.title}
                  </h2>
                  <div className="text-sm font-mono text-cyan-300">
                    {listing.handle}
                  </div>
                  <p className="text-xs text-[#A7B4CA] leading-relaxed pt-1">
                    {listing.description}
                  </p>
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#030817] border border-slate-800">
                <div className="p-2">
                  <span className="text-[10px] uppercase text-slate-500 font-semibold block">Followers / Audience</span>
                  <div className="text-lg font-bold text-white font-mono tabular-nums">{listing.followersFormatted}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Audience Real: 98%</div>
                </div>

                <div className="p-2">
                  <span className="text-[10px] uppercase text-slate-500 font-semibold block">Engagement Rate</span>
                  <div className="text-lg font-bold text-emerald-400 font-mono tabular-nums">{listing.engagementRate}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Active Audience</div>
                </div>

                <div className="p-2">
                  <span className="text-[10px] uppercase text-slate-500 font-semibold block">Monthly Reach</span>
                  <div className="text-lg font-bold text-cyan-300 font-mono tabular-nums">{listing.monthlyViews}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">30-Day Verified</div>
                </div>

                <div className="p-2">
                  <span className="text-[10px] uppercase text-slate-500 font-semibold block">Monetization Status</span>
                  <div className="text-sm font-bold text-white leading-snug">{listing.monetizationStatus}</div>
                  <div className="text-[11px] text-emerald-400 font-mono mt-0.5">{listing.monthlyRevenue || 'Eligible'}</div>
                </div>
              </div>

              {/* Ownership Verification Checklist */}
              <div className="p-5 rounded-2xl bg-[#070E22] border border-[#0866FF]/30 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                  YT MARKET Verification & Security Audit
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#A7B4CA]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ownership verified by YT Market app compliance team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>0 Copyright / Community Guideline strikes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Transfer method: {listing.transferMethod}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Top Audience: {listing.topAudience}</span>
                  </div>
                </div>
              </div>

              {/* Escrow Checkout Box in Indian Rupees (₹ INR) */}
              <div className="p-5 rounded-2xl bg-[#030817] border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-emerald-500/10">
                <div>
                  <span className="text-xs uppercase text-slate-400 font-semibold block">Escrow Protected Price</span>
                  <div className="text-3xl font-display font-extrabold text-white font-mono tabular-nums">
                    ₹{listing.askingPrice.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-sans font-normal">INR</span>
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <Lock className="w-3 h-3" /> 100% Escrow Refund Protected via YT Market
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleStartEscrow}
                    className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>BUY WITH ESCROW (₹)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Contact Seller Inquiry */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Ask Seller a Question
                </h4>
                {messageSent ? (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-300">
                    Inquiry sent to seller through YT Market chat! Check notification in your account.
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. Is original email included?"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-[#0B1428] border border-[#0866FF] text-xs font-bold text-white hover:bg-[#0866FF] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>Send</span>
                    </button>
                  </form>
                )}
              </div>
            </>
          )}

          {purchaseStep === 'escrow-confirm' && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Escrow Payment in Indian Rupees (₹)</h3>
                <p className="text-xs text-[#A7B4CA] max-w-md mx-auto">
                  You are locking payment for <strong className="text-white">{listing.title}</strong> into YT Market Escrow.
                </p>
              </div>

              {/* Escrow summary in ₹ */}
              <div className="p-4 rounded-2xl bg-[#030817] border border-slate-800 space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Account Listing Price</span>
                  <span className="font-mono font-bold text-white">₹{listing.askingPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Escrow Security Fee (3%)</span>
                  <span className="font-mono text-emerald-400">₹{Math.max(15, Math.round(listing.askingPrice * 0.03))}</span>
                </div>
                <div className="flex justify-between py-1.5 font-bold text-sm">
                  <span className="text-white">Total Amount Held in Escrow</span>
                  <span className="font-mono text-[#00E5FF]">
                    ₹{(listing.askingPrice + Math.max(15, Math.round(listing.askingPrice * 0.03))).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070E22] border border-[#0866FF]/40 text-xs text-[#A7B4CA] space-y-2">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00E5FF]" /> Escrow Protection Guarantee:
                </div>
                <p>1. Funds remain 100% protected in escrow until handover is confirmed.</p>
                <p>2. Seller is notified to initiate transfer: {listing.transferMethod}.</p>
                <p>3. 48-hour inspection period allows full verification before payment release.</p>
                <p>4. 100% full refund if seller fails to provide access.</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPurchaseStep('details')}
                  className="flex-1 py-3 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Back to Details
                </button>
                <button
                  onClick={handleConfirmEscrow}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-xs font-bold text-white shadow-lg shadow-emerald-500/30"
                >
                  Pay & Lock in Escrow (₹ INR)
                </button>
              </div>
            </div>
          )}

          {purchaseStep === 'success' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">Escrow Payment Locked!</h3>
              <p className="text-sm text-[#A7B4CA] max-w-md mx-auto">
                Order <span className="font-mono text-cyan-300">#ESC-{(Math.random()*100000).toFixed(0)}</span> for <strong className="text-white">{listing.title}</strong> has been secured in Escrow.
              </p>
              <div className="p-4 rounded-2xl bg-[#030817] border border-slate-800 text-xs text-left max-w-md mx-auto space-y-2">
                <div className="text-white font-semibold">Next Steps:</div>
                <div className="text-slate-400">1. Transfer notification sent to seller.</div>
                <div className="text-slate-400">2. Seller provides brand ownership invitation or email handover.</div>
                <div className="text-slate-400">3. Track order progress under "My Orders" in the YT Market app.</div>
              </div>
              <button
                onClick={() => {
                  setPurchaseStep('details');
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#0866FF] text-white text-xs font-bold hover:bg-[#0052cc]"
              >
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
