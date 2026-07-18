const fs = require('fs');
const path = require('path');

const usedImages = [
  'DSC06038-opt.jpg',
  'DSC06042-opt.jpg',
  'DSC06066-opt.jpg',
  'DSC06070-opt.jpg',
  'story_animation_1-1.png',
  'story_animation_2-1.png',
  'story_animation_3-1.png',
  'story_animation_4.png',
  'story_animation_5-2.png',
  'Banner_one.jpeg',
  'Banner_two.jpg',
  'Banner_three.jpeg',
  'Graphic.png',
  'OBJECTS.png',
  'FPDC-PNG-1024x412.png',
  'DSC06038.jpg',
  'DSC06039.jpg',
  'DSC06042.jpg',
  'DSC06066.jpg',
  'DSC06068.jpg',
  'DSC06070.jpg',
  'DSC06071.jpg',
  'DSC06075.jpg',
  'DSC06080.jpg',
  'DSC06090.jpg',
  'DSC06101.jpg',
  'DSC06109.jpg',
  'DSC06116.jpg',
  'DSC06119.jpg',
  'DSC06124.jpg',
  'DSC06139.jpg'
];

const mediaDir = path.join(__dirname, 'public', 'media');

fs.readdir(mediaDir, (err, files) => {
  if (err) throw err;
  
  let deletedCount = 0;
  files.forEach(file => {
    if (!usedImages.includes(file)) {
      fs.unlinkSync(path.join(mediaDir, file));
      deletedCount++;
    }
  });
  console.log(`Deleted ${deletedCount} unused images.`);
});
