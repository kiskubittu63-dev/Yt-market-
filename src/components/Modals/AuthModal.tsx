import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

interface AuthModalProps {
  initialMode?: 'login' | 'signup';
  onClose: () => void;
  onSuccess?: (user: { name: string; email: string; role: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  initialMode = 'login',
  onClose,
  onSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      if (onSuccess) {
        onSuccess({
          name: name || (email.split('@')[0] || 'Demo User'),
          email: email || 'demo@ytmarket.in',
          role
        });
      }
      onClose();
    }, 1200);
  };

  const handleQuickDemoLogin = (demoRole: 'buyer' | 'seller') => {
    setEmail(demoRole === 'buyer' ? 'buyer.demo@ytmarket.in' : 'seller.demo@ytmarket.in');
    setPassword('••••••••••••');
    setName(demoRole === 'buyer' ? 'Alex Vance' : 'Marcus Media');
    setRole(demoRole);
    setSuccess(true);
    setTimeout(() => {
      if (onSuccess) {
        onSuccess({
          name: demoRole === 'buyer' ? 'Alex Vance' : 'Marcus Media',
          email: demoRole === 'buyer' ? 'buyer.demo@ytmarket.in' : 'seller.demo@ytmarket.in',
          role: demoRole
        });
      }
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0B1428] border-2 border-[#0866FF]/60 shadow-[0_0_50px_rgba(8,102,255,0.4)] overflow-hidden text-white my-8">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-[#070D1F] border-b border-slate-800 flex items-center justify-between">
          <BrandLogo size="sm" showTagline={false} />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#030817] text-slate-400 hover:text-white border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Mode Tabs */}
          <div className="grid grid-cols-2 p-1 rounded-xl bg-[#030817] border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setMode('login')}
              className={`py-2 rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-[#0866FF] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`py-2 rounded-lg transition-all ${
                mode === 'signup'
                  ? 'bg-[#0866FF] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>

          {success ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-white">Authenticated Successfully!</h4>
              <p className="text-xs text-[#A7B4CA]">Entering YT MARKET secure dashboard in Demo Mode...</p>
            </div>
          ) : (
            <>
              {/* Quick 1-Click Demo Login Bar */}
              <div className="p-3.5 rounded-2xl bg-[#070D1F] border border-[#00E5FF]/30 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#00E5FF] tracking-wider block">
                  Quick Prototype Auto-Fill:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('buyer')}
                    className="py-1.5 px-2.5 rounded-lg bg-[#030817] hover:bg-[#0B1428] border border-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    Demo Buyer Login
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('seller')}
                    className="py-1.5 px-2.5 rounded-lg bg-[#030817] hover:bg-[#0B1428] border border-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    Demo Seller Login
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'signup' && (
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="David Miller"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="user@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                {mode === 'signup' && (
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Primary Intent</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setRole('buyer')}
                        className={`py-2 px-3 rounded-lg border text-center font-semibold cursor-pointer ${
                          role === 'buyer'
                            ? 'bg-[#0866FF]/20 border-[#00E5FF] text-white'
                            : 'bg-[#030817] border-slate-800 text-slate-400'
                        }`}
                      >
                        I want to Buy
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole('seller')}
                        className={`py-2 px-3 rounded-lg border text-center font-semibold cursor-pointer ${
                          role === 'seller'
                            ? 'bg-[#0866FF]/20 border-[#00E5FF] text-white'
                            : 'bg-[#030817] border-slate-800 text-slate-400'
                        }`}
                      >
                        I want to Sell
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0866FF] hover:bg-[#0052cc] border border-[#00E5FF]/40 shadow-lg shadow-[#0866FF]/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>{mode === 'login' ? 'Sign In to Account' : 'Register Free Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>256-bit SSL encrypted authentication session</span>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};
