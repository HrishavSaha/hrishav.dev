type EmailTemplateProps = {
	name: string;
	email: string;
	projectType: string;
	brief: string;
	reference: string;
};

const colors = {
	canvas: "#08080a",
	surface: "#0c0c0d",
	hairline: "#26262a",
	hairlineInner: "#1c1c20",
	label: "#6b6b70",
	secondary: "#9a9a9f",
	primaryText: "#f2f2f0",
	bodyText: "#c9c9cc",
	accent: "#4fd18b",
};

const monoStack = "'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";

function Row({ label, value }: { label: string; value: string }) {
	return (
		<tr>
			<td
				style={{
					padding: "12px 0",
					borderBottom: `1px solid ${colors.hairlineInner}`,
					color: colors.label,
					fontFamily: monoStack,
					fontSize: "13px",
					verticalAlign: "top",
					width: "120px",
				}}
			>
				{label}:
			</td>
			<td
				style={{
					padding: "12px 0",
					borderBottom: `1px solid ${colors.hairlineInner}`,
					color: colors.primaryText,
					fontFamily: monoStack,
					fontSize: "13px",
					fontWeight: 700,
				}}
			>
				{value}
			</td>
		</tr>
	);
}

export default function EmailTemplate({ name, email, projectType, brief, reference }: EmailTemplateProps) {
	return (
		<div style={{ backgroundColor: colors.canvas, padding: "40px 20px" }}>
			<table
				role="presentation"
				width="100%"
				cellPadding={0}
				cellSpacing={0}
				style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: colors.surface, border: `1px solid ${colors.hairline}` }}
			>
				<tbody>
					<tr>
						<td style={{ padding: "32px" }}>
							<p style={{ margin: "0 0 24px", fontFamily: monoStack, fontSize: "13px", color: colors.secondary }}>
								02 / new brief
							</p>

							<table role="presentation" cellPadding={0} cellSpacing={0} style={{ marginBottom: "16px" }}>
								<tbody>
									<tr>
										<td valign="middle" style={{ paddingRight: "10px" }}>
											<div style={{ width: "8px", height: "8px", backgroundColor: colors.accent, fontSize: 0, lineHeight: 0 }}>
												&nbsp;
											</div>
										</td>
										<td valign="middle">
											<span style={{ fontFamily: monoStack, fontSize: "20px", fontWeight: 500, color: colors.primaryText }}>
												{name} wants to work with you
											</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ marginTop: "8px" }}>
								<tbody>
									<Row label="name" value={name} />
									<Row label="email" value={email} />
									<Row label="project type" value={projectType} />
									<Row label="reference" value={reference} />
								</tbody>
							</table>

							<p style={{ margin: "24px 0 8px", fontFamily: monoStack, fontSize: "13px", color: colors.label }}>brief:</p>
							<p
								style={{
									margin: 0,
									padding: "16px",
									border: `1px solid ${colors.hairlineInner}`,
									fontFamily: monoStack,
									fontSize: "14px",
									lineHeight: 1.6,
									color: colors.bodyText,
									whiteSpace: "pre-wrap",
								}}
							>
								{brief}
							</p>

							<p style={{ margin: "32px 0 0", fontFamily: monoStack, fontSize: "12px", color: colors.label }}>
								sent from the contact form at hrishav.dev
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
