import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import { ABOUT_CONTENT } from "../constants/homeData";
import { HERO_CONTENT } from "../constants/homeData";
import { usePageTitle } from "../hooks/usePageTitle";

function Home() {
	usePageTitle("Home");

	return (
		<div className="bg-bg-primary">
			<HeroSection
				title={HERO_CONTENT.title}
				highlight={HERO_CONTENT.highlight}
				subtitle={HERO_CONTENT.subtitle}
			/>
			<AboutSection
				title={ABOUT_CONTENT.title}
				subtitle={ABOUT_CONTENT.subtitle}
				description={ABOUT_CONTENT.description}
				imageUrl={ABOUT_CONTENT.imageUrl}
				imageAlt={ABOUT_CONTENT.imageAlt}
				to={ABOUT_CONTENT.to}
				linkText={ABOUT_CONTENT.linkText}
			/>
		</div>
	);
}

export default Home;
