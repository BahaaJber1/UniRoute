import LinkButton from "./LinkButton";
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
				<LinkButton to="login">Get started</LinkButton>
				<LinkButton to="learn-more" variation="secondary">
					Learn more
				</LinkButton>
			</div>
		</div>
	);
}

export default HeroSection;
