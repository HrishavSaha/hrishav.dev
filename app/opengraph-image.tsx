import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { colors, OG_CONTENT_TYPE, OG_SIZE, ogImageOptions } from "@/lib/og";

export const alt = `${site.name} - ${site.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					background: colors.surface,
					fontFamily: "JetBrains Mono",
					padding: 64,
				}}
			>
				<div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
					<div style={{ display: "flex", color: colors.primary }}>
						hrishav<span style={{ color: colors.accent }}>.dev</span>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: 12, color: colors.secondary }}>
						<div style={{ width: 14, height: 14, background: profile.isAvailable ? colors.accent : colors.label }} />
						{profile.availabilityStatus}
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
					<div style={{ display: "flex", fontSize: 22, color: colors.label }}>01 / index</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							fontSize: 62,
							fontWeight: 700,
							color: colors.primary,
							lineHeight: 1.15,
						}}
					>
						<div style={{ display: "flex" }}>i design and build</div>
						<div style={{ display: "flex" }}>
							products end-to-end<span style={{ color: colors.accent }}>_</span>
						</div>
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ display: "flex", width: "100%", height: 1, background: colors.hairline }} />
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							paddingTop: 24,
							fontSize: 22,
							color: colors.secondary,
						}}
					>
						<div style={{ display: "flex" }}>{profile.role}</div>
						<div style={{ display: "flex" }}>{profile.stack.join(" · ")}</div>
						<div style={{ display: "flex" }}>{profile.based}</div>
					</div>
				</div>
			</div>
		),
		ogImageOptions,
	);
}
