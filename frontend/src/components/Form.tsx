import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formFields } from "../types";
import StyledButton from "./StyledButton";

//The form accept 2 props the mode which can be login or signup  with default value of login to make it reusable
//The other is the callback function that will fire up when the form is submitted, right now its only for log this data
//to the concole as a default behavior, later you can update it to interact with the database.

function Form({
	mode = "login",
	onSubmit = (data: formFields) => console.log(data),
}) {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(formSchema),
	});

	return (
		<>
			<form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
				{mode !== "login" && (
					<div>
						<label htmlFor="firstName">First name</label>
						<input {...register("firstName")} type="text" id="firstName" />

						{errors.firstName?.message && (
							<ErrorMessage>{errors.firstName?.message}</ErrorMessage>
						)}

						<label htmlFor="lastName">Last name</label>
						<input {...register("lastName")} type="text" id="lastName" />

						{errors.lastName?.message && (
							<ErrorMessage>{errors.lastName.message}</ErrorMessage>
						)}
					</div>
				)}
				<div>
					<label htmlFor="studentNumber">Student number</label>
					<input
						{...register("studentNumber")}
						id="studentNumber"
						type="text"
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
								{...register("gender")}
							/>
							<label htmlFor="male">Male</label>
							<input
								type="radio"
								value="female"
								id="female"
								{...register("gender")}
							/>
							<label htmlFor="female">Female</label>
							{errors.gender && (
								<ErrorMessage>{errors.gender.message}</ErrorMessage>
							)}
						</fieldset>
					</>
				)}

				<div>
					<label htmlFor="password">Password</label>
					<input {...register("password")} type="password" id="password" />

					{errors.password?.message && (
						<ErrorMessage>{errors.password?.message}</ErrorMessage>
					)}

					{mode !== "login" && (
						<>
							<label htmlFor="confirmPassword">Confirm password</label>
							<input
								{...register("confirmPassword")}
								type="password"
								id="confirmPassword"
							/>

							{errors.confirmPassword?.message && (
								<ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
							)}
						</>
					)}
				</div>
				{mode !== "login" ? (
					<StyledButton type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Loading..." : "Create"}
					</StyledButton>
				) : (
					<StyledButton type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Loading..." : "Login"}
					</StyledButton>
				)}
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
