import * as bcrypt from "bcrypt"
import { NextApiHandler } from "next";
import SqlConnection from "@/db/mysql/connection";
import { uuid } from "uuidv4"


const Handler: NextApiHandler = async (req, res) => {
  const connection = await SqlConnection()

  if (req.method === "POST") {
    let { username, email, password }: { username: string, email: string, password: string } = req.body
    if (!username || !email || !password || !email.includes("@") || password.length < 6) {
      res.status(400).json({ message: "parameter is false" })
      return
    }

    let token: string = uuid()
    const hash = await bcrypt.hash(password, 10)
    try {
      await connection.query(`INSERT INTO users_info (first_name, last_name, username, birthday, bio, avatar, email, phone) VALUES ('', '', '${username}', '2000-01-01', '', '', '${email}', '')`)
    } catch (error) { }
    try {
      await connection.query(`INSERT INTO users_token (username, password, token) VALUES ('${username}', '${hash}', '${token}')`)
      res.status(201).json({
        message: "Success", user: {
          username,
          email,
          token
        }
      })
    } catch (error) {
      res.status(500).json({ message: "Account not created!" })
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler