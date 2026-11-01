import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, CheckCircle2, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Escrow Question',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Escrow Question',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#070D1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>24/7 SUPPORT & ASSISTANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Need Help? We're Here for You.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            Have inquiries about listing your social asset, navigating escrow verification, or resolving an account handover? Connect directly with our concierge team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Channels & Support Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 p-6 sm:p-7 space-y-6">
              <h3 className="font-display font-bold text-xl text-white">
                Official Support Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#A7B4CA] leading-relaxed">
                To prevent impersonation fraud, always verify communications come from official YT MARKET handles.
              </p>

              <div className="space-y-4 pt-2">
                {/* Official Support Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#030817] border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-[#0866FF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Official Support Email</span>
                    <a href="mailto:support@ytmarket.in" className="text-xs sm:text-sm font-mono font-semibold text-white hover:text-[#00E5FF] transition-colors">
                      support@ytmarket.in
                    </a>
                    <span className="text-[11px] text-[#A7B4CA] block mt-0.5">Average response under 20 minutes</span>
                  </div>
                </div>

                {/* WhatsApp Support Helpline */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#030817] border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">WhatsApp Support Channel</span>
                    <div className="text-xs sm:text-sm font-mono font-semibold text-white">
                      +1 (800) 555-YTMARKET <span className="text-slate-500 font-sans text-[11px]">(Verified Business Helpline)</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">Instant live chat for escrow transactions</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#030817] border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-[#0866FF]/20 border border-slate-700 flex items-center justify-center text-cyan-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Operating Hours</span>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      24/7/365 Continuous Dispute Monitoring
                    </div>
                    <span className="text-[11px] text-[#A7B4CA] block mt-0.5">Escrow holds are monitored non-stop globally</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070D1F] border border-emerald-500/30 text-xs text-emerald-300/90 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>YT MARKET staff will never request your channel passwords, email recovery SMS codes, or bank OTPs.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 p-6 sm:p-8 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#A7B4CA] mb-6">
                Fill in the form below and an asset verification specialist will review your inquiry immediately.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-[#030817] border border-emerald-500/50 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-[#A7B4CA] max-w-md mx-auto">
                    Thank you! Your ticket <span className="text-cyan-300 font-mono">#TKT-{(Math.random()*90000+10000).toFixed(0)}</span> has been queued. Our concierge team typically responds within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#0866FF] text-white text-xs font-bold hover:bg-[#0052cc]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Subject / Topic <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00E5FF] cursor-pointer"
                    >
                      <option value="Escrow Question">Escrow & Payment Question</option>
                      <option value="Listing Verification">Listing Verification Request</option>
                      <option value="Dispute Assistance">Dispute / Order Assistance</option>
                      <option value="Sell Channel">Selling a YouTube / Facebook / IG Asset</option>
                      <option value="APK App Support">Android APK Support</option>
                      <option value="Partnership">Institutional Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Detailed Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please include relevant listing IDs, platform URLs, or escrow order reference numbers..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#0866FF] hover:bg-[#0052cc] border border-[#00E5FF]/40 shadow-lg shadow-[#0866FF]/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#00E5FF]" />
                        <span>Submit Inquiry to YT MARKET</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
