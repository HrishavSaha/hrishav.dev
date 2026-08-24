import type { ComponentType } from "react";
import AlexCapecePhotography, { metadata as alexCapecePhotographyMetadata } from "./case-studies/AlexCapecePhotography";
import AreliaShopWithPurpose, { metadata as areliaShopWithPurposeMetadata} from "./case-studies/ShopAreliaMarketplace";
import FernAndFlourCafe, { metadata as fernAndFlourCafeMetadata} from "./case-studies/FernAndFlourCafe";
import type { metadata as CaseStudyMetadata, CaseStudyProps } from "@/types/CaseStudyTypes";

export type CaseStudyEntry = {
	component: ComponentType<CaseStudyProps>;
	metadata: CaseStudyMetadata;
	/** card image for the homepage "selected work" grid */
	thumbnail: {
		src: string;
		alt: string;
	};
	year: string;
};

export const CaseStudyList = {
	'alex-capece-photography': {
		component: AlexCapecePhotography,
		metadata: alexCapecePhotographyMetadata,
		thumbnail: {
			src: '/images/AlexCapecePhotographyDesktop.png',
			alt: 'alex capece photography — desktop view',
		},
		year: '2026',
	},
	'arelia-shop-with-purpose': {
		component: AreliaShopWithPurpose,
		metadata: areliaShopWithPurposeMetadata,
		thumbnail: {
			src: '/images/AreliaShopWithPurposeDesktop.png',
			alt: 'arelia — desktop view',
		},
		year: '2026',
	},
	'fern-and-flour-cafe': {
		component: FernAndFlourCafe,
		metadata: fernAndFlourCafeMetadata,
		thumbnail: {
			src: '/images/FernAndFlourDesktop.png',
			alt: 'fern & flour café — desktop view',
		},
		year: '2026',
	},
} satisfies Record<string, CaseStudyEntry>;

export type CaseStudyId = keyof typeof CaseStudyList;

export const caseStudyIds = Object.keys(CaseStudyList) as Array<CaseStudyId>;

/**
 * the homepage "selected work" grid — add, remove or reorder ids here and the
 * grid reflows on its own. the column count lives in `app/page.tsx`.
 */
export const featuredCaseStudyIds: Array<CaseStudyId> = [
	'arelia-shop-with-purpose',
	'alex-capece-photography',
];
