import { copyFileSync, statSync } from "node:fs";
import sharp from "sharp";

const base = await sharp("public/images/gmaps-hero.jpg")
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "right top" })
  .toBuffer();

const svg = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0.15">
      <stop offset="0%" stop-color="#1a1a1a" stop-opacity="0.80"/>
      <stop offset="48%" stop-color="#1a1a1a" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="#1a1a1a" stop-opacity="0.10"/>
    </linearGradient>
    <linearGradient id="b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a1a1a" stop-opacity="0.18"/>
      <stop offset="55%" stop-color="#1a1a1a" stop-opacity="0"/>
      <stop offset="100%" stop-color="#1a1a1a" stop-opacity="0.50"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#b)"/>
  <text x="72" y="412" fill="#d4bc8e" font-size="17" font-family="Georgia, Times New Roman, serif" letter-spacing="7">MARYLEBONE  ·  LONDON</text>
  <text x="68" y="508" fill="#faf7f2" font-size="78" font-family="Georgia, Times New Roman, serif">L'Angolo Bianco</text>
  <rect x="72" y="528" width="112" height="1" fill="#c4a574"/>
  <text x="72" y="572" fill="#faf7f2" font-size="26" font-style="italic" font-family="Georgia, Times New Roman, serif">Home made pasta. Crawford Street.</text>
</svg>`);

await sharp(base)
  .composite([{ input: svg, top: 0, left: 0 }])
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile("app/opengraph-image.jpg");

copyFileSync("app/opengraph-image.jpg", "app/twitter-image.jpg");
copyFileSync("app/opengraph-image.jpg", "public/og.jpg");
console.log("bytes", statSync("app/opengraph-image.jpg").size);
