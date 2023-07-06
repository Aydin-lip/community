import SqlConnection from "@/db/mysql/connection";
import { IComment } from "@/db/mysql/model";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await SqlConnection()
    const { token } = req.query
    if (!token) {
      res.status(500).json({ message: "err query" })
      return
    }

    try {
      const results = await connection.query<IComment[]>(`SELECT * FROM comments WHERE token = '${token}'`)
      if (!results[0][0]?.id) {
        res.status(404).json({ message: "No comments have been registered with this token!" })
        return
      }
      res.status(200).json({ message: "Success", comment: results[0] })
    } catch (error) {
      res.status(404).json({ message: "No comments have been registered with this token!" })
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler