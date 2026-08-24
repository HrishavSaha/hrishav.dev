import type { CSSProperties } from "react";
import Image from "next/image";

type Shot = {
	src: string;
	alt: string;
};

type ProjectDuoShotProps = {
	laptop: Shot;
	mobile: Shot;
	aspectRatio?: string;
	laptopWidth?: string;
	/** ratios for the stacked layout below `lg`, one per shot, so neither is cropped */
	stackedLaptopAspect?: string;
	stackedMobileAspect?: string;
};

export default function ProjectDuoShot({
	laptop,
	mobile,
	aspectRatio = "16/7",
	laptopWidth = "65%",
	stackedLaptopAspect = "16/10",
	stackedMobileAspect = "9/19.5",
}: ProjectDuoShotProps) {
	const laptopWidthValue = parseFloat(laptopWidth);
	const laptopSizes = `(max-width: 1024px) 100vw, ${laptopWidthValue}vw`;
	const mobileSizes = `(max-width: 1024px) 100vw, ${100 - laptopWidthValue}vw`;

	// the side-by-side split only holds at desktop widths — below `lg` the two
	// shots stack, so the ratios come from the children instead of the container.
	return (
		<div
			className="relative w-full flex flex-col lg:flex-row lg:aspect-(--shot-aspect) border-b border-hairline"
			style={{ "--shot-aspect": aspectRatio } as CSSProperties}
		>
			<div
				className="relative w-full aspect-(--stacked-aspect) border-b border-hairline lg:w-(--laptop-width) lg:h-full lg:aspect-auto lg:border-b-0 lg:border-r"
				style={{ "--laptop-width": laptopWidth, "--stacked-aspect": stackedLaptopAspect } as CSSProperties}
			>
				<Image
					src={laptop.src}
					alt={laptop.alt}
					fill
					sizes={laptopSizes}
					loading='eager'
					className="object-contain object-top lg:object-cover"
				/>
			</div>

			<div
				className="relative w-full aspect-(--stacked-aspect) lg:flex-1 lg:h-full lg:aspect-auto"
				style={{ "--stacked-aspect": stackedMobileAspect } as CSSProperties}
			>
				<Image
					src={mobile.src}
					alt={mobile.alt}
					fill
					sizes={mobileSizes}
					loading='eager'
					className="object-contain object-top lg:object-cover"
				/>
			</div>
		</div>
	);
}
