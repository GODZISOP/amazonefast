import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  Globe,
  Palette,
  Camera,
  BarChart3,
  Search,
  Sliders,
  FileText,
  TrendingUp,
  Boxes,
  Store,
  Layers,
  Lock,
  Target,
  RefreshCw,
  Building,
  Landmark,
  FileCheck,
  Award,
  Users
} from "lucide-react";
import { notFound } from "next/navigation";
import WalletServiceUI from "@/components/services/WalletServiceUI";
import WiseServiceUI from "@/components/services/WiseServiceUI";
import StripeServiceUI from "@/components/services/StripeServiceUI";
import AirwallexServiceUI from "@/components/services/AirwallexServiceUI";
import BOAServiceUI from "@/components/services/BOAServiceUI";
import ChaseBankServiceUI from "@/components/services/ChaseBankServiceUI";
import WyomingLLCServiceUI from "@/components/services/WyomingLLCServiceUI";
import FloridaLLCServiceUI from "@/components/services/FloridaLLCServiceUI";
import TexasLLCServiceUI from "@/components/services/TexasLLCServiceUI";
import LLCFormationServiceUI from "@/components/services/LLCFormationServiceUI";
import AmazonAccountCreationServiceUI from "@/components/services/AmazonAccountCreationServiceUI";
import WholesaleFBAServiceUI from "@/components/services/WholesaleFBAServiceUI";
import PrivateLabelServiceUI from "@/components/services/PrivateLabelServiceUI";
import BrandApprovalsServiceUI from "@/components/services/BrandApprovalsServiceUI";
import TrademarkServiceUI from "@/components/services/TrademarkServiceUI";

