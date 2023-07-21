import SendComment from "@/components/comments/sendComment/home"
import BaseReply from "@/components/comments/reply/baseReply"
import { useState } from "react"
import { IComment } from "@/db/mysql/model"
import { IReply, IUserInfo } from "@/models/comment"

interface IProps {
  comment: IComment
  user: IUserInfo
  replys: IReply[]
}
const BoxCommentUser = ({ comment, user, replys }: IProps) => {
  const [reply, setReply] = useState<boolean>(false)

  return (
    <>
      <div className='max-w-3xl rounded-sm p-4 border border-neutral-500 bg-neutral-900 relative z-20 m-auto'>
        <BaseReply
          user={user}
          comment={comment}
          replyLength={replys.length}
          link={true}
          href={`/comment/${comment.token}`}
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