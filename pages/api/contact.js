import { MongoClient } from "mongodb"

async function handler(req, res) {
	if (req.method === "POST") {
		const { name, email, message } = req.body

		if (
			!name ||
			name.trim() === "" ||
			!email ||
			!email.includes("@") ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid Input" })
			return
		}

		const newMessage = {
			name,
			email,
			message,
		}

		let client
		const dbAddress = process.env.mongodb_address
		const dbName = process.env.mongodb_dbname
		try {
			client = await MongoClient.connect(dbAddress, {
				dbName: dbName,
			})
			console.log("DB connected")
		} catch (e) {
			console.log(e)
		}

		const db = client.db()
		const result = await db.collection("messages").insertOne(newMessage)
		client.close()
		res.status(201).json({ message: "Message Store Success", result })
	}
}
export default handler
