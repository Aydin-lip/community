import Link from 'next/link';
import { useState } from 'react';
import ReplyHome from '../reply/home';
import SendComment from '../sendComment/home';
import { IFullComment } from '@/models/comment';
import BaseReply from '../reply/baseReply';

interface IProps {
  data: IFullComment
}
const BoxCommentHome = ({ data }: IProps) => {
  const [reply, setReply] = useState<boolean>(false)
  return (
    <>
      <div className='relative max-w-2xl rounded-lg p-4 border border-neutral-500 bg-neutral-800 max-h-100 overflow-hidden'>
        <Link href={`comment/${data.token}`}>
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-zinc-900/50 z-10'></div>
        </Link>
        <div className='max-w-2xl rounded-sm p-4 border border-neutral-500 bg-neutral-900 relative z-20'>
          <BaseReply user={data.user} comment={data} replyLength={data.reply.length} link={true} href={`comment/${data.token}`} sendReply={reply} setSendReply={setReply} />

          {reply && (
            <SendComment onClose={setReply} />
          )}

        </div>
        <div>
          {data.reply.map(rep => (
            <ReplyHome key={rep.id} data={rep} />
          ))}
        </div>
        {data.reply.length > 1 &&
          <Link href={`comment/${data.token}`}>
            <div className='z-20 absolute bottom-0 left-0 right-0 p-3 flex justify-center bg-neutral-900/75 shadow-2xl'>
              show more
            </div>
          </Link>}
      </div>
    </>
  )
}

export default BoxCommentHome