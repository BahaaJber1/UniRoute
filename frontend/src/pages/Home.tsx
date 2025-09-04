import LinkButton from "../components/LinkButton";

function Home() {
	return (
		<div className="bg-bg-primary">
			<div className="h-screen bg-bg-primary text-center flex flex-col justify-center">
				<div className="">
					<h1 className="text-9xl">
						Take Control of Your Journey With
						<span className="text-accent-primary font-bold">UniRoute</span>
					</h1>
					<p className="text-[1.2rem] max-w-200 m-auto"></p>
				</div>

				<div className="flex justify-center items-center gap-10 mt-20">
					<LinkButton to="login">Get started</LinkButton>

					<LinkButton to="learn-more" variation="secondary">
						Learn more
					</LinkButton>
				</div>
			</div>

			<div className="h-screen pt-0 flex items-center justify-center gap-10 px-10">
				<div className="flex-shrink-0">
					<img src="https://placehold.co/600x400" className="w-full h-auto" />
				</div>

				<div className="max-w-lg">
					<h2>What is UniRoute?</h2>
					<p>UniRoute the most effective way to manage your courses.</p>
					<p className="mt-7">
						Plan smarter, track your courses, and graduate with confidence.
						UniRoute helps you map out your academic path, mark completed
						courses, and get a personalized study plan for the next semester,
						all in one clean dashboard.
					</p>
					<div className="mt-10">
						<LinkButton variation="secondary" to="learn-more">
							Learn More
						</LinkButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
