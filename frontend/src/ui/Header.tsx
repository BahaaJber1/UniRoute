import { NavLink } from "react-router";
import Button from "./Button";

function Header() {
	return (
		<header className="p-8 bg-[#000000bd] text-white opacity-80">
			<nav className="mx-15 flex justify-between">
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
						<NavLink to="login">
							<Button>Login</Button>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
