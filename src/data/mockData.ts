import { Listing, FAQItem, TestimonialItem, EscrowTransaction } from '../types/marketplace';

export const APK_DOWNLOAD_URL = "https://www.mediafire.com/file/0mahk87w660kpwr/yt+market.in.apk/file";
export const OFFICIAL_APP_LOGO = "/assets/aistudio/file_0000000061f081f5a84ef0cf00cf3077_54be5f0a.png";

export const APP_SCREENSHOTS = {
  homeDashboard: "/assets/aistudio/Screenshot_20261101_121744_21613ed9.jpg",
  youtubeChannels: "/assets/aistudio/Screenshot_20261101_121626_d8757213.jpg",
  facebookPages: "/assets/aistudio/Screenshot_20261101_121648_d4587096.jpg",
  instagramAccounts1: "/assets/aistudio/Screenshot_20261101_121655_06081e4a.jpg",
  instagramAccounts2: "/assets/aistudio/Screenshot_20261101_121702_dd8792e5.jpg",
  customerReviews: "/assets/aistudio/Screenshot_20261101_121714_73f47108.jpg"
};

export const REAL_APP_LISTINGS: Listing[] = [
  {
    id: 'yt-real-01',
    title: 'HELKAO YOUTUBE',
    handle: '@helkaoyoutube9816',
    platform: 'youtube',
    category: 'Entertainment',
    followersCount: 6420,
    followersFormatted: '6.42K Subs · 63 Videos',
    engagementRate: '9.4%',
    accountAge: '1.8 Years',
    monetizationStatus: 'Monetized (AdSense)',
    monthlyRevenue: '₹3,400/mo',
    askingPrice: 2999,
    verified: true,
    demo: false,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&auto=format&fit=crop&q=80',
    description: 'Santali music, regional films, comedy skits and traditional entertainment channel. Clean strike record, Brand Account ready for instant Google owner handover.',
    transferMethod: 'Google Brand Account Primary Owner Transfer (7-day standard handover)',
    monthlyViews: '85,000 views/mo',
    topAudience: 'India (94%), Bangladesh (4%)',
    strikeStatus: '0 Copyright Strikes · Clean'
  },
  {
    id: 'yt-real-02',
    title: 'sjDfreak 2.0',
    handle: '@sjDfreak201',
    platform: 'youtube',
    category: 'Tech & Gaming',
    followersCount: 113000,
    followersFormatted: '113K Subs · 90 Videos',
    engagementRate: '8.8%',
    accountAge: '2.5 Years',
    monetizationStatus: 'Monetized (AdSense)',
    monthlyRevenue: '₹18,500/mo',
    askingPrice: 14500,
    verified: true,
    demo: false,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    description: 'High-growth YouTube channel ("You Make Your Own Luck!"). Viral shorts traffic, active community tab, verified Silver Creator award eligible.',
    transferMethod: 'Google Brand Account Owner Invite',
    monthlyViews: '420,000 views/mo',
    topAudience: 'India (86%), UAE (6%), Nepal (4%)',
    strikeStatus: '0 Copyright Strikes · Clean'
  },
  {
    id: 'fb-real-01',
    title: 'morning tea story',
    handle: 'morningteastory',
    platform: 'facebook',
    category: 'Lifestyle & Travel',
    followersCount: 33000,
    followersFormatted: '33K Followers · 138 Posts',
    engagementRate: '6.2%',
    accountAge: '2.1 Years',
    monetizationStatus: 'In-Stream Ads Ready',
    monthlyRevenue: '₹2,200/mo',
    askingPrice: 499,
    verified: true,
    demo: false,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    description: '"Ek Cup Chai... Aur Thodi Si Sukoon Kahaniyan". Engaging storytelling, quotes, and motivational reels page with high organic Hindi shares.',
    transferMethod: 'Meta Business Manager Admin Role Handover',
    monthlyViews: '180,000 reel views/mo',
    topAudience: 'India (92%), Gulf NRIs (5%)',
    strikeStatus: '0 Copyright Strikes · Clean'
  },
  {
    id: 'fb-real-02',
    title: 'Rahul Gupta Page',
    handle: 'rahulguptaofficial',
    platform: 'facebook',
    category: 'Entertainment',
    followersCount: 35000,
    followersFormatted: '35K Followers · 115 Posts',
    engagementRate: '5.9%',
    accountAge: '1.9 Years',
    monetizationStatus: 'In-Stream Ads Ready',
    monthlyRevenue: '₹1,800/mo',
    askingPrice: 650,
    verified: true,
    demo: false,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
    description: 'Culture, inspirational posts ("Jai shree Ram"), and community viral videos page with loyal daily engagement.',
    transferMethod: 'Meta Business Suite Primary Admin Transfer',
    monthlyViews: '140,000 views/mo',
    topAudience: 'India (95%), Nepal (3%)',
    strikeStatus: '0 Copyright Strikes · Clean'
  },
  {
    id: 'ig-real-01',
    title: 'ANSHIKA | Content Creator',
    handle: '@anshikapathakk',
    platform: 'instagram',
    category: 'Lifestyle & Travel',
    followersCount: 29100,
    followersFormatted: '29.1K Followers · 797 Posts',
    engagementRate: '7.4%',
    accountAge: '2.2 Years',
    monetizationStatus: 'Brand Deals Eligible',
    monthlyRevenue: '₹4,500/mo',
    askingPrice: 99,
    verified: true,
    demo: false,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    description: 'Delhi based digital content creator ("Content 360: Teaching what I know about content"). High active story viewers and verified email handover.',
    transferMethod: 'Original Email (OGE) + 2FA Credentials Handover',
    monthlyViews: '120,000 reel reach/mo',
    topAudience: 'Delhi NCR (48%), Mumbai (24%), Bangalore (14%)',
    strikeStatus: '0 Copyright Strikes · Clean'
  },
  {
    id: 'ig-real-02',
    title: 'aditi Yadav',
    handle: '@aditiyadav089',
    platform: 'instagram',
    category: 'Lifestyle & Travel',
    followersCount: 18000,
    followersFormatted: '18K Followers · 36 Posts',
    engagementRate: '8.1%',
    accountAge: '1.4 Years',
    monetizationStatus: 'Brand Deals Eligible',
    monthlyRevenue: '₹2,000/mo',
    askingPrice: 99,
    verified: true,
    demo: false,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80',
    description: 'Fashion, Vlogs & aesthetic Reels creator account. Active teen & young adult follower base with consistent organic growth.',
    transferMethod: 'Direct Email & Password Handover via Escrow',
    monthlyViews: '95,000 impressions/mo',
    topAudience: 'India (97%)',
    strikeStatus: '0 Copyright Strikes · Clean'
  },
  {
    id: 'ig-real-03',
    title: 'VANAJA 🦋',
    handle: '@its_me_butterfly_2001',
    platform: 'instagram',
    category: 'Finance & Business',
    followersCount: 13100,
    followersFormatted: '13.1K Followers · 99 Posts',
    engagementRate: '6.7%',
    accountAge: '1.6 Years',
    monetizationStatus: 'Brand Deals Eligible',
    monthlyRevenue: '₹1,500/mo',
    askingPrice: 99,
    verified: true,
    demo: false,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    description: 'Housing loans & insurance advisor profile. High-trust professional audience interested in personal finance and financial literacy.',
    transferMethod: 'Original Email Security Handover',
    monthlyViews: '60,000 views/mo',
    topAudience: 'South India & Metro Cities (89%)',
    strikeStatus: '0 Copyright Strikes · Clean'
  },
  {
    id: 'ig-real-04',
    title: 'viral_girl_priyanka',
    handle: '@priyanka_panda_098_098',
    platform: 'instagram',
    category: 'Entertainment',
    followersCount: 54200,
    followersFormatted: '54.2K Followers · 109 Posts',
    engagementRate: '8.9%',
    accountAge: '2.0 Years',
    monetizationStatus: 'Brand Deals Eligible',
    monthlyRevenue: '₹6,000/mo',
    askingPrice: 249,
    verified: true,
    demo: false,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80',
    description: 'Blogger & video creator. Viral video reach, paid collaborations open, strong engagement across reels and comments.',
    transferMethod: 'Account Ownership Credentials & Phone Change Protocol',
    monthlyViews: '310,000 impressions/mo',
    topAudience: 'India (94%)',
    strikeStatus: '0 Copyright Strikes · Clean'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    qNumber: 'Q1',
    question: 'What is YT MARKET?',
    answer: 'YT MARKET is India’s premier digital marketplace designed to connect buyers and sellers of YouTube channels, Facebook pages, and Instagram accounts with escrow-style transaction safety and transparent metrics.',
    category: 'General'
  },
  {
    qNumber: 'Q2',
    question: 'What can I buy on YT MARKET?',
    answer: 'You can explore available YouTube channels, Facebook pages, and Instagram accounts listed on the marketplace across Entertainment, Tech, Gaming, Lifestyle, Finance, and Education.',
    category: 'General'
  },
  {
    qNumber: 'Q3',
    question: 'How can I sell my social media account?',
    answer: 'Create an account, submit your listing details (channel link, analytics screenshots, and price in ₹ INR), complete the required ownership checks, and follow our structured selling process.',
    category: 'Selling'
  },
  {
    qNumber: 'Q4',
    question: 'Is YT MARKET safe?',
    answer: 'Yes. YT MARKET implements 100% Escrow Protection. The buyer’s payment is held securely in an authorized escrow holding account and is only released after the buyer confirms verified ownership handover.',
    category: 'Safety'
  },
  {
    qNumber: 'Q5',
    question: 'What is an escrow transaction?',
    answer: 'An escrow arrangement involves an authorized third party holding payment under agreed conditions until the transaction requirements—such as asset transfer and buyer verification—are fulfilled.',
    category: 'Transactions'
  },
  {
    qNumber: 'Q6',
    question: 'How does the refund process work?',
    answer: 'If a seller fails to transfer the account within the agreed timeframe or there is an unresolvable mismatch in analytics/strikes, the buyer receives a 100% full refund.',
    category: 'Transactions'
  },
  {
    qNumber: 'Q7',
    question: 'What happens if a seller does not transfer the account?',
    answer: 'The buyer can raise a dispute with 1-click in the app. Escrow funds remain frozen and will not be released to the seller; upon audit, the entire payment is returned to the buyer.',
    category: 'Safety'
  },
  {
    qNumber: 'Q8',
    question: 'Can I sell my YouTube channel?',
    answer: 'Eligible listings may be submitted, subject to applicable YouTube policies, ownership requirements, and supported transfer methods such as Google Brand Account ownership invites.',
    category: 'Selling'
  },
  {
    qNumber: 'Q9',
    question: 'Can I buy an Instagram account?',
    answer: 'You can explore listings, but account transfers must comply with Instagram’s applicable terms and restrictions. Transactions must use official supported handover channels.',
    category: 'General'
  },
  {
    qNumber: 'Q10',
    question: 'How can I contact customer support?',
    answer: 'Contact the YT MARKET support team through the official support channels in the app or website: support@ytmarket.in, live ticket desk, or verified WhatsApp helpline.',
    category: 'Safety'
  },
  {
    qNumber: 'Q11',
    question: 'How can I track my transaction?',
    answer: 'Use the "My Orders" tab in your account dashboard to view live milestone updates (Payment Locked, Handover Initiated, Inspection Period, Payout Cleared).',
    category: 'Transactions'
  },
  {
    qNumber: 'Q12',
    question: 'Are there any hidden charges?',
    answer: 'No. All applicable fees and charges are displayed in Indian Rupees (₹) clearly before confirmation. There are zero hidden deductions.',
    category: 'Transactions'
  },
  {
    qNumber: 'Q13',
    question: 'Can I cancel an order?',
    answer: 'Cancellation is supported prior to the transfer stage according to our published cancellation policy. Funds held in escrow are promptly returned.',
    category: 'Transactions'
  },
  {
    qNumber: 'Q14',
    question: 'How do I report a fake listing?',
    answer: 'Tap "Report Listing" directly on any account card or contact customer support with screenshots. Our audit team reviews reports within 24 hours.',
    category: 'Safety'
  },
  {
    qNumber: 'Q15',
    question: 'Does YT MARKET guarantee account growth?',
    answer: 'No. Buying an existing account provides established historical reach and subscribers, but future growth depends on content quality, platform algorithms, and audience retention.',
    category: 'General'
  }
];

