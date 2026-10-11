import type { Font } from "satori";
import fs from "node:fs/promises";
import path from "node:path";

export type LoadFontOptions = Required<Omit<Font, "data" | "lang">>;

export const loadFont = async (font: LoadFontOptions): Promise<Font> => {
  const lowerName = font.name.toLowerCase();
  const fontPath = path.join(
    "node_modules",
    "@fontsource",
    lowerName,
    "files",
    `${lowerName}-latin-${font.weight}-${font.style}.woff`,
  );

  return {
    ...font,
    data: await fs.readFile(fontPath),
  };
};
