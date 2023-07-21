import { RowDataPacket } from "mysql2"

export interface IUserToken extends RowDataPacket {
  id: number
  username: string
  password: string
  token: string
}
export interface IUserInfo extends RowDataPacket {
  id: number
  first_name: string
  last_name: string
  username: string
  birthday: string
  bio: string
  avatar: string
  email: string
  phone: string
}
export interface IComment extends RowDataPacket {
  id: number
  id_user: number
  text: string
  like: string
  token: string
}