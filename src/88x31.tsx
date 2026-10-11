/** @jsxRuntime automatic */
/** @jsxImportSource satori/jsx */

import satori from "satori";
import type { SatoriOptions } from "satori";
import { loadFont } from "./font";
import { getLogoSvg } from "./logo";
import sharp from "sharp";
import fs from "node:fs/promises";

const encoder = new TextEncoder();

const options = {
  width: 88,
  height: 31,
  fonts: [
    await loadFont({
      name: "Inter",
      weight: 400,
      style: "normal",
    }),
    await loadFont({
      name: "Inter",
      weight: 700,
      style: "normal",
    }),
  ],
} satisfies SatoriOptions;

export const createBanner = async (name: string) => {
  const svg = await satori(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "Inter, sans-serif",
        fontSize: "8px",
        color: "#bbb",
        backgroundColor: "#111",
      }}
    >
      <div>{getLogoSvg(name)}</div>
      <div>{name}</div>
    </div>,
    options,
  );

  await fs.mkdir("dist", { recursive: true });
  await sharp(encoder.encode(svg)).toFile(`dist/${name}.png`);
};
