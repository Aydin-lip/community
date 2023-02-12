import SqlConnection from "@/db/mysql/connection";
import { TokenHandler } from "@/db/mysql/handler";
import { NextApiHandler } from "next";
import { isUuid } from "uuidv4";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await SqlConnection()
    const { token } = req.headers
    const { reply_token } = req.body
    if (!token || !reply_token || !isUuid(reply_token)) {
      res.status(400).json({ message: "err header token or parametr is false" })
      return
    }

    const { resultsToken, error } = await TokenHandler(token)
    if (error) {
      res.status(404).json({ message: "An account with this username was not found" })
      return
    }

    if (resultsToken?.id) {
      try {
        await connection.query(`DELETE FROM reply WHERE token = '${reply_token}' AND id_user = ${resultsToken?.id}`)
        res.status(200).json({ message: "Replay deleted successfully" })
      } catch (error) {
        res.status(500).json({ message: "There is a problem in the database" })
      }
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default (Handler)