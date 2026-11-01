import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Wallet, CheckCircle, Clock, AlertCircle, RefreshCw, Lock, ArrowUpRight, DollarSign } from 'lucide-react';
import { DEMO_TRANSACTIONS } from '../data/mockData';

export const EscrowSection: React.FC = () => {
  const [demoBalance, setDemoBalance] = useState({
    available: 48500.00,
    pending: 14500.00,
    inEscrow: 18400.00
  });
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmount || Number(withdrawAmount) <= 0) return;
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
      setWithdrawModalOpen(false);
      setWithdrawAmount('');
    }, 2500);
  };

  const escrowStages = [
    { title: 'Buyer Payment', sub: 'Funds in ₹ INR deposited', icon: Wallet, color: 'text-cyan-400' },
    { title: 'Escrow Holding', sub: '100% Refund vault locked', icon: Lock, color: 'text-[#0866FF]' },
    { title: 'Seller Asset Transfer', sub: 'Brand / Meta handover', icon: RefreshCw, color: 'text-amber-400' },
    { title: 'Buyer Inspection', sub: 'Audits & confirms access', icon: CheckCircle, color: 'text-emerald-400' },
    { title: 'Seller Bank Payout', sub: 'Direct UPI / Bank transfer', icon: ShieldCheck, color: 'text-green-400' }
  ];

  return (
    <section id="escrow-wallet" className="py-16 sm:py-24 bg-[#030817] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>FINANCIAL TRANSPARENCY & INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Your Transactions. More Transparency. More Confidence.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            YT MARKET integrates structured escrow protection in Indian Rupees (₹). Payments are securely held in trust and only released when the buyer confirms full ownership transfer.
          </p>

          {/* Compliance Notice */}
          <div className="mt-4 p-3 rounded-xl bg-[#0B1428] border border-emerald-500/30 text-xs text-emerald-300 max-w-2xl mx-auto flex items-center gap-2.5 text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Escrow Safe Guarantee:</strong> 100% money-back refund guarantee if a seller fails to transfer administrative control or if account strikes mismatch.
            </span>
          </div>
        </div>

        {/* Visual 5-Stage Escrow Flow */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#0B1428] border border-[#0866FF]/30 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#00E5FF]">
              Visual Transaction Flow
            </h3>
            <p className="text-xs text-[#A7B4CA] mt-1">
              Zero risk of disappearing funds or unauthorized recovery during ownership transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {escrowStages.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={st.title} className="relative flex flex-col items-center text-center p-4 rounded-2xl bg-[#030817] border border-slate-800">
                  <div className={`w-12 h-12 rounded-2xl bg-[#0B1428] border border-slate-700 flex items-center justify-center mb-3 ${st.color} shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 mb-0.5">Stage 0{i + 1}</span>
                  <h4 className="text-sm font-bold text-white">{st.title}</h4>
                  <p className="text-xs text-[#A7B4CA] mt-1">{st.sub}</p>
                  {i < 4 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                      <ArrowRight className="w-4 h-4 text-[#0866FF]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Escrow Wallet Dashboard Preview in INR (₹) */}
        <div className="rounded-3xl bg-[#070D1F] border border-[#0866FF]/40 overflow-hidden shadow-[0_0_40px_rgba(8,102,255,0.25)]">
          
          {/* Top Bar of Dashboard */}
          <div className="p-5 sm:p-6 bg-[#0B1428] border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0866FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-white text-base">App Wallet & Escrow Credits</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    INR (₹) SECURE
                  </span>
                </div>
                <div className="text-xs text-[#A7B4CA]">KYC Verified · Instant UPI & Bank Handover</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setWithdrawModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0866FF] hover:bg-[#0052cc] border border-[#00E5FF]/40 flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Withdraw to Bank (₹)</span>
              </button>
            </div>
          </div>

          {/* Balances in Indian Rupees (₹) */}
          <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-800 bg-[#030817]/60">
            <div className="p-4 rounded-2xl bg-[#0B1428] border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Available for Withdrawal</span>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono tabular-nums">
                ₹{demoBalance.available.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </div>
              <span className="text-[11px] text-emerald-400 mt-1 inline-block">Settled & Cleared</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B1428] border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Locked in Active Escrow</span>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#00E5FF] font-mono tabular-nums">
                ₹{demoBalance.inEscrow.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </div>
              <span className="text-[11px] text-cyan-300 mt-1 inline-block">Protected across 2 deals</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B1428] border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Pending Payout Release</span>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-300 font-mono tabular-nums">
                ₹{demoBalance.pending.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </div>
              <span className="text-[11px] text-amber-400 mt-1 inline-block">Awaiting 7-day Brand maturation</span>
            </div>
          </div>

          {/* Transaction History in Indian Rupees (₹) */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Live Transaction Tracking (INR Orders)
              </h4>
              <span className="text-xs text-[#A7B4CA]">Dispute Window: 48 Hours</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 font-semibold uppercase text-[10px]">
                    <th className="py-3 px-3">Transaction ID</th>
                    <th className="py-3 px-3">Digital Asset</th>
                    <th className="py-3 px-3">Platform</th>
                    <th className="py-3 px-3">Amount (₹)</th>
                    <th className="py-3 px-3">Escrow Status</th>
                    <th className="py-3 px-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {DEMO_TRANSACTIONS.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[#0B1428]/60 transition-colors">
                      <td className="py-3 px-3 text-cyan-300 font-bold">{tx.id}</td>
                      <td className="py-3 px-3 text-white font-sans max-w-xs truncate">{tx.assetTitle}</td>
                      <td className="py-3 px-3 uppercase text-[11px] text-slate-300 font-sans">{tx.platform}</td>
                      <td className="py-3 px-3 text-white font-bold tabular-nums">₹{tx.amount.toLocaleString('en-IN')}</td>
                      <td className="py-3 px-3 font-sans">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          tx.status === 'Released'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : tx.status === 'In Escrow'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-400 font-sans">{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>

      {/* Withdraw Modal in INR (₹) */}
      {withdrawModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md p-6 rounded-3xl bg-[#0B1428] border border-[#0866FF] shadow-2xl space-y-4">
            <h3 className="text-xl font-display font-bold text-white">Withdraw Funds (₹ INR)</h3>
            <p className="text-xs text-[#A7B4CA]">
              Available balance for instant withdrawal: <strong className="text-white">₹{demoBalance.available.toLocaleString('en-IN')}</strong>.
            </p>

            {withdrawSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500 text-xs text-emerald-300 text-center space-y-1">
                <div className="font-bold">Withdrawal Initiated!</div>
                <div>₹{withdrawAmount} scheduled to your linked UPI ID / Bank account.</div>
              </div>
            ) : (
              <form onSubmit={handleWithdraw} className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Amount (₹ INR)</label>
                  <input
                    type="number"
                    max={demoBalance.available}
                    placeholder="e.g. 5000"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Select Payout Method</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option>Instant UPI (GooglePay / PhonePe / Paytm)</option>
                    <option>IMPS / NEFT Bank Account Transfer</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setWithdrawModalOpen(false)}
                    className="flex-1 py-2 rounded-xl border border-slate-700 text-xs text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-xs font-bold text-white shadow-md shadow-emerald-500/20"
                  >
                    Confirm Payout (₹)
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
