interface OgImageOptions {
  eyebrow: string;
  title: string;
  description: string;
  footer?: string;
  chips?: readonly string[];
}

const SVG_WIDTH = 1200;
const SVG_HEIGHT = 630;

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const chunkLine = (line: string, maxChars: number) => {
  const words = line.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxChars) {
      current = next;
      continue;
    }

    if (current) {
      lines.push(current);
      current = word;
    } else {
      lines.push(word);
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines;
};

const wrapText = (text: string, maxChars: number, maxLines: number) => {
  const rawLines = text.split('\n');
  const wrapped = rawLines.flatMap((line) => chunkLine(line, maxChars));
  const trimmed = wrapped.slice(0, maxLines);

  if (wrapped.length > maxLines && trimmed.length > 0) {
    const lastLine = trimmed[trimmed.length - 1];
    trimmed[trimmed.length - 1] =
      lastLine.length > maxChars - 1 ? `${lastLine.slice(0, maxChars - 1)}...` : `${lastLine}...`;
  }

  return trimmed;
};

const renderTextBlock = (lines: string[], x: number, y: number, lineHeight: number, size: number, weight: number, fill: string) =>
  lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * lineHeight}" font-size="${size}" font-weight="${weight}" fill="${fill}">${escapeXml(line)}</text>`
    )
    .join('');

export const renderOgImage = ({
  eyebrow,
  title,
  description,
  footer = 'Beloved John Dev',
  chips = [],
}: OgImageOptions) => {
  const titleLines = wrapText(title, 28, 3);
  const descriptionLines = wrapText(description, 52, 3);
  const chipWidth = 170;
  const chipGap = 18;
  const chipStartX = 72;
  const chipY = 505;
  const chipMarkup = chips
    .slice(0, 3)
    .map((chip, index) => {
      const x = chipStartX + index * (chipWidth + chipGap);
      return `
        <rect x="${x}" y="${chipY}" width="${chipWidth}" height="44" rx="22" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" />
        <text x="${x + 18}" y="${chipY + 28}" font-size="18" font-weight="600" fill="#F8FAFC">${escapeXml(chip)}</text>
      `;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}" viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="120" y1="40" x2="1080" y2="590" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0F172A" />
      <stop offset="1" stop-color="#123B46" />
    </linearGradient>
    <linearGradient id="accent" x1="820" y1="120" x2="1110" y2="410" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2A9D8F" />
      <stop offset="1" stop-color="#F4A261" />
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1020 120) rotate(90) scale(280 340)">
      <stop stop-color="#2A9D8F" stop-opacity="0.28" />
      <stop offset="1" stop-color="#2A9D8F" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="url(#bg)" />
  <circle cx="1010" cy="120" r="270" fill="url(#glow)" />
  <circle cx="1045" cy="355" r="150" fill="url(#accent)" opacity="0.16" />
  <path d="M896 110C996 62 1120 86 1162 170C1198 244 1158 350 1085 400C1012 450 902 440 842 375C777 305 793 160 896 110Z" fill="url(#accent)" opacity="0.18" />

  <g opacity="0.08" stroke="#E2E8F0">
    <path d="M770 70H1140" />
    <path d="M770 130H1140" />
    <path d="M770 190H1140" />
    <path d="M770 250H1140" />
    <path d="M770 310H1140" />
    <path d="M770 370H1140" />
    <path d="M770 430H1140" />
    <path d="M770 490H1140" />
  </g>

  <rect x="72" y="64" width="250" height="42" rx="21" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" />
  <text x="96" y="91" font-size="18" font-weight="700" letter-spacing="1.5" fill="#F4A261">${escapeXml(eyebrow.toUpperCase())}</text>

  ${renderTextBlock(titleLines, 72, 188, 68, 58, 700, '#F8FAFC')}
  ${renderTextBlock(descriptionLines, 72, 392, 38, 26, 400, '#D5DEE8')}

  ${chipMarkup}

  <rect x="788" y="452" width="320" height="108" rx="28" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" />
  <text x="820" y="494" font-size="20" font-weight="600" fill="#F8FAFC">Independent Business Systems Developer</text>
  <text x="820" y="526" font-size="30" font-weight="700" fill="#FFFFFF">Beloved John Dev</text>
  <text x="820" y="552" font-size="18" font-weight="500" fill="#D5DEE8">${escapeXml(footer)}</text>
</svg>`;
};

export const createSvgResponse = (svg: string) =>
  new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });

export const createPngResponse = async (svg: string) => {
  const sharp = (await import('sharp')).default;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
