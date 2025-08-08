import Header from "../ui/Header";

function Home() {
	return (
		<>
			<Header />

			<div className="w-full bg-[url(/Hero.jpg)] bg-cover bg-center">
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
						<button className="bg-[var(--clr-primary)] p-3 rounded-4xl cursor-pointer hover:bg-[var(--clr-secondary)] hover:text-black duration-300">
							Get started
						</button>
						<button className="border-2 border-[var(--clr-secondary)] p-3 rounded-4xl cursor-pointer hover:bg-blue-600 hover:border-blue-600 duration-300">
							Learn more
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
