import { useState } from 'react'
import { IComment } from "@/models/comment"
import SendComment from "../sendComment/home"
import BaseReply from "./baseReply"

interface IProps {
  data: IComment
}
const BoxReply = ({ data }: IProps) => {
  const [sendReply, setSendReply] = useState<boolean>(false)
  return (
    <>
      <BaseReply data={data} link={false} sendReply={sendReply} setSendReply={setSendReply} />
      {sendReply && <SendComment onClose={setSendReply} />}
    </>
  )
}

export default BoxReply