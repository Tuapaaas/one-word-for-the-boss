// One Word for the Boss — make.fun entry.
// The entry is exactly one word describing the boss: "Omnipresent".
// He is somehow in every meeting, every thread and every decision at
// once — you never see him arrive, yet he was already there, watching,
// before you even sent the invite.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Omnipresent";

function main(): void {
  if (!/^\S{1,30}$/.test(WORD)) {
    throw new Error("entry must be exactly one word of 1-30 characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
