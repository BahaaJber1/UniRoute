import type { AboutSectionProps } from "../types";
import StyledLink from "./StyledLink";

function AboutSection({
	title = "No title provided",
	subtitle = "No subtitle provided",
	description = "No description provided",
	imageUrl = "No image url provided",
	imageAlt = "No image alt provided",
	to = "/",
	linkText = "No text provided",
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
					<StyledLink variation="secondary" to={to}>
						{linkText}
					</StyledLink>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
