// type-only import — erased at build, so this doesn't create a runtime cycle
// back through case-study-list → case study components → this file.
import type { CaseStudyId } from "./case-study-list";

export type Testimonial = {
	quote: string;
	/**
	 * a contiguous span of `quote`, short enough to carry display type on the
	 * home page. the full quote still runs in the case study body.
	 */
	excerpt?: string;
	author: string;
	source?: string;
	caseStudyId?: CaseStudyId;
};

/**
 * client quotes, keyed by the case study they came out of — the case study
 * renders one, the home page pulls one out as the featured quote, and the text
 * itself lives in exactly one place.
 */
export const testimonials = {
	"arelia-shop-with-purpose": {
		quote:
			"Hrishav has been a pleasure to work with. I knew nothing about website design, and he made sure to walk me through every step of the process until I fully understood what was going on. He is professional, friendly, and able to adapt to your needs. Hrishav has a real talent for building websites, and I would highly recommend him to anybody in need of his services.",
		excerpt:
			"I knew nothing about website design, and he made sure to walk me through every step of the process until I fully understood what was going on. He is professional, friendly, and able to adapt to your needs.",
		author: "Freddy Zaccheo",
		source: "shoparelia.org",
		caseStudyId: "arelia-shop-with-purpose",
	},
	"alex-capece-photography": {
		quote:
			"hrishav was a delight to work with - extremely responsive, and was able to walk me through the more technical aspects without any issues. he even made a video tutorial to help me manage the back-end of things on my own! From first contacting me through my reddit post, to the final delivery of my portfolio site, hrishav was a consummate professional and helped me build exactky what i wanted. i would absolutely contact him again if i needed to build a different website or upgrade my current one.",
		excerpt:
			"hrishav was a delight to work with - extremely responsive, and was able to walk me through the more technical aspects without any issues. he even made a video tutorial to help me manage the back-end of things on my own!",
		author: "alex capece",
		source: "alexcapece.com",
		caseStudyId: "alex-capece-photography",
	},
} satisfies Partial<Record<CaseStudyId, Testimonial>>;

/** the quote rendered full-width on the home page — swap the key to change it */
export const featuredTestimonial = testimonials["arelia-shop-with-purpose"];