// Service Data
const serviceDetails: Record<string, any> = {
  "trademark-brand-registry": {
    title: "Amazon Trademark & Brand Registry",
    tagline: "Logo & Wordmark USPTO Protection",
    description: "Official USPTO trademark filing and Amazon Brand Registry protection. Serial number in 2 to 3 days to unlock A+ Content, Storefront, and counterfeit protection.",
    image: "/srv_store_creation.jpg",
    benefits: [
      "Official USPTO Filing Included",
      "Licensed US Attorney Representation",
      "Serial Number in 2 to 3 Days",
      "Instant Amazon Brand Registry Enrollment",
      "Unlocks A+ Content & Video Ads",
      "Counterfeit & Hijacker Protection"
    ]
  },
  "trademark-logo": {
    title: "Logo Trademark Registration",
    tagline: "USPTO Design Mark Protection",
    description: "Official USPTO Logo / Design mark registration. Protects your unique brand logo and unlocks Amazon Brand Registry.",
    image: "/srv_store_creation.jpg",
    benefits: [
      "Official USPTO Filing Included",
      "Logo Conflict & Clearance Search",
      "Serial Number in 2 to 3 Days",
      "Amazon Brand Registry Activation",
      "Unlocks A+ Content & Storefront"
    ]
  },
  "trademark-word": {
    title: "Word Trademark Registration",
    tagline: "USPTO Wordmark Protection",
    description: "Strongest Amazon legal protection. Protects your brand name text in any font or color and gives full Brand Registry privileges.",
    image: "/srv_store_creation.jpg",
    benefits: [
      "Official USPTO Filing Included",
      "Complete Name Clearance Search",
      "Serial Number in 2 to 3 Days",
      "Amazon Brand Registry Activation",
      "100% Brand Name Ownership"
    ]
  },
  "brand-approvals": {
    title: "Brand Approval",
    tagline: "Guaranteed Brand Approvals",
    description: "Get official approvals to sell big brands on Amazon. Official Letter of Authorization (LOA), Brand Registry approval, Proforma Invoices, Paid Invoices, and complete Seller Central setup.",
    image: "/srv_product_hunting_v2_1791215473466.jpg",
    benefits: [
      "20% to 70% Profit Margin Brands",
      "Official Letter of Authorization (LOA)",
      "Proforma & Paid Commercial Invoices",
      "Brand Registry Approval Setup",
      "Complete Seller Central Ungating",
      "Zero Inauthentic Suspension Risk"
    ]
  },
  "amazon-private-label": {
    title: "Complete Private Label Account Management",
    tagline: "Build Your 7-Figure Amazon Brand From Scratch",
    description: "Full-service private label incubation: product hunting, competitor review mining, direct OEM manufacturing, patent validation, custom packaging & testing, studio 3D/photography, A+ content, and aggressive PPC launch. Full-service brand scaling and profit share partnership.",
    image: "/srv_store_creation.jpg",
    benefits: [
      "Data-Driven Product Hunting & Niche Selection",
      "Competitor Weakness & Reverse-ASIN Gap Analysis",
      "Direct OEM/ODM Factory Sourcing & Price Negotiation",
      "USPTO Patent Search & Design Verification",
      "Pre-Shipment Quality Testing (AQL 2.5) & Inspection",
      "Custom Die-Cut Packaging & Compliant Labeling",
      "Studio 3D Renders, Lifestyle Photography & A+ Content",
      "Honeymoon Period PPC Launch & Algorithmic Ranking"
    ]
  },
  "amazon-wholesale-fba": {
    title: "Complete Account Management and PL",
    tagline: "Turnkey Brand Approvals & Scaled Operations",
    description: "End-to-end wholesale operations: direct brand approvals, distributor invoice procurement, FBA prep & shipment planning, and daily BuyBox store management. Turnkey brand growth and profit share partnership.",
    image: "/srv_fba_automation_new.jpg",
    benefits: [
      "Direct Brand Account Opening & Resale Approvals",
      "Authorized Distributor Invoices (Zero Ungate Risk)",
      "Send-To-Amazon (STA) Inbound Shipment Plans",
      "Prep Center Barcode & FNSKU Logistics",
      "24/7 Algorithmic BuyBox Repricing & Inventory Forecasting"
    ]
  },
  "amazon-account-creation": {
    title: "Amazon Account Creation",
    tagline: "Professional Setup & Verification",
    description: "Avoid suspension on day one. We professionally set up and verify your Amazon Seller Central account, ensuring all legal and tax details are perfectly aligned.",
    image: "/srv_amazon_creation.png",
    benefits: [
      "Guaranteed Approval Process",
      "Utility Bill & Identity Verification",
      "Tax Interview Completion (W8/W9)",
      "Bank Account Linking",
      "Immediate Selling Privileges"
    ]
  },
  "amazon-ppc-advertising": {
    title: "Amazon PPC Advertising",
    tagline: "Run Profitable Ads & Increase Sales",
    description: "Amazon PPC Advertising means setting up, running, and improving ads on Amazon to reach real buyers, grow your sales, and keep daily costs under control.",
    image: "/srv_amazon_ppc_new.png",
    benefits: [
      "Keyword Research",
      "Ad Setup",
      "Budget Management",
      "Ad Optimization",
      "Reduce Wasted Spending",
      "Performance Reports"
    ]
  },
  "product-hunting": {
    title: "Product Hunting & Sourcing",
    tagline: "Find Winning Products & Reliable Suppliers",
    description: "Product Hunting & Sourcing means finding suitable products to sell and reliable suppliers to buy them from.",
    image: "/srv_product_hunting_v2_1791215473466.jpg",
    benefits: [
      "Product Research",
      "Competition Check",
      "Profit Calculation",
      "Supplier Research",
      "Price Negotiation",
      "Sample & Quality Checks"
    ]
  },
  "store-creation": {
    title: "Amazon Store Creation",
    tagline: "Build a Premium Brand Experience",
    description: "Transform your Amazon presence with a highly converting, custom-designed Amazon Storefront. We create visually stunning storefronts that tell your brand story, cross-sell your catalog, and increase average order value.",
    image: "/srv_a_plus_content_v2_1791214962821.jpg",
    benefits: [
      "Custom Graphic Design & Layouts",
      "Brand Story Integration",
      "Mobile-Optimized Storefronts",
      "Shoppable Images & Video Modules",
      "Increased Brand Trust & Loyalty"
    ]
  },
  "a-content-ebc": {
    title: "A+ Content & EBC",
    tagline: "Boost Conversions with Premium Listing Designs",
    description: "Amazon A+ Content & EBC means adding professional images and detailed information to your product page to help customers understand your product. EBC (Enhanced Brand Content) is the former name for A+ Content.",
    image: "/srv_a_plus_content_new.jpg",
    benefits: [
      "Product Images",
      "Product Descriptions",
      "Brand Story",
      "Comparison Charts",
      "Page Design",
      "Upload & Setup"
    ]
  },
  "listing-seo": {
    title: "Listing SEO & Optimization",
    tagline: "Rank Higher, Sell Faster",
    description: "Without visibility, even the best product won't sell. We strategically optimize your product titles, bullet points, backend search terms, and descriptions to ensure maximum visibility on Amazon's A9 search algorithm.",
    image: "/srv_listing_seo_new.png",
    benefits: [
      "Comprehensive Keyword Research",
      "SEO-Optimized Titles & Bullets",
      "Backend Search Term Optimization",
      "HTML Formatted Product Descriptions",
      "Index Checking & Ranking Strategy"
    ]
  },
  "account-reinstatement": {
    title: "Account Reinstatement",
    tagline: "Professional Appeals & Reinstatement Plans",
    description: "A suspended Amazon account can be devastating to your business. Our team of policy experts crafts tailored Plans of Action (POA) and handles all communication with Amazon to get your account reactivated quickly and securely.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "In-Depth Suspension Analysis",
      "Customized Plan of Action (POA)",
      "Direct Communication with Amazon",
      "Account Health Monitoring",
      "Future Suspension Prevention Strategies"
    ]
  },
  "payoneer-wallet": {
    title: "Payoneer Setup",
    tagline: "Digital Wallet Setup",
    description: "Set up a professional Payoneer account to manage your international Amazon payouts securely and efficiently with low transaction fees.",
    image: "/srv_payoneer_setup.png",
    benefits: [
      "Fast Account Approval",
      "Multi-Currency Receiving Accounts",
      "Seamless Amazon Integration",
      "Low Conversion Fees",
      "Global Payment Solutions"
    ]
  },
  "wise-wallet": {
    title: "Wise Setup",
    tagline: "Digital Wallet Setup",
    description: "Get your Wise (formerly TransferWise) business account set up correctly for Amazon to receive funds with real exchange rates and zero hidden fees.",
    image: "/srv_wise_setup.png",
    benefits: [
      "Real Mid-Market Exchange Rate",
      "Local Bank Details in 10+ Currencies",
      "Direct Integration with Amazon Seller Central",
      "Fast International Transfers",
      "Business Expense Cards"
    ]
  },
  "airwallex-wallet": {
    title: "Airwallex Setup",
    tagline: "Digital Wallet Setup",
    description: "Create your Airwallex global business account for seamless international Amazon payments and multi-currency management.",
    image: "/srv_airwallex_setup.jpg",
    benefits: [
      "Global Accounts in 11+ Currencies",
      "Zero International Transaction Fees",
      "Virtual Visa Company Cards",
      "Automated Xero/QuickBooks Sync",
      "Optimized for E-commerce Sellers"
    ]
  },
  "stripe-setup": {
    title: "Stripe Setup",
    tagline: "Digital Wallet Setup",
    description: "Professional Stripe account setup to process global payments, manage cash flow, and integrate flawlessly with your e-commerce ecosystem.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Accept Global Payments",
      "Advanced Fraud Protection",
      "Seamless E-commerce Integration",
      "Custom Checkout Experiences",
      "Comprehensive Financial Reporting"
    ]
  },
  "chase-bank": {
    title: "Chase Bank Setup",
    tagline: "Physical Bank Setup",
    description: "Get a legitimate physical US bank account with Chase Bank for your Amazon business, providing ultimate credibility and financial flexibility.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Premium US Banking Entity",
      "High-Limit Business Credit Cards",
      "Dedicated Business Banking Support",
      "Secure Wire Transfers",
      "Maximum Amazon Trust Level"
    ]
  },
  "bank-of-america": {
    title: "Bank of America Setup",
    tagline: "Physical Bank Setup",
    description: "Establish a strong financial foundation with a Bank of America physical business account, tailored for international Amazon sellers.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Top-Tier US Physical Bank",
      "Business Advantage Banking",
      "Global Wire Transfer Capabilities",
      "Advanced Cash Flow Management",
      "Highly Trusted by Amazon"
    ]
  },
  "llc-formation": {
    title: "US LLC Formation",
    tagline: "Turnkey US LLC Setup for Global Founders",
    description: "Launch your compliant US company 100% remotely. No SSN or US visa needed. Includes state filing, registered agent, US address, IRS EIN, and US business bank account setup.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "100% Non-Resident Remote Setup",
      "Official US Commercial Address & Mail Scanning",
      "Registered Agent (1 Full Year Included)",
      "IRS Federal EIN Tax ID Issuance",
      "US Business Bank Account (Mercury / Relay / Wise)"
    ]
  },
  "wyoming-llc": {
    title: "Wyoming LLC Formation",
    tagline: "Most Popular for Non-Residents",
    description: "Wyoming LLC formation for international founders. Low fees, strong privacy, zero state income tax, and fastest formation timeline.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Wyoming Secretary of State Filing Included",
      "Full Member Anonymity & Privacy",
      "0% State Income & Corporate Tax",
      "1 Year Registered Agent & US Address",
      "IRS EIN for Non-Residents without SSN"
    ]
  },
  "florida-llc": {
    title: "Florida LLC Formation",
    tagline: "East Coast E-Commerce Hub",
    description: "Form your Florida LLC directly through Sunbiz. Prime logistics gateway for Amazon FBA imports and zero personal state income tax.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Florida State Filing Fee Included",
      "Direct Sunbiz Electronic Processing",
      "0% Personal State Income Tax",
      "1 Year Registered Agent & US Address",
      "IRS Federal EIN & Bank Setup"
    ]
  },
  "texas-llc": {
    title: "Texas LLC Formation",
    tagline: "Economic & Logistics Powerhouse",
    description: "Establish your Texas LLC in the #2 US economy. Zero personal income tax, $2.47M franchise tax exemption, and central Amazon FBA mega-hubs.",
    image: "/srv_account_reinstatement.png",
    benefits: [
      "Texas SOS Statutory Fee Included",
      "$2.47M Franchise Tax Exemption",
      "0% Personal State Income Tax",
      "1 Year Registered Agent & Commercial Address",
      "IRS EIN & Tier-1 Bank Readiness"
    ]
  }
};

