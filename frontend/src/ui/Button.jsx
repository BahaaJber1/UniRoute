function Button({ children }) {
	return (
		<button className="mx-2 text-white my-3 p-3 bg-[var(--clr-primary)] rounded-xl hover:bg-[var(--clr-secondary)] hover:text-[var(--clr-primary)] duration-300">
			{children}
		</button>
	);
}

export default Button;
