import type { StyledButtonProps } from "../types";

function StyledButton({
	children,
	type,
	size = "md",
	variation = "primary",
	className,
	...restProps
}: StyledButtonProps) {
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

	let variationStyle;
	if (variation === "primary") {
		variationStyle =
			"bg-accent-primary text-bg-primary hover:bg-accent-secondary hover:text-primary ";
	} else if (variation === "secondary") {
		variationStyle =
			"outline-2 hover:outline-none hover:bg-bg-secondary hover:text-secondary";
	} else if (variation === "danger") {
		variationStyle =
			"text-secondary bg-red-800 hover:bg-red-500 hover:text-primary";
	}
	const combinedClassName = `${defaultStyle} ${sizeStyle}  ${variationStyle} ${
		className || ""
	}`.trim();

	return (
		<button type={type} className={combinedClassName} {...restProps}>
			{children}
		</button>
	);
}

export default StyledButton;
