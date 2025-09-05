import Form from "../components/Form";
import { usePageTitle } from "../hooks/usePageTitle";

function Signup() {
	usePageTitle("Signup");
	return (
		<>
			<Form mode="signup" />
		</>
	);
}

export default Signup;
