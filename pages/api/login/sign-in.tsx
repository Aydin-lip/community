import * as bcrypt from "bcrypt"
import { NextApiHandler } from "next";
import mysql from 'mysql2/promise'
import SqlConnection from "@/db/mysql/connection"
import { IUserInfo } from "@/db/mysql/model";
import { TokenHandler } from "@/db/mysql/handler";



const Handler: NextApiHandler = async (req, res) => {
  const connectionFunc: Promise<mysql.Connection> = SqlConnection()
  const connection: mysql.Connection = await connectionFunc

  if (req.method === "GET") {
    const { username, password }: { username: string, password: string } = req.body
    if (!username || !password) {
      res.status(400).json({ message: "parameter is false" })
      return
    }
    const { resultsToken, error } = await TokenHandler("", username)
    if (error) {
      res.status(404).json({ message: "An account with this username was not found" })
      return
    }

    bcrypt.compare(password, resultsToken.password, async (err, hash) => {
      if (err) {
        res.status(500).json({ message: "bcrypt have a problem!" })
        return
      }
      if (hash) {

        try {
          const data = await connection.query<IUserInfo[]>(`SELECT * FROM users_info WHERE username = '${username}'`)
          const userInfo: IUserInfo = data[0]?.[0]
          res.status(200).json({ message: "Success", user: { ...userInfo, token: resultsToken.token } })
        } catch (error) {
          console.log(error)
          res.status(404).json({ message: "not found username" })
        }

      } else {
        res.status(404).json({ message: "password false" })
      }
    })


  } else {
    res.status(400).json({ message: "method is false!" })
  }

}

export default Handler