import fs from 'fs';
import path from 'path';

const servicesDir = path.join(process.cwd(), 'src', 'components', 'services');

const updateFile = (filename, replacements) => {
  const filePath = path.join(servicesDir, filename);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.search, r.replace);
  }
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filename}`);
};

// --- Airwallex ---
updateFile('AirwallexServiceUI.tsx', [
  {
    search: /Set up your verified Airwallex business account for seamless Amazon payouts, zero international fees, and virtual corporate cards./g,
    replace: "Create your Airwallex global business account for seamless international payments, multi-currency management, and unlimited virtual corporate cards."
  },
  {
    search: /Seamless E-Commerce/g,
    replace: "Multi-Currency Mastery"
  },
  {
    search: /Streamline Global <br\/> Commerce./g,
    replace: "Global Accounts <br/> in Minutes."
  },
  {
    search: /Eliminate unnecessary currency conversion fees. Keep your profits high while paying suppliers across the globe instantly./g,
    replace: "Open local accounts in 11+ currencies instantly. Receive Amazon payouts without forced conversions and pay suppliers in their native currency."
  },
  {
    search: /Zero Hidden Fees/g,
    replace: "Market-Leading FX Rates"
  },
  {
    search: /Save up to 3% on foreign exchange fees when paying your global suppliers or receiving Amazon payouts./g,
    replace: "Save significantly on foreign exchange fees. Airwallex offers interbank rates with a minimal, transparent markup."
  },
  {
    search: /<span className="font-bold text-xl">0%<\/span>/g,
    replace: '<span className="font-bold text-xl">11+</span>'
  },
  {
    search: /<h3 className="text-xl font-bold mb-3 text-white relative z-10">0%<\/h3>/g,
    replace: '<h3 className="text-xl font-bold mb-3 text-white relative z-10">Global Accounts</h3>'
  },
  {
    search: /International transfer margin/g,
    replace: "Local account details in USD, EUR, GBP, HKD, and more."
  },
  {
    search: /Virtual Cards instantly/g,
    replace: "Unlimited Borderless Cards"
  },
  {
    search: /Generate Visa company cards instantly to manage ad spend securely across different platforms./g,
    replace: "Create unlimited virtual Visa cards to pay for inventory, software, and ads with zero international transaction fees."
  },
  {
    search: /<h3 className="text-xl font-bold mb-3">Unlimited<\/h3>\s*<p className="text-white\/50 text-sm leading-relaxed">\s*Virtual card issuance\s*<\/p>/g,
    replace: '<h3 className="text-xl font-bold mb-3">Xero Integration</h3>\n              <p className="text-white/50 text-sm leading-relaxed">\n                Seamlessly sync your multi-currency transactions directly with Xero and QuickBooks for effortless bookkeeping.\n              </p>'
  }
]);

// --- Wise ---
updateFile('WiseServiceUI.tsx', [
  {
    search: /Set up your verified Wise business account for seamless Amazon payouts, zero international fees, and virtual corporate cards./g,
    replace: "Get your Wise business account set up correctly for Amazon to receive funds with real exchange rates and zero hidden fees."
  },
  {
    search: /Seamless E-Commerce/g,
    replace: "Real Exchange Rates"
  },
  {
    search: /Streamline Global <br\/> Commerce./g,
    replace: "Cheaper Global <br/> Transfers."
  },
  {
    search: /Eliminate unnecessary currency conversion fees. Keep your profits high while paying suppliers across the globe instantly./g,
    replace: "Stop paying hidden bank markups. Wise uses the mid-market exchange rate, saving you thousands on Amazon payouts and supplier payments."
  },
  {
    search: /Zero Hidden Fees/g,
    replace: "Mid-Market Rate"
  },
  {
    search: /Save up to 3% on foreign exchange fees when paying your global suppliers or receiving Amazon payouts./g,
    replace: "Always get the real exchange rate you see on Google. No inflated margins, just a small transparent fee."
  },
  {
    search: /<span className="font-bold text-xl">0%<\/span>/g,
    replace: '<span className="font-bold text-xl">50%</span>'
  },
  {
    search: /<h3 className="text-xl font-bold mb-3 text-white relative z-10">0%<\/h3>/g,
    replace: '<h3 className="text-xl font-bold mb-3 text-white relative z-10">Cheaper Fees</h3>'
  },
  {
    search: /International transfer margin/g,
    replace: "Up to 6x cheaper than old-school banks."
  },
  {
    search: /Virtual Cards instantly/g,
    replace: "Local Bank Details"
  },
  {
    search: /Generate Visa company cards instantly to manage ad spend securely across different platforms./g,
    replace: "Get local account numbers and sort codes for 10+ currencies to receive money like a local in the US, UK, EU, and more."
  },
  {
    search: /<h3 className="text-xl font-bold mb-3">Unlimited<\/h3>\s*<p className="text-white\/50 text-sm leading-relaxed">\s*Virtual card issuance\s*<\/p>/g,
    replace: '<h3 className="text-xl font-bold mb-3">Batch Payments</h3>\n              <p className="text-white/50 text-sm leading-relaxed">\n                Pay up to 1,000 suppliers, employees, or contractors at once with a single click.\n              </p>'
  }
]);

// --- Stripe ---
updateFile('StripeServiceUI.tsx', [
  {
    search: /Set up your verified Stripe business account for seamless Amazon payouts, zero international fees, and virtual corporate cards./g,
    replace: "Professional Stripe account setup to process global payments, manage cash flow, and integrate flawlessly with your e-commerce ecosystem."
  },
  {
    search: /Seamless E-Commerce/g,
    replace: "Accept Payments Anywhere"
  },
  {
    search: /Streamline Global <br\/> Commerce./g,
    replace: "The Gold Standard <br/> of Payments."
  },
  {
    search: /Eliminate unnecessary currency conversion fees. Keep your profits high while paying suppliers across the globe instantly./g,
    replace: "Process credit cards, Apple Pay, and Google Pay worldwide. We help you establish a fully compliant Stripe account for your store."
  },
  {
    search: /Zero Hidden Fees/g,
    replace: "Global Processing"
  },
  {
    search: /Save up to 3% on foreign exchange fees when paying your global suppliers or receiving Amazon payouts./g,
    replace: "Accept 135+ currencies and dozens of payment methods natively within your custom checkout flows."
  },
  {
    search: /<span className="font-bold text-xl">0%<\/span>/g,
    replace: '<span className="font-bold text-xl">#1</span>'
  },
  {
    search: /<h3 className="text-xl font-bold mb-3 text-white relative z-10">0%<\/h3>/g,
    replace: '<h3 className="text-xl font-bold mb-3 text-white relative z-10">Stripe Radar</h3>'
  },
  {
    search: /International transfer margin/g,
    replace: "Advanced machine learning to block fraudulent transactions."
  },
  {
    search: /Virtual Cards instantly/g,
    replace: "Stripe Corporate Card"
  },
  {
    search: /Generate Visa company cards instantly to manage ad spend securely across different platforms./g,
    replace: "Spend directly from your Stripe balance without waiting for bank payouts to clear."
  },
  {
    search: /<h3 className="text-xl font-bold mb-3">Unlimited<\/h3>\s*<p className="text-white\/50 text-sm leading-relaxed">\s*Virtual card issuance\s*<\/p>/g,
    replace: '<h3 className="text-xl font-bold mb-3">Fast Payouts</h3>\n              <p className="text-white/50 text-sm leading-relaxed">\n                Enjoy unified, reliable 2-day rolling payouts to your connected bank account.\n              </p>'
  }
]);
