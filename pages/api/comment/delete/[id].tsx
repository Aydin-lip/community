import SqlConnection from "@/db/mysql/connection";
import { NextApiHandler } from "next";
import { IComment } from "@/db/mysql/model";
import { TokenHandler } from "@/db/mysql/handler";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await SqlConnection()
    const { token } = req.headers
    const { id } = req.query
    if (!token) {
      res.status(400).json({ message: "err header token" })
      return
    }

    const { resultsToken, error } = await TokenHandler(token)
    if (error) {
      res.status(404).json({ message: "An account with this username was not found" })
      return
    }
    if (resultsToken.id > 0) {
      try {
        const results = await connection.query<IComment[]>(`DELETE FROM comments WHERE id = ${id} AND id_user = ${resultsToken.id}`)
        res.status(200).json({ message: "The comment was successfully deleted" })
      } catch (error) {
        res.status(404).json({ message: "This token does not exist with this id" })
      }
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default (Handler)