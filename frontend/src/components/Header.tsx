import { NavLink } from "react-router";
import StyledLink from "./StyledLink";

function Header() {
	return (
		<header className="py-5 bg-bg-secondary sticky top-0">
			<nav className="mx-15 flex items-center justify-between">
				<NavLink to="/" className="text-3xl tracking-wide font-semibold">
					Uni<span className="font-thin">Route</span>
				</NavLink>
				<ul className="flex gap-20 items-center">
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
						<StyledLink to="login">login</StyledLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