// Simple, human-friendly descriptions for service benefits (zero corporate fluff)
const benefitDescriptions: Record<string, string> = {
  // A+ Content & EBC
  "Product Images": "Design clear, attractive product visuals.",
  "Product Descriptions": "Explain features and benefits in simple words.",
  "Brand Story": "Introduce your brand to customers.",
  "Comparison Charts": "Compare your products to help shoppers choose.",
  "Page Design": "Arrange images and text professionally.",
  "Upload & Setup": "Add the content to your Amazon listings.",

  // PPC Advertising
  "Keyword Research": "Find the words people use to search for your products.",
  "Ad Setup": "Create and run your ads on Amazon.",
  "Budget Management": "Set how much to spend on ads each day.",
  "Ad Optimization": "Improve ads to help bring more sales.",
  "Reduce Wasted Spending": "Stop ads from showing for searches that don’t bring sales.",
  "Performance Reports": "Show your ad spending, clicks, and sales.",

  // Product Hunting & Sourcing
  "Product Research": "Find products with good sales potential.",
  "Competition Check": "See how many sellers offer similar products.",
  "Profit Calculation": "Estimate profit after product costs and Amazon fees.",
  "Supplier Research": "Find reliable brands, wholesalers, or manufacturers.",
  "Price Negotiation": "Discuss better prices and buying terms.",
  "Sample & Quality Checks": "Check samples before placing a bulk order.",

  // Listing SEO
  "Comprehensive Keyword Research": "Find high-search keywords that real customers actually type on Amazon.",
  "SEO-Optimized Titles & Bullets": "Clear, readable titles and bullet points packed with high-converting search terms.",
  "Backend Search Term Optimization": "Hidden backend keywords filled correctly to maximize your reach.",
  "HTML Formatted Product Descriptions": "Neat, clean product descriptions that look great on both phone and computer screens.",
  "Index Checking & Ranking Strategy": "Check that Amazon indexes every keyword so you rank higher over time.",

  // Store Creation
  "Custom Graphic Design & Layouts": "Custom banners and organized product collections tailored to your brand.",
  "Brand Story Integration": "Tell your brand story and build buyer trust with professional layout modules.",
  "Mobile-Optimized Storefronts": "Designed to look perfect and load quickly on mobile devices.",
  "Shoppable Images & Video Modules": "Clickable images and video sections that make buying fast and simple.",
  "Increased Brand Trust & Loyalty": "Turn one-time shoppers into repeat buyers with a polished storefront.",

  // Account Creation
  "Guaranteed Approval Process": "Step-by-step guidance to get your seller account approved on the first try.",
  "Utility Bill & Identity Verification": "Proper document formatting to pass Amazon's verification without delays.",
  "Tax Interview Completion (W8/W9)": "Accurate tax information setup for both US and international founders.",
  "Bank Account Linking": "Connect your business bank account smoothly for direct deposit payouts.",
  "Immediate Selling Privileges": "Get your account live and ready to list products right away.",

  // Account Reinstatement
  "In-Depth Suspension Analysis": "Find the exact root cause of your account suspension or listing deactivation.",
  "Customized Plan of Action (POA)": "A professional, customized appeal letter tailored to Amazon seller policies.",
  "Direct Communication with Amazon": "Follow up directly with seller performance until your account is restored.",
  "Account Health Monitoring": "Keep your order defect rate and policy compliance clean to prevent issues.",
  "Future Suspension Prevention Strategies": "Simple daily practices to keep your account safe from future flags.",

  // US LLC Formation
  "100% Non-Resident Remote Setup": "Form your US company online without needing a US visa or SSN.",
  "Official US Commercial Address & Mail Scanning": "A real US business address with digital mail forwarding and scanning.",
  "Registered Agent (1 Full Year Included)": "A dedicated registered agent in your chosen state for 1 full year.",
  "IRS Federal EIN Tax ID Issuance": "Official tax ID from the IRS needed for US banking and Amazon verification.",
  "US Business Bank Account (Mercury / Relay / Wise)": "Setup your business bank account so you can receive payouts easily.",

  // Wyoming LLC
  "Wyoming Secretary of State Filing Included": "Official state filing submitted directly with Wyoming state authorities.",
  "Full Member Anonymity & Privacy": "Keep your personal name off public state records for maximum privacy.",
  "0% State Income & Corporate Tax": "Enjoy Wyoming's zero state corporate income tax benefits.",
  "1 Year Registered Agent & US Address": "Full year of registered agent service with commercial address included.",
  "IRS EIN for Non-Residents without SSN": "We handle the IRS EIN paperwork directly for non-US residents.",

  // Payoneer / Wise / Wallets
  "Fast Account Approval": "Quick verification with approved documents to get paid quickly.",
  "Multi-Currency Receiving Accounts": "Receive USD, EUR, GBP, and other currencies like a local business.",
  "Seamless Amazon Integration": "Connect directly to Amazon Seller Central with zero payout delays.",
  "Low Conversion Fees": "Keep more of your earnings with low currency exchange rates.",
  "Global Payment Solutions": "Withdraw funds directly to your local bank account anytime.",

  // Trademark & Brand Registry
  "Official USPTO Filing Included": "Direct trademark application filed with the US Patent and Trademark Office.",
  "Licensed US Attorney Representation": "Required legal representation by a licensed US attorney for foreign filings.",
  "Serial Number in 2 to 3 Days": "Get your official USPTO serial number fast to enroll in Amazon Brand Registry.",
  "Instant Amazon Brand Registry Enrollment": "Unlock brand protection tools, A+ content, and sponsored brand ads.",
  "Unlocks A+ Content & Video Ads": "Add rich product banners, videos, and storefronts to your listings.",
  "Counterfeit & Hijacker Protection": "Remove unauthorized sellers and counterfeiters from your listing immediately.",
  "Logo Conflict & Clearance Search": "Pre-filing search to make sure your logo design is safe to register.",
  "Complete Name Clearance Search": "Check that no existing brand has the same or similar name.",
  "100% Brand Name Ownership": "Full legal rights to your brand name across the United States.",

  // Brand Approvals
  "20% to 70% Profit Margin Brands": "Pre-vetted brand deals with healthy profit margins for wholesale sellers.",
  "Official Letter of Authorization (LOA)": "Genuine authorization letters from brand owners or distributors.",
  "Proforma & Paid Commercial Invoices": "Compliant invoices that meet Amazon's ungating requirements.",
  "Brand Registry Approval Setup": "Approved status in Seller Central to list and sell restricted brands.",
  "Complete Seller Central Ungating": "Help ungating top categories and major brands without suspension risk.",
  "Zero Inauthentic Suspension Risk": "100% genuine sourcing documentation to keep your account safe.",

  // Wholesale FBA
  "Direct Brand Account Opening & Resale Approvals": "Open direct wholesale accounts with established US brands and distributors.",
  "Authorized Distributor Invoices (Zero Ungate Risk)": "Clean commercial invoices from verified distributors to ungate products.",
  "Send-To-Amazon (STA) Inbound Shipment Plans": "Proper shipping plans, pallet labels, and box labels for Amazon warehouses.",
  "Prep Center Barcode & FNSKU Logistics": "Inspection, polybagging, and FNSKU labeling through reliable US prep centers.",
  "24/7 Algorithmic BuyBox Repricing & Inventory Forecasting": "Automated repricing to win the BuyBox and reorder stock before running out.",

  // Private Label
  "Data-Driven Product Hunting & Niche Selection": "Find high-demand, low-competition products with strong profit potential.",
  "Competitor Weakness & Reverse-ASIN Gap Analysis": "Check customer complaints in competitor reviews to build a better product.",
  "Direct OEM/ODM Factory Sourcing & Price Negotiation": "Source directly from verified factories with sample checks and price negotiation.",
  "USPTO Patent Search & Design Verification": "Check for patents to avoid trademark or intellectual property disputes.",
  "Pre-Shipment Quality Testing (AQL 2.5) & Inspection": "Inspect goods before shipping so defective units never reach Amazon warehouses.",
  "Custom Die-Cut Packaging & Compliant Labeling": "Professional custom packaging and barcode labels ready for Amazon FBA.",
  "Studio 3D Renders, Lifestyle Photography & A+ Content": "High-resolution photos, 3D renders, and A+ content that convert visitors into buyers.",
  "Honeymoon Period PPC Launch & Algorithmic Ranking": "Targeted ad launch during Amazon's early ranking window to build organic sales."
};

