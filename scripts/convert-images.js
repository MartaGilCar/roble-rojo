const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const exts = ['.jpg', '.jpeg', '.png'];

async function convertFile(file) {
  const input = path.join(publicDir, file);
  const name = path.basename(file, path.extname(file));

  const outAvif = path.join(publicDir, `${name}.avif`);
  const outWebp = path.join(publicDir, `${name}.webp`);

  try {
    const image = sharp(input);
    await image
      .avif({ quality: 60 })
      .toFile(outAvif);
    await image
      .webp({ quality: 75 })
      .toFile(outWebp);
    console.log(`Converted ${file} -> ${name}.avif, ${name}.webp`);
  } catch (err) {
    console.error(`Failed converting ${file}:`, err.message || err);
  }
}

async function run() {
  const files = fs.readdirSync(publicDir);
  const targets = files.filter((f) => exts.includes(path.extname(f).toLowerCase()));
  if (!targets.length) {
    console.log('No JPG/PNG files found in public/.');
    return;
  }

  for (const file of targets) {
    const name = path.basename(file, path.extname(file));
    const avifPath = path.join(publicDir, `${name}.avif`);
    const webpPath = path.join(publicDir, `${name}.webp`);
    if (fs.existsSync(avifPath) && fs.existsSync(webpPath)) {
      console.log(`Skipping ${file} (avif/webp already exist)`);
      continue;
    }
    await convertFile(file);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
