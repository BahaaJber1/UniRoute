import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Button from "../ui/Button";

function Home() {
	return (
		<>
			<Header />
			{/* the upper section */}
			<div className="bg-[url(/Hero.jpg)] bg-cover bg-center">
				<div className="text-white text-center py-50">
					<h1 className="text-[8rem]">
						Take Control of Your Journey With UniRoute
					</h1>
					<p className="text-[1.2rem] max-w-200 m-auto">
						Plan smarter, track your courses, and graduate with confidence.
						UniRoute helps you map out your academic path, mark completed
						courses, and get a personalized study plan for the next semester,
						all in one clean dashboard.
					</p>

					<div className="flex justify-center gap-10 mt-20">
						<a
							href="login"
							className="bg-[var(--clr-primary)] p-3 rounded-4xl cursor-pointer hover:bg-[var(--clr-secondary)] hover:text-black duration-300"
						>
							Get started
						</a>
						<button className="border-2 border-[var(--clr-secondary)] p-3 rounded-4xl cursor-pointer hover:bg-blue-600 hover:border-blue-600 duration-300">
							Learn more
						</button>
					</div>
				</div>
			</div>
			{/* The second part */}
			<div className="grid grid-cols-2 m-auto w-[80%] mt-20 items-center">
				<div className="flex justify-center">
					<img src="https://placehold.co/600x400" />
				</div>

				<div className="my-10 ">
					<h2 className="my-3">What is UniRoute?</h2>
					<p className="my-3">
						UniRoute the most ffective way to manage your courses.
					</p>
					<p className="mt-7 w-[50%]">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex
					</p>
					<Button>Learn More</Button>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Home;