function getBenefitDesc(benefit: string, serviceTitle: string): string {
  if (benefitDescriptions[benefit]) {
    return benefitDescriptions[benefit];
  }
  return `Professional setup and support to help your ${serviceTitle} run smoothly and get real results.`;
}

function getBenefitIcon(benefit: string): React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }> {
  const bLower = benefit.toLowerCase();
  
  // Specific Exact Matches & Core Priorities
  if (bLower.includes("product images") || bLower.includes("photo") || bLower.includes("imagery") || bLower.includes("lifestyle") || bLower.includes("camera") || bLower.includes("render")) return Camera;
  if (bLower.includes("product descriptions") || bLower.includes("invoice") || bLower.includes("poa") || bLower.includes("document") || bLower.includes("filing") || bLower.includes("ein")) return FileText;
  if (bLower.includes("brand story") || bLower.includes("storefront") || bLower.includes("brand registry") || bLower.includes("catalog")) return Store;
  if (bLower.includes("comparison") || bLower.includes("chart") || bLower.includes("report") || bLower.includes("analytics")) return BarChart3;
  if (bLower.includes("page design") || bLower.includes("graphic") || bLower.includes("design") || bLower.includes("a+ content")) return Palette;
  if (bLower.includes("upload & setup") || bLower.includes("sample & quality") || bLower.includes("approval") || bLower.includes("verified") || bLower.includes("compliant")) return CheckCircle2;
  
  if (bLower.includes("keyword") || bLower.includes("product research") || bLower.includes("alt text") || bLower.includes("seo") || bLower.includes("search") || bLower.includes("hunting")) return Search;
  if (bLower.includes("ad setup") || bLower.includes("competition") || bLower.includes("target") || bLower.includes("niche") || bLower.includes("ppc") || bLower.includes("campaign")) return Target;
  if (bLower.includes("budget") || bLower.includes("price negotiation") || bLower.includes("fee") || bLower.includes("tax") || bLower.includes("card") || bLower.includes("margin") || bLower.includes("roi")) return CreditCard;
  if (bLower.includes("optimization") || bLower.includes("a/b") || bLower.includes("test") || bLower.includes("reprice")) return Sliders;
  if (bLower.includes("wasted spending") || bLower.includes("waste") || bLower.includes("protect") || bLower.includes("safe") || bLower.includes("counterfeit") || bLower.includes("suspension") || bLower.includes("risk")) return ShieldCheck;
  
  if (bLower.includes("profit") || bLower.includes("growth") || bLower.includes("rank") || bLower.includes("sales") || bLower.includes("scale") || bLower.includes("revenue")) return TrendingUp;
  if (bLower.includes("supplier") || bLower.includes("llc") || bLower.includes("address") || bLower.includes("factory") || bLower.includes("commercial")) return Building;
  if (bLower.includes("bank") || bLower.includes("chase") || bLower.includes("entity") || bLower.includes("tier-1")) return Landmark;
  if (bLower.includes("shipment") || bLower.includes("fba") || bLower.includes("prep") || bLower.includes("fnsku") || bLower.includes("packaging") || bLower.includes("barcode")) return Boxes;
  if (bLower.includes("trademark") || bLower.includes("attorney") || bLower.includes("trust") || bLower.includes("ownership")) return Award;
  if (bLower.includes("fast") || bLower.includes("speed") || bLower.includes("quick") || bLower.includes("instant") || bLower.includes("serial number")) return Zap;
  if (bLower.includes("global") || bLower.includes("multi-currency") || bLower.includes("remote") || bLower.includes("international")) return Globe;
  if (bLower.includes("sync") || bLower.includes("integration") || bLower.includes("wire")) return RefreshCw;
  if (bLower.includes("privacy") || bLower.includes("anonymity") || bLower.includes("secure")) return Lock;
  if (bLower.includes("support") || bLower.includes("communication") || bLower.includes("team")) return Users;

  return Sparkles;
}

