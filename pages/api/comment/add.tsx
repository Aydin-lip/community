import SqlConnection from "@/db/mysql/connection";
import { TokenHandler } from "@/db/mysql/handler";
import { NextApiHandler } from "next";
import { uuid } from "uuidv4";


const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const connection = await SqlConnection()
    const { text } = req.body
    const { token } = req.headers
    if (!text || !token) {
      res.status(400).json({ message: "err header token or query" })
      return
    }
    const { resultsToken, error } = await TokenHandler(token)
    if (error) {
      res.status(404).json({ message: "An account with this username was not found" })
      return
    }
    if (resultsToken.id) {
      let tokenComment: string = uuid()
      let comment = {
        id_user: resultsToken.id,
        text,
        like: '0',
        token: tokenComment
      }
      try {
        await connection.query(`INSERT INTO comments SET ?`, comment)
        res.status(201).json({ message: "Success", comment })
      } catch (error) {
        res.status(500).json({ message: "No comment was made" })
      }
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler