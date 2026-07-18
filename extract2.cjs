const fs = require('fs');

const files = [
  { id: 'baby-care', name: 'Baby Care', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/949/content.md' },
  { id: 'toddler-care', name: 'Toddler Care', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/950/content.md' },
  { id: 'pre-school', name: 'Pre School', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/951/content.md' },
  { id: 'after-school', name: 'OSC', path: '/Users/vp/.gemini/antigravity-ide/brain/c5e737d6-cbf3-4fd0-88c7-5d66001c3147/.system_generated/steps/952/content.md' }
];

const result = {};

files.forEach(f => {
  const content = fs.readFileSync(f.path, 'utf8');
  
  // Extract FAQs
  const faqs = [];
  const faqSections = content.split('<details');
  faqSections.shift(); // remove first part
  
  faqSections.forEach(sec => {
    try {
      const qStart = sec.indexOf('e-n-accordion-item-title-text">') + 'e-n-accordion-item-title-text">'.length;
      const qEnd = sec.indexOf('</div>', qStart);
      const q = sec.substring(qStart, qEnd).trim();
      
      const pStart = sec.indexOf('<p>', qEnd);
      const pEnd = sec.indexOf('</p>', pStart);
      let a = sec.substring(pStart + 3, pEnd).trim();
      a = a.replace(/<[^>]+>/g, ''); // strip HTML
      
      if (q && a) {
        faqs.push({ q, a });
      }
    } catch(e) {}
  });

  // Extract cards
  const cards = [];
  const headingsAndDesc = content.split('<h2 class="elementor-heading-title elementor-size-default">');
  headingsAndDesc.shift();
  
  headingsAndDesc.forEach(sec => {
    try {
      const titleEnd = sec.indexOf('</h2>');
      let title = sec.substring(0, titleEnd).trim();
      title = title.replace(/<[^>]+>/g, '');
      
      // Look for the next <p> after this <h2>
      const pStart = sec.indexOf('<p>', titleEnd);
      if (pStart === -1) return;
      
      // But only if it's before the next heading or section
      if (pStart > 2000) return; // arbitrary limit to avoid matching far away paragraphs
      
      const pEnd = sec.indexOf('</p>', pStart);
      let desc = sec.substring(pStart + 3, pEnd).trim();
      desc = desc.replace(/<[^>]+>/g, '');
      
      if (title && desc && !title.toLowerCase().includes('faq')) {
        cards.push({ title, desc });
      }
    } catch (e) {}
  });

  result[f.id] = { faqs, cards };
});

console.log(JSON.stringify(result, null, 2));
