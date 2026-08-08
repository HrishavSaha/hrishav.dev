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
};

export default function ProjectDuoShot({
	laptop,
	mobile,
	aspectRatio = "16/7",
	laptopWidth = "65%",
}: ProjectDuoShotProps) {
	const laptopWidthValue = parseFloat(laptopWidth);
	const laptopSizes = `${laptopWidthValue}vw`;
	const mobileSizes = `${100 - laptopWidthValue}vw`;

	return (
		<div
			className="relative w-full flex border-b border-hairline"
			style={{ aspectRatio }}
		>
			<div
				className="relative h-full border-r border-hairline"
				style={{ width: laptopWidth }}
			>
				<Image
					src={laptop.src}
					alt={laptop.alt}
					fill
					sizes={laptopSizes}
					loading='eager'
					className="object-cover object-top"
				/>
			</div>

			<div className="relative h-full flex-1">
				<Image
					src={mobile.src}
					alt={mobile.alt}
					fill
					sizes={mobileSizes}
					loading='eager'
					className="object-cover object-top"
				/>
			</div>
		</div>
	);
}
