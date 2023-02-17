interface IUser {
  avatar: string
  username: string
}
interface ICommentNoReply {
  text: string
  user: IUser
  like: number
}
interface One extends ICommentNoReply {
  reply: []
}
interface Two extends ICommentNoReply {
  reply: One[]
}
interface Three extends ICommentNoReply {
  reply: Two[]
}
interface Four extends ICommentNoReply {
  reply: Three[]
}

export interface IComment extends ICommentNoReply {
  reply: One[] | Two[] | Three[] | Four[]
}

export interface ICommentt {
  id: number
  id_user: number
  text: string
  like: string
  token: string
}
export interface IUserInfo {
  id: number
  first_name: string
  last_name: string
  username: string
  birthday: string
  bio: string
  avatar: string
  eamil: string
  phone: string
}

export interface IReply {
  id: number
  id_user: number
  reply_token: string
  text: string
  like: string
  token: string
} 

export interface IReplyByUser extends IReply {
  user: {
    username: string
    avatar: string
  }
}
export interface IFullComment extends ICommentt {
  user: {
    username: string
    avatar: string
  },
  reply: IReplyByUser[]
}