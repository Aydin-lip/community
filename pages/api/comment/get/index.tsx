import { NextApiHandler } from "next"
import SqlConnection from "@/db/mysql/connection"
import { IComment } from "@/db/mysql/model";


const Handler: NextApiHandler = async (req, res) => {
  const connection = await SqlConnection()
  if (req.method === "GET") {
    connection.connect()
    try {
      const results = await connection.query<IComment[]>("SELECT * FROM comments")
      res.status(200).json({ message: "Success", comments: results[0] })
    } catch (error) {
      res.status(500).json({ message: "faild query!" })
    }
    connection.end()
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler