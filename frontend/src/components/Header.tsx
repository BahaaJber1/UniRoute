import { NavLink } from "react-router";
import LinkButton from "./LinkButton";

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
						<LinkButton to="login">login</LinkButton>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
