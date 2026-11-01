import React from 'react';
import { Download, ShoppingBag, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      label: 'App Downloads',
      value: '500k+',
      detail: 'Installed across India & global creators',
      icon: Download,
      color: 'text-cyan-400'
    },
    {
      label: 'Digital Assets Sold',
      value: '12k+',
      detail: 'YouTube, Facebook & IG accounts transferred',
      icon: ShoppingBag,
      color: 'text-emerald-400'
    },
    {
      label: 'Customer Reviews',
      value: '10k+',
      detail: '4.8★ Rating on verified order deliveries',
      icon: Star,
      color: 'text-amber-400'
    },
    {
      label: 'Escrow Safe Guarantee',
      value: '100%',
      detail: 'Refund protection & instant handover tracking',
      icon: ShieldCheck,
      color: 'text-[#0866FF]'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#070D1F] border-y border-[#0866FF]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid matching the real app stats banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.label}
                className="p-6 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all hover:shadow-[0_0_25px_rgba(8,102,255,0.25)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">
                    Official App Milestone
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-[#030817] border border-slate-700 flex items-center justify-center ${st.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {st.value}
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 mt-1">{st.label}</h4>
                  <p className="text-xs text-[#A7B4CA] mt-0.5">{st.detail}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  <span>VERIFIED RECORD</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
