import { useState } from 'react';
import BaseReply from './baseReply';
import { IReplyByUser} from '@/models/comment';

interface IProps {
  data: IReplyByUser
}
const ReplyHome = ({ data }: IProps) => {
  const [reply, setReply] = useState<boolean>(false)

  return (
    <>
      <div className='flex scale-90'>
        <div className='w-12 h-auto justify-center d-none d-md-flex'>
          <div className='bgColorThem w-0.5 h-112 rounded-lg relative top-n-58'></div>
          <div className='bgColorThem w-0.5 h-4 relative top-1/2 left-1.5 rotate-90'></div>
        </div>
        <div className='w-full max-w-xl-38 rounded-sm p-4 border border-neutral-500 bg-neutral-900 mt-2'>
          <BaseReply user={data.user} comment={data} replyLength={0} link={true} href={'/'} sendReply={reply} setSendReply={setReply} />
        </div>
      </div>
    </>
  )
}

export default ReplyHome