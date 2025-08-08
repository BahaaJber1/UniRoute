import { Pool } from "pg"; // To start connection with the database.
import dotenv from "dotenv"; // library to deal with .env files to keep it safe

dotenv.config();

// connect with the database with the right credientials from .env file
const db = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});

export default db; // exporting the object 