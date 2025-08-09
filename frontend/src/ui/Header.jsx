import { NavLink } from "react-router";

function Header() {
	return (
		<header className="p-8 bg-[#000000bd] text-white opacity-80">
			<nav className="mx-15 flex justify-between">
				<NavLink to="/">
					<img src="image.png" alt="UniRoute Logo" className="bg-cover w-40 h-12"/>
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
						<NavLink
							to="login"
							className="py-4 px-8 rounded-4xl  bg-[var(--clr-primary)]  hover:bg-[var(--clr-secondary)] hover:text-[var(--clr-primary)] duration-300"
						>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
