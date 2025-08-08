import db from "../config/database.js";

export async function getUser(req, res) {
    try {
        const result = await db.query("SELECT * FROM users");
        return res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}