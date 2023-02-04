import { useState } from 'react';
import ReplyBox from '@/components/comments/reply/box';
import SendComment from '@/components/comments/sendComment/box';
import BaseReply from '@/components/comments/reply/baseReply';
import { IComment } from '@/models/comment';

interface IProps {
  comment: IComment
}
const BoxComment = ({ comment }: IProps) => {
  const [like, setLike] = useState<boolean>(false)
  const [close, setClose] = useState<boolean>(false)
  const [activeSend, setActiveSend] = useState<boolean>(false)

  return (
    <>
      <div className="absolute flex justify-center items-center anim-open-comment overflow-auto">
        <div className="h-full pt-20">
          <div className='max-w-3xl'>

            <div className='p-4 border-b'>
              <BaseReply data={comment} link={false} sendReply={activeSend} setSendReply={setActiveSend} />
            </div>

            <div className='p-4 pb-20 pl-0'>
              {comment.reply?.map((rep, index) => (
                <ReplyBox key={index} data={rep} />
              ))}
            </div>

            <div className='fixed bottom-0 left-0 right-0 flex justify-center'>
              <div className='max-w-xl w-full p-4'>
                <SendComment active={activeSend} setActive={setActiveSend} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BoxComment