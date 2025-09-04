import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import LinkButton from "../components/LinkButton.tsx";

function Home() {
	return (
		<>
			<Header />
			{/* the upper section */}
			<div className="bg-bg-primary">
				<div className="text-center py-50">
					<h1 className="text-9xl">
						Take Control of Your Journey With{" "}
						<span className="text-accent-primary font-bold">UniRoute</span>
					</h1>
					<p className="text-[1.2rem] max-w-200 m-auto">
						Plan smarter, track your courses, and graduate with confidence.
						UniRoute helps you map out your academic path, mark completed
						courses, and get a personalized study plan for the next semester,
						all in one clean dashboard.
					</p>

					<div className="flex justify-center items-center gap-10 mt-20">
						<LinkButton to="login">Get started</LinkButton>

						<LinkButton to="learn-more" variation="secondary">
							Learn more
						</LinkButton>
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
					<LinkButton variation="primary" to="learn-more">
						Learn More
					</LinkButton>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Home;
