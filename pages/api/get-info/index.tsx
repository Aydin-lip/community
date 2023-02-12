import SqlConnection from "@/db/mysql/connection";
import { NextApiHandler } from "next";
import { IUserInfo } from "@/db/mysql/model";
import { TokenHandler } from "@/db/mysql/handler";


const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await SqlConnection()
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "err header token" })
      return
    }
    const { resultsToken, error } = await TokenHandler(token)
    if (error) {
      res.status(404).json({ message: "An account with this username was not found" })
      return
    }
    try {
      const resultsInfo = await connection.query<IUserInfo[]>(`SELECT * FROM users_info WHERE username = '${resultsToken.username}'`)
      if (!resultsInfo[0]?.[0]) {
        res.status(500).json({ message: "there is a problem!" })
        return
      }
      res.status(200).json({ message: "Success", user: { ...resultsInfo[0]?.[0], token: resultsToken.tokenUser } })
    } catch (error) {
      res.status(400).json({ message: "token is false" })
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler