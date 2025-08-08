import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";

function Form({ mode = "login", onSubmit = (data) => console.log(data) }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	return (
		<>
			<form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
				{mode !== "login" && (
					<div>
						<label htmlFor="firstName">First name</label>
						<input
							{...register("firstName", {
								required: "First name is required",
								minLength: {
									value: 4,
									message: "First name must be at least 4 characters",
								},
								pattern: {
									value: /^[a-zA-Z]+$/,
									message: "First name must contain only letters",
								},
							})}
							type="text"
							id="firstName"
							name="firstName"
						/>
						{errors.firstName?.message && (
							<ErrorMessage>{errors.firstName?.message}</ErrorMessage>
						)}

						<label htmlFor="lastName">Last name</label>
						<input
							{...register("lastName", {
								required: "Last name is required",
								minLength: {
									value: 4,
									message: "Last name must be at least 4 characters",
								},
								pattern: {
									value: /^[a-zA-Z]+$/,
									message: "Last name must contain only letters",
								},
							})}
							type="text"
							id="lastName"
							name="lastName"
						/>
						{errors.lastName?.message && (
							<ErrorMessage>{errors.lastName.message}</ErrorMessage>
						)}
					</div>
				)}
				<div>
					<label htmlFor="studentNumber">Student number</label>
					<input
						{...register("studentNumber", {
							required: "Student number is required",
							minLength: {
								value: 12,
								message: "Student number must be at least 12 characters",
							},
							pattern: {
								value: /^[0-9]{12}$/,
								message: "Student number must contain only numbers",
							},
						})}
						id="studentNumber"
						type="text"
						name="studentNumber"
					/>
					{errors.studentNumber?.message && (
						<ErrorMessage>{errors.studentNumber?.message}</ErrorMessage>
					)}
				</div>

				{mode !== "login" && (
					<>
						<fieldset>
							<legend>Gender</legend>
							<input
								type="radio"
								value="male"
								id="male"
								name="gender"
								{...register("gender", { required: "Gender is required" })}
							/>
							<label htmlFor="male">Male</label>
							<input
								type="radio"
								value="female"
								id="female"
								name="gender"
								{...register("gender", { required: "Gender is required" })}
							/>
							<label htmlFor="female">Female</label>
							{errors.gender && (
								<ErrorMessage>{errors.gender.message}</ErrorMessage>
							)}
						</fieldset>

						<div>
							<label htmlFor="email">E-mail</label>
							<input
								{...register("email", {
									required: "Email is required",
									minLength: {
										value: 12,
										message: "Email must be at least 12 characters",
									},
									pattern: {
										value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
										message: "Last name contain only letters",
									},
								})}
								type="email"
								id="email"
								name="email"
								autoComplete="email"
							/>
							{errors.email?.message && (
								<ErrorMessage>{errors.email.message}</ErrorMessage>
							)}
						</div>
					</>
				)}

				<div>
					<label htmlFor="password">Password</label>
					<input
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
						})}
						type="password"
						id="password"
						name="password"
					/>

					{errors.password?.message && (
						<ErrorMessage>{errors.password?.message}</ErrorMessage>
					)}

					{mode !== "login" && (
						<>
							<label htmlFor="confirmPassword">Confirm password</label>
							<input
								{...register("confirmPassword", {
									required: "Confirm password is required",
									minLength: {
										value: 8,
										message: "Confirm password must be at least 8 characters",
									},
									validate: (value) =>
										value === watch("password") || "Passwords do not match",
								})}
								type="password"
								id="confirmPassword"
								name="confirmPassword"
							/>
							{errors.confirmPassword?.message && (
								<ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
							)}
						</>
					)}
				</div>
				{mode !== "login" ? <Button>Create</Button> : <Button>Login</Button>}
			</form>

			{mode !== "login" ? (
				<p>
					Already have an account? <a href="login">Login</a>
				</p>
			) : (
				<p>
					Create account from here... <a href="signup">Create account</a>
				</p>
			)}
		</>
	);
}

export default Form;
