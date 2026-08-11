'use client';

import { FormEvent, ReactNode, useState } from "react";
import Button from "@/components/Button";
import { profile } from "@/content/profile";

type ProjectType = "design" | "design-build" | "build";
type Status = "idle" | "sending" | "success";

type Fields = {
	name: string;
	email: string;
	projectType: ProjectType | undefined;
	brief: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const INITIAL_FIELDS: Fields = {
	name: "",
	email: "",
	projectType: undefined,
	brief: "",
};

const PROJECT_TYPES: Array<{ value: ProjectType; label: string }> = [
	{ value: "design", label: "design" },
	{ value: "design-build", label: "design + build" },
	{ value: "build", label: "build" },
];

const secondaryLinkStyles =
	"inline-flex items-center justify-center px-3 py-2 font-mono text-nav text-secondary border border-hairline-inner hover:border-body-text hover:text-body-text transition-all duration-120";

function fieldBorder(hasError: boolean) {
	return `w-full bg-transparent px-3 py-2 font-mono text-nav text-primary-text placeholder:text-label border focus:outline-none focus:border-body-text transition-all duration-120 ${
		hasError ? "border-validation" : "border-hairline-inner"
	}`;
}

function validate(fields: Fields): Errors {
	const errors: Errors = {};

	if (!fields.name.trim()) errors.name = "tell me what to call you";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = "that address looks incomplete";
	if (!fields.projectType) errors.projectType = "pick one so i know how to reply";
	if (!fields.brief.trim()) errors.brief = "a sentence or two is enough";

	return errors;
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
	return (
		<div className="flex flex-col gap-2">
			<p className="font-mono text-metadata text-label">{label}:</p>
			{children}
			{error && <p className="font-mono text-metadata text-validation">↳ {error}</p>}
		</div>
	);
}

export default function ContactForm() {
	const [fields, setFields] = useState<Fields>(INITIAL_FIELDS);
	const [errors, setErrors] = useState<Errors>({});
	const [status, setStatus] = useState<Status>("idle");
	const [reference, setReference] = useState("");
	const [sentTo, setSentTo] = useState("");

	const hasErrors = Object.keys(errors).length > 0;

	function updateField<K extends keyof Fields>(key: K, value: Fields[K]) {
		setFields((current) => ({ ...current, [key]: value }));
		setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const nextErrors = validate(fields);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;

		setStatus("sending");

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(fields),
			});

			if (!response.ok) throw new Error("send failed");

			const data: { reference: string } = await response.json();
			setReference(data.reference);
			setSentTo(fields.email.trim());
			setStatus("success");
		} catch {
			setErrors({ brief: "couldn't send that - try again or email me directly" });
			setStatus("idle");
		}
	}

	function reset() {
		setFields(INITIAL_FIELDS);
		setErrors({});
		setStatus("idle");
	}

	if (status === "success") {
		return (
			<div className="flex flex-col flex-1 justify-between px-12 py-16">
				<div className="flex flex-col gap-16">
					<p className="font-mono text-nav text-secondary">02 / sent</p>

					<div className="flex items-center gap-3">
						<div className="w-2 h-2 bg-accent" />
						<p className="font-sans text-heading-lg font-medium text-primary-text">brief received</p>
					</div>

					<p className="font-sans text-body text-body-text">
						i&apos;ll read it properly and reply from {profile.socials.email} within two working days.
						if it&apos;s urgent, email me directly and put &quot;urgent&quot; in the subject.
					</p>
				</div>

				<div className="flex flex-col">
					<div className="grid grid-cols-[120px_1fr] gap-4 py-3 border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">reference:</p>
						<p className="font-bold text-primary-text">{reference}</p>
					</div>
					<div className="grid grid-cols-[120px_1fr] gap-4 py-3 border-b border-hairline-inner font-mono text-metadata">
						<p className="text-label">copy sent to:</p>
						<p className="font-bold text-primary-text">{sentTo}</p>
					</div>
				</div>

				<div className="flex gap-4">
					<Button href="/work" variant="secondary">← back to work</Button>
					<Button type="button" variant="secondary" onClick={reset}>send another</Button>
				</div>
			</div>
		);
	}

	const mailtoHref = `mailto:${profile.socials.email}?subject=${encodeURIComponent("project brief")}&body=${encodeURIComponent(
		`name: ${fields.name}\nemail: ${fields.email}\nproject type: ${fields.projectType ?? ""}\n\n${fields.brief}`,
	)}`;

	return (
		<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 px-12 py-16">
			<p className="font-mono text-nav text-secondary">02 / or send a brief</p>

			<Field label="name" error={errors.name}>
				<input
					type="text"
					value={fields.name}
					onChange={(event) => updateField("name", event.target.value)}
					placeholder="-"
					className={fieldBorder(Boolean(errors.name))}
				/>
			</Field>

			<Field label="email" error={errors.email}>
				<input
					type="email"
					value={fields.email}
					onChange={(event) => updateField("email", event.target.value)}
					placeholder="-"
					className={fieldBorder(Boolean(errors.email))}
				/>
			</Field>

			<div className="flex flex-col gap-2">
				<p className="font-mono text-metadata text-label">project type:</p>

				<div className="flex gap-3">
					{PROJECT_TYPES.map((type) => {
						const isSelected = fields.projectType === type.value;

						return (
							<button
								key={type.value}
								type="button"
								onClick={() => updateField("projectType", type.value)}
								className={`px-3 py-2 border font-mono text-nav transition-all duration-120 ${
									isSelected
										? "border-accent text-accent"
										: errors.projectType
											? "border-validation text-body-text"
											: "border-hairline-inner text-secondary hover:border-body-text hover:text-body-text"
								}`}
							>
								{type.label}
							</button>
						);
					})}
				</div>

				{errors.projectType && <p className="font-mono text-metadata text-validation">↳ {errors.projectType}</p>}
			</div>

			<Field label="brief" error={errors.brief}>
				<textarea
					value={fields.brief}
					onChange={(event) => updateField("brief", event.target.value)}
					placeholder="-"
					rows={6}
					className={fieldBorder(Boolean(errors.brief))}
				/>
			</Field>

			<div className="flex flex-col gap-2">
				<div className="flex gap-4">
					<Button type="submit" disabled={status === "sending"} className={status === "sending" ? "opacity-60" : ""}>
						{status === "sending" ? (
							<>
								sending<span className="animate-cursor-blink">_</span>
							</>
						) : (
							"send"
						)}
					</Button>

					{hasErrors && (
						<a href={mailtoHref} className={secondaryLinkStyles}>
							email me instead
						</a>
					)}
				</div>

				{hasErrors && (
					<p className="font-mono text-metadata text-validation">
						↳ something went wrong sending this - nothing&apos;s lost
					</p>
				)}
			</div>
		</form>
	);
}
