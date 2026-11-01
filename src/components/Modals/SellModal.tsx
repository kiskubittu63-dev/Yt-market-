import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { PlatformType } from '../../types/marketplace';

interface SellModalProps {
  onClose: () => void;
}

export const SellModal: React.FC<SellModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [platform, setPlatform] = useState<PlatformType>('youtube');
  const [formData, setFormData] = useState({
    title: '',
    handle: '',
    category: 'Entertainment',
    subscribers: '',
    monetization: 'Monetized (AdSense)',
    monthlyRevenue: '',
    askingPrice: '',
    description: '',
    transferReady: true,
    cleanStrikes: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0B1428] border-2 border-[#0866FF]/60 shadow-[0_0_50px_rgba(8,102,255,0.4)] overflow-hidden text-white my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#070D1F] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <h3 className="font-display font-bold text-lg text-white">Sell Your Channel on YT Market</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#030817] text-slate-400 hover:text-white border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">Listing Submitted for Verification!</h3>
              <p className="text-sm text-[#A7B4CA] max-w-md mx-auto">
                Thank you! Your listing for <strong className="text-white">{formData.title || formData.handle}</strong> has been submitted. Asking price set to <strong className="text-[#00E5FF] font-mono">₹{Number(formData.askingPrice).toLocaleString('en-IN')}</strong>.
              </p>
              <div className="p-4 rounded-xl bg-[#030817] border border-slate-800 text-xs text-left max-w-md mx-auto space-y-2">
                <div className="text-white font-semibold">Verification Milestones:</div>
                <div className="text-slate-400">1. Verification bot checks channel authenticity.</div>
                <div className="text-slate-400">2. Compliance officer verifies strike history and monetization.</div>
                <div className="text-slate-400">3. Listing goes live on the YT Market app within 4-12 hours.</div>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#0866FF] text-white text-xs font-bold hover:bg-[#0052cc]"
              >
                Return to Marketplace
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                <span className={step >= 1 ? 'text-[#00E5FF] font-bold' : ''}>1. Platform & Channel</span>
                <span>→</span>
                <span className={step >= 2 ? 'text-[#00E5FF] font-bold' : ''}>2. Audience & Price (₹)</span>
                <span>→</span>
                <span className={step >= 3 ? 'text-[#00E5FF] font-bold' : ''}>3. Strike Audit & Submit</span>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">Select Platform</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['youtube', 'facebook', 'instagram'] as const).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPlatform(p)}
                          className={`p-3.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex flex-col items-center gap-2 cursor-pointer transition-all ${
                            platform === p
                              ? 'bg-[#0866FF]/20 border-[#00E5FF] text-white shadow-md'
                              : 'bg-[#030817] border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="capitalize">{p}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Asset / Channel Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HELKAO YOUTUBE or Morning Tea Story"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Channel URL or @Handle *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. @helkaoyoutube9816 or @anshikapathakk"
                      value={formData.handle}
                      onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                    >
                      <option value="Entertainment">Entertainment</option>
                      <option value="Tech & Gaming">Tech & Gaming</option>
                      <option value="Lifestyle & Travel">Lifestyle & Travel</option>
                      <option value="Finance & Business">Finance & Business</option>
                    </select>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-xl bg-[#0866FF] hover:bg-[#0052cc] text-xs font-bold text-white flex items-center gap-1.5"
                    >
                      <span>Continue to Price & Metrics</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Followers / Subs *</label>
                      <input
                        type="number"
                        required
                        placeholder="e.g. 25000"
                        value={formData.subscribers}
                        onChange={(e) => setFormData({ ...formData, subscribers: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Asking Price in Indian Rupees (₹) *</label>
                      <input
                        type="number"
                        required
                        placeholder="e.g. 2999"
                        value={formData.askingPrice}
                        onChange={(e) => setFormData({ ...formData, askingPrice: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Monetization Status</label>
                      <select
                        value={formData.monetization}
                        onChange={(e) => setFormData({ ...formData, monetization: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                      >
                        <option value="Monetized (AdSense)">Monetized (AdSense)</option>
                        <option value="In-Stream Ads Ready">In-Stream Ads Ready</option>
                        <option value="Brand Deals Eligible">Brand Deals Eligible</option>
                        <option value="Organic Ready">Organic Non-Monetized</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Monthly Revenue (₹ / mo)</label>
                      <input
                        type="text"
                        placeholder="e.g. ₹3,500/mo"
                        value={formData.monthlyRevenue}
                        onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Asset Description & Included Credentials</label>
                    <textarea
                      rows={3}
                      placeholder="Include details about content niche, language, top cities, and original email availability..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 rounded-xl bg-[#0866FF] hover:bg-[#0052cc] text-xs font-bold text-white flex items-center gap-1.5"
                    >
                      <span>Continue to Verification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#030817] border border-[#0866FF]/30 space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#00E5FF]" /> Ownership Declaration
                    </h4>

                    <label className="flex items-start gap-3 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.cleanStrikes}
                        onChange={(e) => setFormData({ ...formData, cleanStrikes: e.target.checked })}
                        className="mt-0.5 rounded border-slate-700 text-[#0866FF] focus:ring-[#00E5FF]"
                        required
                      />
                      <span>I certify that this account has <strong>0 active strikes</strong> and no community guideline bans.</span>
                    </label>

                    <label className="flex items-start gap-3 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.transferReady}
                        onChange={(e) => setFormData({ ...formData, transferReady: e.target.checked })}
                        className="mt-0.5 rounded border-slate-700 text-[#0866FF] focus:ring-[#00E5FF]"
                        required
                      />
                      <span>I agree to receive payout in Indian Rupees (₹) via UPI / Bank account upon buyer escrow confirmation.</span>
                    </label>
                  </div>

                  <div className="p-4 rounded-xl border border-dashed border-slate-700 text-center space-y-2 bg-[#030817]/40">
                    <UploadCloud className="w-8 h-8 text-[#00E5FF] mx-auto" />
                    <div className="text-xs font-semibold text-white">Upload Analytics Screenshot</div>
                    <p className="text-[11px] text-slate-400">Creator Studio / Meta Suite overview proof</p>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0866FF] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#0866FF] text-xs font-bold text-white shadow-lg shadow-[#00E5FF]/20 cursor-pointer"
                    >
                      Submit Listing (₹)
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
