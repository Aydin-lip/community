import { useState } from 'react'
import { IComment, IReply, IUser } from "@/models/comment"
import SendComment from "../sendComment/home"
import BaseReply from "./baseReply"

interface IProps {
  data: IReply
  user: IUser
  reply: number
}
const BoxReply = ({ data, user, reply }: IProps) => {
  const [sendReply, setSendReply] = useState<boolean>(false)
  return (
    <>
      <BaseReply user={user} comment={data} replyLength={reply} link={false} sendReply={sendReply} setSendReply={setSendReply} />
      {sendReply && <SendComment onClose={setSendReply} />}
    </>
  )
}

export default BoxReply