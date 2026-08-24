import Image from "next/image";

type Shot = {
	src: string;
	alt: string;
};

type PhotoShotProps = {
	images: Record<string, Shot>;
	aspectRatio?: string;
};

export default function PhotoShot({ images, aspectRatio = "1/1" }: PhotoShotProps) {
	const shots = Object.values(images);

	return (
		<div className="flex flex-col sm:flex-row gap-6">
			{shots.map((shot) => (
				<div
					key={shot.src}
					className="relative w-full sm:flex-1 sm:max-w-[50%] border border-hairline"
					style={{ aspectRatio }}
				>
					<Image
						src={shot.src}
						alt={shot.alt}
						fill
						sizes={`(max-width: 640px) 100vw, ${Math.round(50 / shots.length)}vw`}
						className="object-cover object-top-left"
					/>
				</div>
			))}
		</div>
	);
}
