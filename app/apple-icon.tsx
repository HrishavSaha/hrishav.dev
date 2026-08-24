import { ImageResponse } from "next/og";
import { colors, ogFonts } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// the same prompt mark as public/favicon*.png, at ios home-screen size
export default function AppleIcon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: 12,
					background: colors.surface,
					fontFamily: "JetBrains Mono",
					fontSize: 92,
					fontWeight: 700,
				}}
			>
				<span style={{ color: colors.accent }}>&gt;</span>
				<span style={{ color: colors.primary }}>_</span>
			</div>
		),
		{ ...size, fonts: ogFonts },
	);
}
