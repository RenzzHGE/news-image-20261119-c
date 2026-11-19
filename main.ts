// news-image-20261119-c — deterministic entry builder.
// Copies the generated timeline image to /output/entry.png.
// No network access. Running it twice writes identical bytes.
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, 'entry.png');
const OUT_DIR = '/output';
const OUT = path.join(OUT_DIR, 'entry.png');

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.copyFileSync(SRC, OUT);
console.log(`wrote ${OUT}`);
