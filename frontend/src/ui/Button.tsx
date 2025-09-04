import type { ButtonProps } from "../types";

function Button({ children, variation = "primary" }: ButtonProps) {
	let buttonStyle = variation;

	if (buttonStyle === "primary")
		buttonStyle =
			"border-blue-600 bg-blue-600 hover:bg-blue-400 hover:border-blue-400";
	else buttonStyle = "border-white hover:bg-blue-600 hover:border-blue-600";

	return (
		<button
			className={`mx-2 my-3 p-3 text-white cursor-pointer rounded-xl border-2  hover:text-black duration-300 ${buttonStyle}`}
		>
			{children}
		</button>
	);
}

export default Button;
