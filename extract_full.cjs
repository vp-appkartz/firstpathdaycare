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
  // They are in <details> tags or similar, but the previous script showed they are in e-n-accordion-item-title-text for Question,
  // and <div class="elementor-widget-text-editor">...<p> for Answer
  const faqs = [];
  const faqRegex = /<summary[^>]*>[\s\S]*?<div class="e-n-accordion-item-title-text">\s*(.*?)\s*<\/div>[\s\S]*?<\/summary>[\s\S]*?<div role="region"[^>]*>[\s\S]*?<div class="elementor-widget-text-editor"[^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  
  let match;
  while ((match = faqRegex.exec(content)) !== null) {
    faqs.push({
      q: match[1].replace(/<[^>]+>/g, '').trim(),
      a: match[2].replace(/<[^>]+>/g, '').trim()
    });
  }

  // Also extract cards, which are pairs of <h2> title and <p> desc inside image-box or just adjacent
  const cards = [];
  // The structure seems to be heading then text editor.
  // We can just extract all headings and their immediate following text editor paragraphs.
  const headingAndTextRegex = /<h2 class="elementor-heading-title[^>]*>(.*?)<\/h2>\s*<\/div>\s*<div class="elementor-element[^>]*elementor-widget-text-editor"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  
  while ((match = headingAndTextRegex.exec(content)) !== null) {
    const title = match[1].replace(/<[^>]+>/g, '').trim();
    if (title.toLowerCase().includes('faq')) continue;
    cards.push({
      title: title,
      desc: match[2].replace(/<[^>]+>/g, '').trim()
    });
  }

  result[f.id] = { faqs, cards };
});

console.log(JSON.stringify(result, null, 2));
