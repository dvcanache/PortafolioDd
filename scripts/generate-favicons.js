const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180
};

async function generateFavicons() {
  const inputSvg = fs.readFileSync(path.join(__dirname, '../public/disenosduran.svg'));
  
  // Extract the circular part of the logo for the favicon
  const favicon = await sharp(inputSvg)
    .extract({ left: 0, top: 0, width: 1080, height: 1080 }) // Extract the full logo area
    .toBuffer();

  // Generate PNG files
  for (const [filename, size] of Object.entries(sizes)) {
    const outputPath = path.join(__dirname, '../public', filename);
    await sharp(favicon)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFormat('png')
      .toFile(outputPath);
  }

  // Use the 32x32 PNG as favicon.ico
  fs.copyFileSync(
    path.join(__dirname, '../public/favicon-32x32.png'),
    path.join(__dirname, '../public/favicon.ico')
  );
}

generateFavicons().catch(console.error);
