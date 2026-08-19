import AlexCapecePhotography, { metadata as alexCapecePhotographyMetadata } from "./case-studies/AlexCapecePhotography";
import AreliaShopWithPurpose, { metadata as areliaShopWithPurposeMetadata} from "./case-studies/ShopAreliaMarketplace";

export const CaseStudyList = {
	'alex-capece-photography': {
		component: AlexCapecePhotography,
		metadata: alexCapecePhotographyMetadata,
	},
	'arelia-shop-with-purpose': {
		component: AreliaShopWithPurpose,
		metadata: areliaShopWithPurposeMetadata,
	}
}