import SqlConnection from "@/db/mysql/connection";
import { NextApiHandler } from "next";
import { IUserInfo } from "@/db/mysql/model";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await SqlConnection()
    try {
      const results = await connection.query<IUserInfo[]>(`SELECT * FROM users_info`)
      res.status(200).json({ message: "Success", users: results[0] })
    } catch (error) {
      res.status(500).json({ message: "try againg" })
      return
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler