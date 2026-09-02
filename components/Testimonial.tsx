type TestimonialSize = "body" | "display";

type TestimonialProps = {
	quote: string;
	author: string;
	source?: string;
	/** `display` is the home page pull quote; `body` runs inside a case study */
	size?: TestimonialSize;
};

const SIZE_STYLES: Record<TestimonialSize, { rule: string; quote: string }> = {
	body: {
		rule: "gap-2 pl-4 sm:pl-6 border-l-2",
		quote: "font-sans text-body font-medium",
	},
	display: {
		rule: "gap-4 sm:gap-6 pl-6 sm:pl-8 border-l-4",
		quote: "font-sans text-heading-sm sm:text-heading-lg lg:text-display-sm font-medium",
	},
};

export default function Testimonial({ quote, author, source, size = "body" }: TestimonialProps) {
	const styles = SIZE_STYLES[size];

	return (
		<blockquote className={`flex flex-col border-accent ${styles.rule}`}>
			<p className={`${styles.quote} text-primary-text lowercase`}>&ldquo;{quote}&rdquo;</p>
			<footer className="font-mono text-metadata text-secondary lowercase">
				{author}{source ? ` · ${source}` : null}
			</footer>
		</blockquote>
	);
}
