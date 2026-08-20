import AlexCapecePhotography, { metadata as alexCapecePhotographyMetadata } from "./case-studies/AlexCapecePhotography";
import AreliaShopWithPurpose, { metadata as areliaShopWithPurposeMetadata} from "./case-studies/ShopAreliaMarketplace";
import FernAndFlourCafe, { metadata as fernAndFlourCafeMetadata} from "./case-studies/FernAndFlourCafe";

export const CaseStudyList = {
	'alex-capece-photography': {
		component: AlexCapecePhotography,
		metadata: alexCapecePhotographyMetadata,
	},
	'arelia-shop-with-purpose': {
		component: AreliaShopWithPurpose,
		metadata: areliaShopWithPurposeMetadata,
	},
	'fern-and-flour-cafe': {
		component: FernAndFlourCafe,
		metadata: fernAndFlourCafeMetadata,
	}
}