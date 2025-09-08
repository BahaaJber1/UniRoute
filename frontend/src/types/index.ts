import { z } from "zod";

type Variation = "primary" | "secondary" | "danger";

type Size = "sm" | "md" | "lg";

export type StyledLinkProps = {
	children: React.ReactNode;
	to: string;
	variation?: Variation;
	size?: Size;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export type StyledButtonProps = {
	children: React.ReactNode;
	type: string;
	variation?: Variation;
	size?: Size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type HeroSectionProps = {
	title?: string;
	highlight?: string;
	subtitle?: string;
};

export type AboutSectionProps = {
	title?: string;
	subtitle?: string;
	description?: string;
	imageUrl?: string;
	imageAlt?: string;
	to?: string;
	linkText?: string;
};

export const formSchema = z
	.object({
		firstName: z
			.string()
			.min(3, "First name must be at least 4 characters")
			.regex(/^[a-zA-Z]+$/, "First name must contain only letters"),
		lastName: z
			.string()
			.min(3, "First name must be at least 4 characters")
			.regex(/^[a-zA-z]+$/, "Last name must contain only letters"),
		studentNumber: z
			.string()
			.length(12, "Student number must be 12 digits")
			.regex(/^[0-9]+$/, "Student number must contain only numbers"),
		password: z.string().min(8, "Password must be at least 8 characters"),
		confirmPassword: z
			.string()
			.min(8, "Confirm password must be at least 8 characters"),
		gender: z.enum(["male", "female"]),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export type formFields = z.infer<typeof formSchema>;
