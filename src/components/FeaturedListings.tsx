import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck, CheckCircle2, SlidersHorizontal, ArrowUpDown, Eye, Info, ShoppingCart } from 'lucide-react';
import { Listing, PlatformType } from '../types/marketplace';
import { REAL_APP_LISTINGS } from '../data/mockData';

interface FeaturedListingsProps {
  onSelectListing: (listing: Listing) => void;
  selectedPlatformFilter?: PlatformType | 'all';
  onPlatformChange?: (platform: PlatformType | 'all') => void;
}

export const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  onSelectListing,
  selectedPlatformFilter = 'all',
  onPlatformChange
}) => {
  const [platform, setPlatform] = useState<PlatformType | 'all'>(selectedPlatformFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [followerRange, setFollowerRange] = useState('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'newest'>('popular');

  // Sync prop changes
  React.useEffect(() => {
    setPlatform(selectedPlatformFilter);
  }, [selectedPlatformFilter]);

  const handlePlatformClick = (p: PlatformType | 'all') => {
    setPlatform(p);
    if (onPlatformChange) onPlatformChange(p);
  };

  // Filtered and sorted listings
  const filteredListings = useMemo(() => {
    return REAL_APP_LISTINGS.filter((item) => {
      // Platform filter
      if (platform !== 'all' && item.platform !== platform) return false;

      // Category filter
      if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesHandle = item.handle.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesHandle && !matchesDesc) return false;
      }

      // Price filter in INR (₹)
      if (priceRange === 'under-500' && item.askingPrice >= 500) return false;
      if (priceRange === '500-2500' && (item.askingPrice < 500 || item.askingPrice > 2500)) return false;
      if (priceRange === '2500-10000' && (item.askingPrice < 2500 || item.askingPrice > 10000)) return false;
      if (priceRange === 'over-10000' && item.askingPrice <= 10000) return false;

      // Follower range
      if (followerRange === 'under-25k' && item.followersCount >= 25000) return false;
      if (followerRange === '25k-100k' && (item.followersCount < 25000 || item.followersCount > 100000)) return false;
      if (followerRange === 'over-100k' && item.followersCount <= 100000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.askingPrice - b.askingPrice;
      if (sortBy === 'price-desc') return b.askingPrice - a.askingPrice;
      if (sortBy === 'newest') return b.accountAge.localeCompare(a.accountAge);
      return b.followersCount - a.followersCount;
    });
  }, [platform, searchQuery, categoryFilter, priceRange, followerRange, sortBy]);

  const categories = [
    'all',
    'Entertainment',
    'Tech & Gaming',
    'Lifestyle & Travel',
    'Finance & Business'
  ];

  return (
    <section id="marketplace-listings" className="py-16 sm:py-24 bg-[#030817] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1428] border border-[#0866FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>LIVE YT MARKET APP ASSETS · ALL PRICES IN ₹ INR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Trending Social Media Assets
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#A7B4CA] max-w-xl">
              Real channels and accounts listed directly from the YT Market official database with Escrow Protected checkout.
            </p>
          </div>

          {/* Currency highlight badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Escrow Protected In Indian Rupees (₹ INR)</span>
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1428] border border-[#0866FF]/30 space-y-4 mb-8 shadow-xl">
          
          {/* Top row: Platform segmented tabs + Search box */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Platform Selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#030817] border border-slate-800 overflow-x-auto">
              <button
                onClick={() => handlePlatformClick('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  platform === 'all'
                    ? 'bg-[#0866FF] text-white shadow-md shadow-[#0866FF]/40'
                    : 'text-[#A7B4CA] hover:text-white hover:bg-[#0B1428]'
                }`}
              >
                All Assets
              </button>
              <button
                onClick={() => handlePlatformClick('youtube')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  platform === 'youtube'
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                    : 'text-[#A7B4CA] hover:text-white hover:bg-[#0B1428]'
                }`}
              >
                <span>YouTube</span>
              </button>
              <button
                onClick={() => handlePlatformClick('facebook')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  platform === 'facebook'
                    ? 'bg-[#1877F2] text-white shadow-md shadow-[#1877F2]/40'
                    : 'text-[#A7B4CA] hover:text-white hover:bg-[#0B1428]'
                }`}
              >
                <span>Facebook</span>
              </button>
              <button
                onClick={() => handlePlatformClick('instagram')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  platform === 'instagram'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'text-[#A7B4CA] hover:text-white hover:bg-[#0B1428]'
                }`}
              >
                <span>Instagram</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search account name, @handle, or niche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#030817] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort marketplace listings"
                className="bg-[#030817] border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5FF] cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="price-asc">Lowest Price (₹)</option>
                <option value="price-desc">Highest Price (₹)</option>
                <option value="newest">Recently Added</option>
              </select>
            </div>

          </div>

          {/* Secondary filter row */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Filter className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Category:</span>
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              aria-label="Filter by category"
              className="bg-[#030817] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E5FF] cursor-pointer"
            >
              <option value="all">All Categories</option>
              {categories.filter(c => c !== 'all').map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <span className="text-slate-700">|</span>

            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Price Range (₹ INR):</span>
            </div>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              aria-label="Filter by price range"
              className="bg-[#030817] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E5FF] cursor-pointer font-mono"
            >
              <option value="all">Any Price</option>
              <option value="under-500">Under ₹500</option>
              <option value="500-2500">₹500 – ₹2,500</option>
              <option value="2500-10000">₹2,500 – ₹10,000</option>
              <option value="over-10000">Above ₹10,000</option>
            </select>

            <span className="text-slate-700">|</span>

            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Audience Size:</span>
            </div>
            <select
              value={followerRange}
              onChange={(e) => setFollowerRange(e.target.value)}
              aria-label="Filter by audience size"
              className="bg-[#030817] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E5FF] cursor-pointer"
            >
              <option value="all">Any Size</option>
              <option value="under-25k">Under 25K</option>
              <option value="25k-100k">25K – 100K</option>
              <option value="over-100k">100K+</option>
            </select>

            <div className="ml-auto text-xs text-slate-400">
              Showing <span className="font-mono font-bold text-white tabular-nums">{filteredListings.length}</span> verified accounts
            </div>
          </div>

        </div>

        {/* Listings Grid with Authentic Real App Card Design */}
        {filteredListings.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#0B1428] border border-slate-800">
            <SlidersHorizontal className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No listings match your criteria</h3>
            <p className="text-sm text-[#A7B4CA] mt-1 max-w-md mx-auto">
              Try adjusting your category filter, clearing your search query, or selecting another platform.
            </p>
            <button
              onClick={() => {
                setPlatform('all');
                setCategoryFilter('all');
                setPriceRange('all');
                setFollowerRange('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0866FF] hover:bg-[#0052cc]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map((listing) => {
              const platformBadges = {
                youtube: {
                  bg: 'bg-red-600',
                  text: 'YouTube',
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                },
                facebook: {
                  bg: 'bg-[#1877F2]',
                  text: 'Facebook',
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                },
                instagram: {
                  bg: 'bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600',
                  text: 'Instagram',
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                }
              };

              const currentBadge = platformBadges[listing.platform];

              return (
                <div
                  key={listing.id}
                  className="group rounded-3xl bg-[#0B1428] border border-[#0866FF]/30 hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,102,255,0.35)] flex flex-col overflow-hidden"
                >
                  {/* Top Header Card mimicking YT Market App */}
                  <div className="relative bg-white text-slate-900 p-5 rounded-t-3xl min-h-[170px] flex flex-col justify-between">
                    
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#0866FF] shadow-md shrink-0">
                          <img
                            src={listing.thumbnail}
                            alt={listing.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div>
                          <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight line-clamp-1">
                            {listing.title}
                          </h3>
                          <div className="text-xs text-slate-600 font-mono">
                            {listing.handle}
                          </div>
                          <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                            {listing.category}
                          </span>
                        </div>
                      </div>

                      {/* Platform Icon Badge */}
                      <div className={`w-8 h-8 rounded-full ${currentBadge.bg} flex items-center justify-center shadow-md shrink-0`}>
                        {currentBadge.icon}
                      </div>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700 font-mono">
                      <span className="font-bold text-slate-900">{listing.followersFormatted}</span>
                      <span className="text-emerald-700 font-semibold">{listing.engagementRate} Eng.</span>
                    </div>

                    <p className="mt-1 text-[11px] text-slate-600 line-clamp-2 leading-relaxed italic">
                      "{listing.description}"
                    </p>
                  </div>

                  {/* Bottom Dark Card mimicking YT Market App */}
                  <div className="p-5 flex-1 flex flex-col justify-between bg-[#070D1F] space-y-4">
                    
                    {/* Escrow Protected Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Escrow Protected</span>
                    </div>

                    {/* Title display matching app */}
                    <div className="text-sm font-bold text-white uppercase tracking-wider line-clamp-1">
                      {listing.title}
                    </div>

                    {/* Price in Indian Rupees + BUY NOW & Details Buttons */}
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono tabular-nums leading-none">
                          ₹{listing.askingPrice.toLocaleString('en-IN')}
                        </div>
                        <span className="text-[10px] text-slate-400 font-sans">Official Escrow Price</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectListing(listing)}
                          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-[#0B1428] hover:bg-slate-800 border border-slate-700 cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onSelectListing(listing)}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-md shadow-emerald-500/20 cursor-pointer flex items-center gap-1"
                        >
                          <span>BUY NOW</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
