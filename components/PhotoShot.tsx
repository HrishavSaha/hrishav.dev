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
		<div className="flex gap-6">
			{shots.map((shot) => (
				<div
					key={shot.src}
					className="relative flex-1 max-w-[50%] border border-hairline"
					style={{ aspectRatio }}
				>
					<Image
						src={shot.src}
						alt={shot.alt}
						fill
						sizes={`${Math.round(50 / shots.length)}vw`}
						className="object-cover object-top-left"
					/>
				</div>
			))}
		</div>
	);
}
