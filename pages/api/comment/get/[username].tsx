import SqlConnection from "@/db/mysql/connection";
import { IComment } from "@/db/mysql/model";
import { RowDataPacket } from "mysql2";
import { NextApiHandler } from "next";

interface IUserId extends RowDataPacket {
  id: number
}

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await SqlConnection()
    const { username } = req.query
    if (!username) {
      res.status(500).json({ message: "err query" })
      return
    }

    let userID
    try {
      const results = await connection.query<IUserId[]>(`SELECT id FROM users_info WHERE username = '${username}'`)
      if (!results[0][0]?.id) {
        res.status(404).json({ message: "not found username" })
        return
      }
      userID = results[0][0].id
    } catch (error) {
      res.status(404).json({ message: "not found username" })
    }
    if (userID) {
      try {
        const results = await connection.query<IComment[]>(`SELECT * FROM comments WHERE id_user = '${userID}'`)
        if (!results[0][0]?.id) {
          res.status(404).json({ message: "This user has no comments" })
          return
        }
        res.status(200).json({ message: "Success", comments: results[0] })
      } catch (error) {
        res.status(404).json({ message: "This user has no comments" })
      }
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler