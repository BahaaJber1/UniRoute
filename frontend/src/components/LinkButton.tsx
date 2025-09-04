import { Link } from "react-router";
import type { LinkProps } from "../types";

function LinkButton({
	children,
	to,
	variation = "primary",
	size = "md",
	className,
	...restProps
}: LinkProps) {
	const defaultStyle =
		"font-bold cursor-pointer rounded-4xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary duration-300";

	let sizeStyle;
	if (size === "sm") {
		sizeStyle = "px-5 py-3 text-sm";
	} else if (size === "md") {
		sizeStyle = "px-8 py-3 text-base";
	} else if (size === "lg") {
		sizeStyle = "px-12 py-4 text-lg";
	}

	let linkStyle;
	if (variation === "primary") {
		linkStyle =
			"bg-accent-primary text-bg-primary hover:bg-accent-secondary hover:text-primary ";
	} else if (variation === "secondary") {
		linkStyle =
			"outline-2 hover:outline-none hover:bg-bg-secondary hover:text-secondary";
	} else if (variation === "danger") {
		linkStyle = "text-secondary bg-red-800 hover:bg-red-500 hover:text-primary";
	}
	const combinedClassName = `${defaultStyle} ${sizeStyle}  ${linkStyle} ${
		className || ""
	}`.trim();

	return (
		<Link to={to} className={combinedClassName} {...restProps}>
			{children}
		</Link>
	);
}

export default LinkButton;
