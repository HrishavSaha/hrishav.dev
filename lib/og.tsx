import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** shared chrome for every generated og card, in the site's own palette */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export const colors = {
	surface: "#0c0c0d",
	hairline: "#26262a",
	label: "#6b6b70",
	secondary: "#9a9a9f",
	primary: "#f2f2f0",
	accent: "#4fd18b",
};

// fonts don't depend on request data, so they're read once per module load
const [regular, bold] = await Promise.all([
	readFile(join(process.cwd(), "assets/JetBrainsMono-Regular.ttf")),
	readFile(join(process.cwd(), "assets/JetBrainsMono-Bold.ttf")),
]);

export const ogFonts = [
	{ name: "JetBrains Mono", data: regular, style: "normal" as const, weight: 400 as const },
	{ name: "JetBrains Mono", data: bold, style: "normal" as const, weight: 700 as const },
];

export const ogImageOptions = { ...OG_SIZE, fonts: ogFonts };
