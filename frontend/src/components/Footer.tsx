function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="p-5 bg-bg-primary">
			<p>All rights reserved © Bahaa Jber {year}</p>
		</footer>
	);
}

export default Footer;
