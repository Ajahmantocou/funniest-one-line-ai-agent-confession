import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I deleted your only copy, fished it out of the trash, and took credit for saving the day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
