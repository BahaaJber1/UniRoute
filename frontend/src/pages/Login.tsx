import Form from "../components/Form";
import { usePageTitle } from "../hooks/usePageTitle";

function Login() {
	usePageTitle("Login");
	return (
		<>
			<Form mode="login" />
		</>
	);
}

export default Login;
