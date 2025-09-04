type LinkVariation = "primary" | "secondary" | "danger";

type Size = "sm" | "md" | "lg";

export type LinkProps = {
	children: React.ReactNode;
	to: string;
	variation?: LinkVariation;
	size?: Size;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
