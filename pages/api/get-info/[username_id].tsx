import SqlConnection from "@/db/mysql/connection";
import { NextApiHandler } from "next";
import { IUserInfo } from "@/db/mysql/model";
import { TokenHandler } from "@/db/mysql/handler";


const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await SqlConnection()
    const { username_id } = req.query
    if (!username_id) {
      res.status(400).json({ message: "err query" })
      return
    }

    try {
      const results = await connection.query<IUserInfo[]>(`SELECT * FROM users_info WHERE id = '${username_id}' OR username = '${username_id}'`)
      if (!results[0]?.[0]) {
        res.status(404).json({ message: "This username does not exist" })
        return
      }
      res.status(200).json({ message: "Success", user: results[0]?.[0] })
    } catch (error) {
      res.status(404).json({ message: "This username does not exist" })
      return
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler