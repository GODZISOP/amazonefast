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

// --- Stripe ---
updateFile('StripeServiceUI.tsx', [
  {
    search: /Get real mid-market exchange rates. Stop losing 3-5% on every transfer from standard banks./g,
    replace: "Instantly process customer payments worldwide with advanced local acquiring network routing."
  },
  {
    search: /Open Your Stripe Account <br\/> in 3 Easy Steps/g,
    replace: "Open Your Stripe Account <br/> in 3 Easy Steps"
  },
  {
    search: /Get Global Bank Details/g,
    replace: "Enable Payment Gateways"
  },
  {
    search: /Instantly receive US, UK, and EU bank accounts tailored specifically for your business profile./g,
    replace: "We configure your checkout forms and integrate Stripe securely into your Shopify, WooCommerce, or custom site."
  },
  {
    search: /Connect your new accounts directly to Seller Central and start receiving payouts without hidden fees./g,
    replace: "Monitor real-time payments, prevent chargebacks, and enjoy automated 2-day payouts to your bank."
  },
  {
    search: /Sync with Amazon/g,
    replace: "Start Processing Payments"
  }
]);

// --- Wise ---
updateFile('WiseServiceUI.tsx', [
  {
    search: /Get your Wise Account<\/span> set up correctly and securely to streamline your <span className="text-white\/70">global payments<\/span> — all in one platform./g,
    replace: 'Get your Wise Account</span> verified and fully compliant to streamline your <span className="text-white/70">global payments</span> — without any rejections.'
  },
  {
    search: /Get Global Bank Details/g,
    replace: "Get Multi-Currency Bank Details"
  },
  {
    search: /Instantly receive US, UK, and EU bank accounts tailored specifically for your business profile./g,
    replace: "Instantly receive USD, GBP, and EUR bank accounts tailored specifically for your business profile."
  }
]);

// --- Airwallex ---
updateFile('AirwallexServiceUI.tsx', [
  {
    search: /Get your Airwallex Account<\/span> set up correctly and securely to streamline your <span className="text-white\/70">global payments<\/span> — all in one platform./g,
    replace: 'Get your Airwallex Account</span> verified and fully compliant to streamline your <span className="text-white/70">global payments</span> — without any rejections.'
  },
  {
    search: /Get Global Bank Details/g,
    replace: "Get Global Bank Details"
  },
  {
    search: /Instantly receive US, UK, and EU bank accounts tailored specifically for your business profile./g,
    replace: "Receive 11+ local account details tailored specifically for your global business profile."
  }
]);
