import SqlConnection from "@/db/mysql/connection";
import { TokenHandler } from "@/db/mysql/handler";
import { IUserInfo } from "@/db/mysql/model";
import { NextApiHandler } from "next";


interface IUpdate {
  first_name: string
  last_name: string
  username: string
  birthday: string
  bio: string
  avatar: string
  email: string
  phone: string
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {

    const connection = await SqlConnection()
    const { first_name, last_name, username, birthday, bio, avatar, email, phone }: IUpdate = req.body
    const token = req.headers?.token
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }
    if (username && username?.length < 4 || email && email?.length < 6 || email && !email?.includes("@")) {
      res.status(400).json({ message: "Please enter the parameters correctly" })
      return
    }
    let userInfo: IUserInfo = {
      constructor: {
        name: 'RowDataPacket'
      },
      id: 0,
      first_name: '',
      last_name: '',
      username: '',
      birthday: '',
      bio: '',
      avatar: '',
      eamil: '',
      phone: ''
    }
    const { resultsToken, error } = await TokenHandler(token)
    if (error) {
      res.status(404).json({ message: "not found user by this token" })
      return
    }
    try {
      const resultsInfo = await connection.query<IUserInfo[]>(`SELECT * FROM users_info WHERE id = ${resultsToken.id}`)
      if (!resultsInfo[0][0].id) {
        res.status(404).json({ message: "not found user by this token" })
        return
      }
      userInfo = resultsInfo[0][0]
    } catch (error) {
      res.status(404).json({ message: "not found user by this token" })
    }

    if (userInfo.id > 0 && resultsToken.id > 0) {
      try {
        await connection.query(`UPDATE users_info SET first_name = '${first_name?.length >= 0 ? first_name : userInfo.first_name}', last_name = '${last_name?.length >= 0 ? last_name : userInfo.last_name}', username = '${username?.length >= 0 ? username : userInfo.username}', birthday = '${birthday?.length >= 0 ? birthday : userInfo.birthday}', bio = '${bio?.length >= 0 ? bio : userInfo.bio}', avatar = '${avatar?.length >= 0 ? avatar : userInfo.avatar}', email = '${email?.length >= 0 ? email : userInfo.email}', phone = '${phone?.length >= 0 ? phone : userInfo.phone}' Where id = ${userInfo.id}`)
        const resultsInfo = await connection.query<IUserInfo[]>(`SELECT * FROM users_info WHERE id = ${userInfo.id}`)
        res.status(200).json({ message: "Success", user: { ...resultsInfo[0][0], token: resultsToken.token } })
      } catch (error) {
        res.status(500).json({ message: "Your information was not updated" })
      }
    }

  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler