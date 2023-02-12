import SqlConnection from "@/db/mysql/connection";
import { RowDataPacket } from "mysql2";
import { NextApiHandler } from "next";
import { isUuid } from "uuidv4";

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
    const { reply_token } = req.body
    if (!reply_token || !isUuid(reply_token)) {
      res.status(400).json({ message: "parameter is false" })
      return
    }
    try {
      const results = await connection.query<IReply[]>(`SELECT * FROM reply WHERE reply_token = '${reply_token}'`)
      if (!results[0][0]?.id) {
        res.status(404).json({ message: "not found reply by this token" })
        return
      }
      res.status(200).json({ message: "Success", reply: results[0] })
    } catch (error) {
      res.status(404).json({ message: "not found reply by this token" })
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler