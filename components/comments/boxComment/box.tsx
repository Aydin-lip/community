import { useState } from 'react';
import SendComment from '@/components/comments/sendComment/box';
import BaseReply from '@/components/comments/reply/baseReply';
import { IComment, ICommentt, IReply, IUserInfo } from '@/models/comment';
import ReplyBox from '../reply/box';

interface IProps {
  comment: ICommentt
  user: IUserInfo
  reply: IReply[]
}
const BoxComment = ({ comment, user, reply }: IProps) => {
  const [activeSend, setActiveSend] = useState<boolean>(false)

  return (
    <>
      <div className="absolute flex justify-center items-center anim-open-comment overflow-auto">
        <div className="h-full pt-20">
          <div className='max-w-3xl'>

            <div className='p-4 border-b'>
              <BaseReply user={user} comment={comment} replyLength={reply.length} link={false} sendReply={activeSend} setSendReply={setActiveSend} maxH={true} htmlFor='sendReplyInput' />
            </div>

            <div className='p-4 pb-20'>
              {reply?.map((rep, index) => (
                <ReplyBox key={index} data={rep} />
              ))}
            </div>

            <div className='fixed bottom-0 right-1/2 translate-x-1/2 w-full sm:w-[36rem]'>
              <div className='w-full p-4'>
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