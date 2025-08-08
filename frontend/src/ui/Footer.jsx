function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="absolute bottom-0">
			<p>All rights reserved © Bahaa Jber {year}</p>
		</div>
	);
}

export default Footer;
