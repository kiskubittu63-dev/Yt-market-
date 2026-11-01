export type PlatformType = 'youtube' | 'facebook' | 'instagram';

export interface Listing {
  id: string;
  title: string;
  handle: string;
  platform: PlatformType;
  category: 'Tech & Gaming' | 'Finance & Business' | 'Lifestyle & Travel' | 'Entertainment' | 'Education' | 'Fitness & Health';
  followersCount: number;
  followersFormatted: string;
  engagementRate: string;
  accountAge: string;
  monetizationStatus: 'Monetized (AdSense)' | 'In-Stream Ads Ready' | 'Brand Deals Eligible' | 'Organic Ready';
  monthlyRevenue?: string;
  askingPrice: number;
  verified: boolean;
  demo: boolean;
  featured: boolean;
  thumbnail: string;
  description: string;
  transferMethod: string;
  monthlyViews: string;
  topAudience: string;
  strikeStatus: '0 Copyright Strikes · Clean';
}

export interface FAQItem {
  qNumber: string;
  question: string;
  answer: string;
  category: 'General' | 'Transactions' | 'Selling' | 'Safety';
}

export interface TestimonialItem {
  id: string;
  name: string;
  handle: string;
  role: 'Verified Buyer' | 'Verified Seller';
  platform: PlatformType;
  rating: number;
  content: string;
  assetTraded: string;
  date: string;
}

export interface EscrowTransaction {
  id: string;
  assetTitle: string;
  platform: PlatformType;
  amount: number;
  status: 'In Escrow' | 'Verification Stage' | 'Transfer Pending' | 'Released' | 'Refunded';
  date: string;
  counterparty: string;
}
