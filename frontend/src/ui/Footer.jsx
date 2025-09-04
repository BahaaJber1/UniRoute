function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="my-5 py-10 bg-blue-200 text-center">
			<p>All rights reserved © Bahaa Jber {year}</p>
		</footer>
	);
}

export default Footer;
