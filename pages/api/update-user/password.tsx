import SqlConnection from "@/db/mysql/connection";
import { NextApiHandler } from "next";
import * as bcrypt from 'bcrypt'
import { TokenHandler } from "@/db/mysql/handler";



const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const connection = await SqlConnection()
    const { username, old_password, new_password } = req.body
    if (!username) {
      res.status(400).json({ message: "There is no username" })
      return
    } else if (!new_password || new_password.length < 6 || !old_password || old_password.length < 6) {
      res.status(400).json({ message: "Either there is no password or you entered it wrong.. Most be more 6 length" })
      return
    }

    const { resultsToken, error } = await TokenHandler("", username)
    if (error) {
      res.status(404).json({ message: "An account with this username was not found" })
      return
    }

    if (resultsToken?.id > 0) {
      const oldHash = await bcrypt.compare(old_password, resultsToken.password)
      if (oldHash) {
        const newHash = await bcrypt.hash(new_password, 10)
        if (newHash) {
          try {
            await connection.query(`UPDATE users_token SET password = '${newHash}' WHERE username = '${resultsToken.username}'`)
            res.status(200).json({ message: "The password has been successfully updated" })
          } catch (error) {
            res.status(500).json({ message: "The password was not updated" })
          }
        } else {
          res.status(500).json({ message: "" })
        }
      } else {
        res.status(403).json({ message: "old Password is false" })
      }
    } else {
      res.status(400).json({ message: "not found username" })
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler