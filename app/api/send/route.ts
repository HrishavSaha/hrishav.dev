import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { profile } from "@/content/profile";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// hrishav.dev is verified in Resend for sending only — it has no inbox, so nothing
// ever lands at this address. Delivery is the `to`/`cc`, replies are the `replyTo`.
const FROM = "Hrishav Saha <briefs@hrishav.dev>";

function makeReference() {
	const now = new Date();
	const yy = String(now.getFullYear()).slice(-2);
	const mm = String(now.getMonth() + 1).padStart(2, "0");
	const id = crypto.randomUUID().replace(/-/g, "").slice(0, 4);
	return `brief-${yy}${mm}-${id}`;
}

export async function POST(request: Request) {
	const body = await request.json().catch(() => null);

	if (!body || typeof body !== "object") {
		return NextResponse.json({ error: "invalid request body" }, { status: 400 });
	}

	const { name, email, projectType, brief } = body as Record<string, unknown>;

	if (typeof name !== "string" || !name.trim()) {
		return NextResponse.json({ error: "name is required" }, { status: 400 });
	}
	if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
		return NextResponse.json({ error: "a valid email is required" }, { status: 400 });
	}
	if (typeof projectType !== "string" || !projectType.trim()) {
		return NextResponse.json({ error: "project type is required" }, { status: 400 });
	}
	if (typeof brief !== "string" || !brief.trim()) {
		return NextResponse.json({ error: "brief is required" }, { status: 400 });
	}

	const reference = makeReference();

	const { error } = await resend.emails.send({
		from: FROM,
		to: profile.socials.email,
		cc: email.trim(),
		// Both recipients see the same Reply-To. Listing both keeps a reply from either
		// side reaching the other, since briefs@hrishav.dev cannot receive mail.
		replyTo: [email.trim(), profile.socials.email],
		subject: `project brief — ${name.trim()} (${reference})`,
		react: EmailTemplate({
			name: name.trim(),
			email: email.trim(),
			projectType: projectType.trim(),
			brief: brief.trim(),
			reference,
		}),
	});

	if (error) {
		return NextResponse.json({ error: "failed to send email" }, { status: 502 });
	}

	return NextResponse.json({ reference });
}
