import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { IReply, IUser } from '@/models/comment';
import { getInfoById, getReplyByToken } from '@/services/http.service';
import BoxReply from '../boxReply';


const viewReplies = (reply: number, showReply: boolean, setShowReply: Dispatch<SetStateAction<boolean>>) => {
  if (reply >= 1) {
    return (
      <div className='p-4 relative mb-4'>
        <hr />
        <span className='absolute text-sm cursor-pointer px-2 show-reply' onClick={() => setShowReply(!showReply)}>
          {showReply ? 'Hide replies' : `View replies(${reply})`}
        </span>
      </div>
    )
  }
}


interface IProps {
  data: IReply
}
const ReplyTwo = ({ data }: IProps) => {
  const [showReply, setShowReply] = useState<boolean>(false)

  const [user, setUser] = useState<IUser>({ username: '', avatar: '' })
  const [reply, setReply] = useState<IReply[]>([])

  useEffect(() => {
    getInfoById(data.id_user)
      .then(res => {
        setUser(res.data.user)
      }).catch(err => { })

    getReplyByToken({ reply_token: data.token })
      .then(res => {
        setReply(res.data.reply)
      }).catch(err => { })
  }, [])

  return (
    <>
      <div className=''>
        <div className="shadow-md">
          <div className='rounded-sm p-4 mt-2 bg-neutral-900/50'>
            <BoxReply data={data} user={user} reply={0} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReplyTwo