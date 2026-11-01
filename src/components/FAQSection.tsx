import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQ_LIST } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<'All' | 'General' | 'Transactions' | 'Selling' | 'Safety'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = FAQ_LIST.filter(item => {
    if (activeCategory !== 'All' && item.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#070D1F] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <span>QUESTIONS & ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A7B4CA]">
            Everything you need to know about buying, selling, escrow security, and policies on YT MARKET.
          </p>

          {/* Search FAQs */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., escrow, refund, YouTube)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1428] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {(['All', 'General', 'Transactions', 'Selling', 'Safety'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0866FF] text-white shadow-sm'
                    : 'bg-[#0B1428] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.qNumber}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0B1428] border-[#00E5FF]/60 shadow-[0_0_20px_rgba(8,102,255,0.2)]'
                    : 'bg-[#0B1428]/60 border-slate-800 hover:border-[#0866FF]/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#030817] text-[#00E5FF] border border-[#0866FF]/30 shrink-0">
                      {faq.qNumber}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-lg bg-[#030817] border border-slate-700 flex items-center justify-center text-[#00E5FF] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#0866FF]/20 border-[#00E5FF]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#A7B4CA] leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    <p className="pl-10">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 text-center space-y-2">
          <h4 className="text-sm font-bold text-white">Have a question not listed here?</h4>
          <p className="text-xs text-[#A7B4CA]">
            Our support desk is available 24/7 to answer transaction, ownership transfer, or escrow questions.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] hover:underline"
            >
              <span>Contact YT MARKET Support</span> →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
