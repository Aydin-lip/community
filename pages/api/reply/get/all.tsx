import SqlConnection from "@/db/mysql/connection";
import { RowDataPacket } from "mysql2";
import { NextApiHandler } from "next";

interface IReply extends RowDataPacket {
  id: number
  id_user: number
  reply_token: string
  text: string
  like: string
  token: string
}

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await SqlConnection()
    try {
      const results = await connection.query<IReply[]>(`SELECT * FROM reply`)
      res.status(200).json({ message: "Success", reply: results[0] })
    } catch (error) {
      res.status(404).json({ message: "not found reply by this token" })
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler