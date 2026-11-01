import React from 'react';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showTagline = true,
  size = 'md'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official YT MARKET Real App Logo with glowing neon border */}
      <div className={`relative flex items-center justify-center rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-[#0866FF] to-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.4)] ${iconSizes[size]}`}>
        <img
          src="/assets/aistudio/file_0000000061f081f5a84ef0cf00cf3077_54be5f0a.png"
          alt="YT MARKET Official App Logo"
          className="w-full h-full object-cover rounded-[10px]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex flex-col">
        <div className={`font-display font-extrabold tracking-tight flex items-center gap-1.5 leading-none ${textSizes[size]}`}>
          <span className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">YT</span>
          <span className="text-white">MARKET</span>
        </div>
        {showTagline && (
          <span className="text-[9px] sm:text-[10px] tracking-[0.22em] font-medium text-[#A7B4CA] mt-1 uppercase">
            BUY <span className="text-[#00E5FF] font-bold">•</span> SELL <span className="text-[#00E5FF] font-bold">•</span> GROW
          </span>
        )}
      </div>
    </div>
  );
};
