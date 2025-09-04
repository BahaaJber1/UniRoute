function ErrorMessage({ children }) {
	return (
		<div className="text-red-600 text-sm ml-3 " role="alert">
			{children}
		</div>
	);
}

export default ErrorMessage;
