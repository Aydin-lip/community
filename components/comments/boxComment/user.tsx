import SendComment from "@/components/comments/sendComment/home"
import BaseReply from "@/components/comments/reply/baseReply"
import { useState } from "react"
import { IComment } from "@/models/comment"

interface IProps {
  comment: IComment
}
const BoxCommentUser = ({ comment }: IProps) => {
  const [reply, setReply] = useState<boolean>(false)

  return (
    <>
      <div className='max-w-3xl rounded-sm p-4 border border-neutral-500 bg-neutral-900 relative z-20 m-auto'>
        <BaseReply
          data={comment}
          link={true}
          href="/comment/one"
          sendReply={reply}
          setSendReply={setReply} />
        {reply && (
          <SendComment onClose={setReply} />
        )}
      </div>
    </>
  )
}

export default BoxCommentUser