import fs from 'fs';

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/text-5xl md:text-7xl/g, 'text-4xl sm:text-5xl md:text-7xl');
  content = content.replace(/text-5xl md:text-6xl lg:text-\[5\.5rem\]/g, 'text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem]');
  
  content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl sm:text-4xl md:text-5xl');
  content = content.replace(/text-3xl md:text-5xl/g, 'text-3xl sm:text-4xl md:text-5xl');

  content = content.replace(/grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-\[400px\]/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[400px]');
  
  content = content.replace(/fill(\s+)className=/g, 'fill sizes="(max-width: 768px) 100vw, 50vw"$1className=');
  content = content.replace(/fill(\s+)priority/g, 'fill sizes="(max-width: 768px) 100vw, 50vw"$1priority');
  
  fs.writeFileSync(filePath, content);
}

fixFile('src/components/services/AirwallexServiceUI.tsx');
fixFile('src/components/services/WiseServiceUI.tsx');
fixFile('src/components/services/StripeServiceUI.tsx');
fixFile('src/components/services/WalletServiceUI.tsx');

console.log("Responsive and sizes fixes applied");
