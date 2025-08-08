import express from "express";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRouter);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