// Dynamic Metadata for Service Pages
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const data = serviceDetails[params.slug];
  if (!data) {
    return {
      title: "Services | Amazon Fast Services",
    };
  }
  const pageUrl = `https://amazonfastservices.com/services/${params.slug}`;
  return {
    title: data.title,
    description: data.description || data.tagline,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${data.title} | Amazon Fast Services`,
      description: data.description || data.tagline,
      url: pageUrl,
      siteName: "Amazon Fast Services",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Amazon Fast Services`,
      description: data.description || data.tagline,
    },
  };
}

// Required for Next.js App Router dynamic params
export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = serviceDetails[params.slug];

  if (!data) {
    notFound();
  }

  if (params.slug === "amazon-account-creation") {
    return <AmazonAccountCreationServiceUI data={data} />;
  }

  if (params.slug === "amazon-wholesale-fba") {
    return <WholesaleFBAServiceUI data={data} />;
  }

  if (params.slug === "amazon-private-label") {
    return <PrivateLabelServiceUI data={data} />;
  }

  if (params.slug === "brand-approvals") {
    return <BrandApprovalsServiceUI data={data} />;
  }

  if (params.slug === "trademark-brand-registry") {
    return <TrademarkServiceUI data={data} />;
  }

  if (params.slug === "trademark-logo") {
    return <TrademarkServiceUI data={data} defaultPlan="logo" />;
  }

  if (params.slug === "trademark-word") {
    return <TrademarkServiceUI data={data} defaultPlan="word" />;
  }

  if (params.slug === "llc-formation") {
    return <LLCFormationServiceUI data={data} />;
  }

  if (params.slug === "wyoming-llc") {
    return <WyomingLLCServiceUI data={data} />;
  }

  if (params.slug === "florida-llc") {
    return <FloridaLLCServiceUI data={data} />;
  }

  if (params.slug === "texas-llc") {
    return <TexasLLCServiceUI data={data} />;
  }

  if (params.slug === "payoneer-wallet") {
    return <WalletServiceUI data={data} />;
  }

  if (params.slug === "wise-wallet") {
    return <WiseServiceUI data={data} />;
  }

  if (params.slug === "stripe-setup") {
    return <StripeServiceUI data={data} />;
  }

  if (params.slug === "airwallex-wallet") {
    return <AirwallexServiceUI data={data} />;
  }

  if (params.slug === "bank-of-america") {
    return <BOAServiceUI data={data} />;
  }

  if (params.slug === "chase-bank") {
    return <ChaseBankServiceUI data={data} />;
  }

  // Extract price if it exists in tagline, e.g. "Digital Wallet Setup ($100)"
  const priceMatch = data.tagline.match(/\(\$([0-9,]+)\)/);
  const price = priceMatch ? priceMatch[1] : null;
  const cleanTagline = data.tagline.replace(/\s*\(\$[0-9,]+\)/, '');

  const whatsappMessage = `Hello Amazon Fast! I am interested in the ${data.title} service.`;

  return (
    <div className="relative font-sans bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen overflow-x-hidden selection:bg-[#ff6b35]/30">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#ff6b35]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 relative z-10">
        
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#ff6b35] transition-colors mb-12 text-sm font-medium uppercase tracking-widest">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </Link>

        {/* Modern Centered Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          
          <div className="inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-[#ff6b35]/20 to-transparent border border-[#ff6b35]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(255,107,53,0.1)] mb-8">
            <span className="text-[#ff6b35] text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={14} />
              {cleanTagline}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.1] mb-6 break-words">
            {data.title}
          </h1>
          
          <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto mb-10">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href={`https://wa.me/923142573033?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#ff6b35] to-[#f44b0e] text-white rounded-full font-bold text-base transition-all shadow-[0_5px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_10px_30px_rgba(255,107,53,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get Started Now
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Hero Showcase Image */}
        <div className="relative w-full max-w-6xl mx-auto aspect-[16/10] md:aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden group shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] mb-20 sm:mb-32 border border-white/10 bg-[#111]">
          {/* Subtle Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20 pointer-events-none opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/20 to-transparent z-20 pointer-events-none mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <Image 
            src={data.image}
            alt={data.title}
            fill
            className="object-cover object-center transition-transform duration-[2000ms] group-hover:scale-[1.03]"
            priority
            quality={100}
          />
          
          {/* Floating Trust Banner */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 w-[92%] sm:w-max bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 md:px-8 md:py-4 flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-12 shadow-2xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <ShieldCheck className="text-[#ff6b35] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-white/90 text-xs sm:text-sm font-semibold">Guaranteed Approval</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="text-[#ff6b35] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-white/90 text-xs sm:text-sm font-semibold">Fast Processing</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 hidden sm:flex">
              <Globe className="text-[#ff6b35] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-white/90 text-xs sm:text-sm font-semibold">Global Support</span>
            </div>
          </div>
        </div>

        {/* Features Bento Grid Section */}
        <div className="mt-16 sm:mt-24 mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">What&apos;s Included</h2>
          <p className="text-white/60 text-base sm:text-lg">Clear, simple steps to make your Amazon listings look professional and bring in more sales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.benefits.map((benefit: string, idx: number) => {
            const IconComponent = getBenefitIcon(benefit);
            
            return (
              <div 
                key={idx} 
                className={`p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#ff6b35]/50 transition-all duration-500 group flex flex-col justify-start relative overflow-hidden ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/5 group-hover:to-transparent transition-all duration-500 z-0"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="text-[#ff6b35]" size={28} strokeWidth={2} />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 relative z-10">{benefit}</h3>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base relative z-10">
                  {getBenefitDesc(benefit, data.title)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Consultation / Quote Card */}
        <div className="mt-20 sm:mt-32 mb-10 flex justify-center">
          <div className="relative w-full max-w-sm">
            
            {/* Outer Container mimicking the image */}
            <div className="bg-[#111111] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 group">
              
              {/* Top Badge Area */}
              <div className="bg-gradient-to-r from-[#ff6b35]/20 to-[#ff6b35]/10 py-2.5 flex items-center justify-center gap-1.5 border-b border-[#ff6b35]/20">
                <Sparkles size={14} className="text-[#ff6b35]" />
                <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase">Most Recommended</span>
              </div>

              {/* Inner Content */}
              <div className="p-6 sm:p-10 flex flex-col">
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
                
                {/* Plan Indicator */}
                <div className="flex flex-col mb-4">
                  <span className="text-3xl font-black text-white leading-tight tracking-tight">Custom Plan</span>
                  <span className="text-[#ff6b35] text-xs font-semibold mt-1">Tailored for your business</span>
                </div>
                
                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Perfect for sellers that need speed, structure, and a premium setup for success.
                </p>
                
                {/* Contact for Quote Button */}
                <Link 
                  href={`https://wa.me/923142573033?text=${encodeURIComponent(`Hi AmazonFast, I would like to get a quote and details for the ${data.title} service.`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-full font-bold text-sm transition-all shadow-[0_5px_15px_rgba(255,107,53,0.2)] hover:shadow-[0_10px_30px_rgba(255,107,53,0.4)] flex items-center justify-center gap-2 mb-8 relative overflow-hidden"
                >
                  {/* Button highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  Get Quote on WhatsApp
                </Link>

                {/* Features List */}
                <div className="flex flex-col gap-3.5">
                  {data.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6b35]/70 shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                      <span className="text-white/80 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
