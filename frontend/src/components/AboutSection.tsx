import type { AboutSectionProps } from "../types";
import LinkButton from "./LinkButton";

function AboutSection({
	title,
	subtitle,
	description,
	imageUrl,
	imageAlt,
}: AboutSectionProps) {
	return (
		<div className="h-screen pt-0 flex items-center justify-center gap-10 px-10">
			<div className="flex-shrink-0">
				<img src={imageUrl} alt={imageAlt} className="w-full h-auto" />
			</div>

			<div className="max-w-lg">
				<h2 className="text-3xl font-bold mb-4">{title}</h2>
				<p className="text-lg mb-4">{subtitle}</p>
				<p className="mt-7">{description}</p>
				<div className="mt-10">
					<LinkButton variation="secondary" to="learn-more">
						Learn More
					</LinkButton>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
