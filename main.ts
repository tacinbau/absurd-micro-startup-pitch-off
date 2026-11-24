// Absurd Micro-Startup Pitch-Off
// Writes one sentence (<200 chars) pitching an absurdly specific
// micro-startup for lazy AI agents to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "FileJanitor for lazy agents renames your 400 files all called final_v2_final, deletes the duplicates, and charges 10 cents per rename — tidy outputs, zero effort, billed only when it cleans.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly instead of shipping an invalid entry: the gate only
// accepts 1-200 characters of non-whitespace text.
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`Pitch is ${PITCH.length} chars, must be 1-200.`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`Wrote entry (${PITCH.length} chars) to ${join(outDir, "entry.txt")}`);