export const REAL_APP_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-01',
    name: 'Aman Sharma',
    handle: '@amansharma_vlogs',
    role: 'Verified Buyer',
    platform: 'youtube',
    rating: 5,
    content: 'YT Market ka concept kaafi achha hai. App ka interface simple hai aur escrow protection se payment safe rehta hai.',
    assetTraded: 'YouTube Monetized Channel',
    date: '50 mins ago · App Verified Order'
  },
  {
    id: 'rev-02',
    name: 'Vikram Verma',
    handle: '@vikram_creations',
    role: 'Verified Buyer',
    platform: 'facebook',
    rating: 5,
    content: 'YouTube, Facebook aur Instagram accounts ke liye ek hi platform milna achhi baat hai. Handover smoothly ho gaya.',
    assetTraded: 'Facebook Page (35K Followers)',
    date: '54 mins ago · App Verified Order'
  },
  {
    id: 'rev-03',
    name: 'Pooja Trivedi',
    handle: '@pooja_digital',
    role: 'Verified Buyer',
    platform: 'instagram',
    rating: 5,
    content: 'Instagram account purchase kiya tha, direct email transfer mil gaya. Escrow payment protection se deal 100% secure thi.',
    assetTraded: 'Instagram Creator Account',
    date: '1 hour ago · App Verified Order'
  },
  {
    id: 'rev-04',
    name: 'Rahul Deshmukh',
    handle: '@deshmukh_media',
    role: 'Verified Seller',
    platform: 'youtube',
    rating: 5,
    content: 'Pehle din hi mere channel ke liye genuine buyer mil gaya. Buyer ke confirm karte hi ₹14,500 mere bank account me aa gaye.',
    assetTraded: 'YouTube Channel (113K Subs)',
    date: '3 hours ago · App Verified Order'
  }
];

export const DEMO_TRANSACTIONS: EscrowTransaction[] = [
  {
    id: 'TXN-98421',
    assetTitle: 'HELKAO YOUTUBE (6.42K Subs)',
    platform: 'youtube',
    amount: 2999,
    status: 'In Escrow',
    date: 'Today · Oct 31, 2026',
    counterparty: 'Aman Sharma (Buyer)'
  },
  {
    id: 'TXN-87114',
    assetTitle: 'morning tea story (33K Followers)',
    platform: 'facebook',
    amount: 499,
    status: 'Transfer Pending',
    date: 'Yesterday · Oct 30, 2026',
    counterparty: 'Vikram Verma (Buyer)'
  },
  {
    id: 'TXN-76492',
    assetTitle: 'ANSHIKA | Content Creator (29.1K Followers)',
    platform: 'instagram',
    amount: 99,
    status: 'Released',
    date: 'Oct 28, 2026',
    counterparty: 'Pooja Trivedi (Buyer)'
  }
];
