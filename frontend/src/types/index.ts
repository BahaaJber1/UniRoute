type LinkVariation = "primary" | "secondary" | "danger";

type Size = "sm" | "md" | "lg";

export type LinkProps = {
	children: React.ReactNode;
	to: string;
	variation?: LinkVariation;
	size?: Size;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export type HeroSectionProps = {
	title: string;
	highlight: string;
	subtitle: string;
};

export type AboutSectionProps = {
	title: string;
	subtitle: string;
	description: string;
	imageUrl: string;
	imageAlt: string;
};
