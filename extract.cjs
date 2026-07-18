const fs = require('fs');

const files = [
  { name: 'Baby Care', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/949/content.md' },
  { name: 'Toddler Care', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/950/content.md' },
  { name: 'Pre School', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/951/content.md' },
  { name: 'OSC', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/952/content.md' }
];

files.forEach(f => {
  console.log(`\n=== ${f.name} ===`);
  const content = fs.readFileSync(f.path, 'utf8');
  const h2s = [...content.matchAll(/<h2 class="elementor-heading-title[^>]*>(.*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const ps = [...content.matchAll(/<p[^>]*>(.*?)<\/p>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  console.log('HEADINGS:');
  h2s.forEach(h => { if(h) console.log(h) });
  
  console.log('PARAGRAPHS:');
  ps.forEach(p => { if(p && !p.includes('Designed for ages')) console.log(p) });
});
