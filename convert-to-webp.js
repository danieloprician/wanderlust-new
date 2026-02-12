const sharp = require('sharp');
const path = require('path');

const inputFile = 'public/images/gallery/wanderlust-cottage-living.jpg';
const outputFile = 'public/images/gallery/wanderlust-cottage-living.webp';

sharp(inputFile)
  .webp({ quality: 85 })
  .toFile(outputFile)
  .then(info => {
    console.log('✓ Conversion successful!');
    console.log(`Input: ${inputFile}`);
    console.log(`Output: ${outputFile}`);
    console.log(`Size: ${(info.size / 1024).toFixed(2)} KB`);
  })
  .catch(err => {
    console.error('Error converting image:', err);
  });
