import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck, PenTool } from 'lucide-react';
import { REAL_APP_TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Verified Buyer' | 'Verified Seller'>('all');
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const filteredTestimonials = REAL_APP_TESTIMONIALS.filter(item => {
    if (filter === 'all') return true;
    return item.role === filter;
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setWriteReviewOpen(false);
      setNewReviewText('');
      setNewReviewAuthor('');
    }, 2500);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#030817] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Card matching the App Review Header Screen */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1A0B2E] via-[#0B1428] to-[#030817] border border-[#0866FF]/40 p-8 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-bold text-amber-300 mb-3">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>VERIFIED BUYER REVIEWS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                10,200+ Customer Reviews
              </h2>

              <div className="flex items-center gap-4 mt-4">
                <div className="text-3xl sm:text-4xl font-display font-black text-amber-400 font-mono">
                  4.8 <span className="text-xl text-slate-400 font-sans font-normal">/ 5.0</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#A7B4CA] font-medium">
                  (10,200 Verified Orders in India)
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setWriteReviewOpen(true)}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <PenTool className="w-4 h-4" />
                <span>Write a Review</span>
              </button>
            </div>

          </div>

          {/* Rating Count Filter Pills exactly matching app */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2.5 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all ${
                filter === 'all'
                  ? 'bg-amber-400 text-slate-900 shadow-md'
                  : 'bg-[#0B1428] text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              All (10k+)
            </button>
            <div className="px-4 py-2 rounded-xl font-semibold bg-[#070D1F] text-slate-300 border border-slate-800">
              5 Stars (8,460)
            </div>
            <div className="px-4 py-2 rounded-xl font-semibold bg-[#070D1F] text-slate-300 border border-slate-800">
              4 Stars (1,390)
            </div>
            <div className="px-4 py-2 rounded-xl font-semibold bg-[#070D1F] text-slate-300 border border-slate-800">
              3 Stars (350)
            </div>
          </div>
        </div>

        {/* Real App Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(8,102,255,0.3)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0866FF] to-[#00E5FF] p-0.5">
                      <div className="w-full h-full rounded-full bg-[#030817] flex items-center justify-center font-bold text-xs text-white">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{t.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-[11px] text-[#A7B4CA] font-mono">{t.date}</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {t.role}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[#00E5FF] font-mono text-[11px]">{t.assetTraded}</span>
                <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" /> Escrow Safe Handover
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {writeReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md p-6 rounded-3xl bg-[#0B1428] border border-[#0866FF] shadow-2xl space-y-4">
            <h3 className="text-xl font-display font-bold text-white">Write a Customer Review</h3>
            <p className="text-xs text-[#A7B4CA]">
              Share your experience buying or selling social media assets on YT Market.
            </p>

            {reviewSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500 text-xs text-emerald-300 text-center space-y-1">
                <div className="font-bold">Review Submitted!</div>
                <div>Thank you for your feedback! It will appear after moderation verification.</div>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Your Review</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your transaction experience..."
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#00E5FF] resize-none"
                    required
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setWriteReviewOpen(false)}
                    className="flex-1 py-2 rounded-xl border border-slate-700 text-xs text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl bg-amber-400 text-slate-900 text-xs font-bold hover:bg-amber-300"
                  >
                    Publish Review
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
