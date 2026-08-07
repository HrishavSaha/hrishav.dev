import Image from "next/image";

type ProjectShotProps = {
	src: string;
	alt: string;
	aspectRatio?: string;
	preload?: boolean;
};

export default function ProjectShot({
	src,
	alt,
	aspectRatio = "16/9",
	preload = false,
}: ProjectShotProps) {
	return (
		<div
			className="relative w-full border-b border-hairline"
			style={{ aspectRatio }}
		>
			<Image
				src={src}
				alt={alt}
				fill
				sizes="100vw"
				preload={preload}
				className="object-cover"
			/>
		</div>
	);
}
