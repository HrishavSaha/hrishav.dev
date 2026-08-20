type TestimonialProps = {
	quote: string;
	author: string;
	source?: string;
};

export default function Testimonial({ quote, author, source }: TestimonialProps) {
	return (
		<blockquote className="flex flex-col gap-2 pl-6 border-l-2 border-accent">
			<p className="font-sans text-body font-medium text-primary-text lowercase">&ldquo;{quote}&rdquo;</p>
			<footer className="font-mono text-metadata text-secondary lowercase">
				{author}{source ? ` · ${source}` : null}
			</footer>
		</blockquote>
	);
}
