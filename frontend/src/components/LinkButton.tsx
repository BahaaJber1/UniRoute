import { Link } from "react-router";
import type { LinkProps } from "../types";

function LinkButton({ children, to, variation = "primary" }: LinkProps) {
	const defaultStyle =
		"p-4 font-bold cursor-pointer rounded-4xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary duration-300";

	let linkStyle = variation;
	if (linkStyle === "primary") {
		linkStyle =
			"bg-accent-primary text-bg-primary hover:bg-accent-secondary hover:text-primary ";
	} else if (linkStyle === "secondary") {
		linkStyle =
			"outline-2 hover:outline-none hover:bg-bg-secondary hover:text-secondary";
	} else if (linkStyle === "danger") {
		linkStyle = "text-secondary bg-red-800 hover:bg-red-500 hover:text-primary";
	}

	return (
		<Link to={to} className={`${defaultStyle} ${linkStyle}`}>
			{children}
		</Link>
	);
}

export default LinkButton;
