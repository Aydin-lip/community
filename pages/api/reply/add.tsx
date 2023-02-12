import SqlConnection from "@/db/mysql/connection";
import { TokenHandler } from "@/db/mysql/handler";
import { NextApiHandler } from "next";
import { isUuid, uuid } from "uuidv4";


const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const connection = await SqlConnection()
    const { reply_token, text } = req.body
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "err header token" })
      return
    }
    if (!reply_token || !text || !isUuid(reply_token)) {
      res.status(400).json({ message: "parameter is false" })
      return
    }
    const { resultsToken, error } = await TokenHandler(token)
    if (error) {
      res.status(404).json({ message: "An account with this username was not found" })
      return
    }

    if (resultsToken.id) {
      let newReply = {
        id_user: resultsToken.id,
        reply_token,
        text,
        like: "0",
        token: uuid()
      }
      try {
        await connection.query(`INSERT INTO reply SET ?`, newReply)
        console.log(newReply)
        res.status(200).json({ message: "Reply sent successfully." })
      } catch (error) {
        res.status(500).json({ message: "Reply was not sent." })
      }
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }

}

export default Handler