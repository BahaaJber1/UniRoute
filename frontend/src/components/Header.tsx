import { NavLink } from "react-router";
import LinkButton from "./LinkButton";

function Header() {
	return (
		<header className="py-5 bg-bg-secondary">
			<nav className="mx-15 flex items-center justify-between">
				<NavLink to="/">
					<img
						src="image.png"
						alt="UniRoute Logo"
						className="bg-cover w-40 h-12"
					/>
				</NavLink>
				<ul className="flex gap-9 items-center">
					<li>
						<NavLink to="page">page</NavLink>
					</li>

					<li>
						<NavLink to="page">page</NavLink>
					</li>

					<li>
						<NavLink to="page">page</NavLink>
					</li>

					<li>
						<LinkButton to="login">login</LinkButton>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
