const fs = require('fs');

const files = [
  { id: 'baby-care', name: 'Baby Care', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/949/content.md' },
  { id: 'toddler-care', name: 'Toddler Care', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/950/content.md' },
  { id: 'pre-school', name: 'Pre School', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/951/content.md' },
  { id: 'after-school', name: 'OSC', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/952/content.md' }
];

files.forEach(f => {
  const content = fs.readFileSync(f.path, 'utf8');
  console.log(`\n\n=== ${f.name} ===`);
  const noHtml = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(noHtml.substring(0, 1000));
});
