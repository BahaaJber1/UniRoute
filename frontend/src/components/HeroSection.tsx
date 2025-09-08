import StyledLink from "./StyledLink";
import type { HeroSectionProps } from "../types";

function HeroSection({ title, highlight, subtitle }: HeroSectionProps) {
	return (
		<div className="h-screen bg-bg-primary text-center flex flex-col justify-center">
			<div>
				<h1 className="text-9xl">
					{title}
					<span className="text-accent-primary font-bold">{highlight}</span>
				</h1>
				<p className="text-[1.2rem] mt-10">{subtitle}</p>
			</div>

			<div className="flex justify-center items-center gap-10 mt-15">
				<StyledLink to="login">Get started</StyledLink>
				<StyledLink to="learn-more" variation="secondary">
					Learn more
				</StyledLink>
			</div>
		</div>
	);
}

export default HeroSection;
