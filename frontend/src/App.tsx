import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="signup" element={<Signup />} />
				<Route path="login" element={<Login />} />
				<Route path="dashboard" element={<p>Dashboard Page</p>} />
				<Route path="profile" element={<p>Profile Page</p>} />
				<Route path="matiral" element={<p>Matiral Page</p>} />
				<Route path="study_plan" element={<p>Study_plan Page</p>} />
				<Route
					path="completed_courses"
					element={<p>Completed_courses Page</p>}
				/>
				<Route path="Customize_plan" element={<p>Customize_plan Page</p>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
