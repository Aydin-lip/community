import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Tooltip } from '@mui/material';
import Link from 'next/link';
import { red } from '@mui/material/colors';
import { Dispatch, SetStateAction, useState } from 'react';
import BaseReply from './baseReply';
import { IComment } from '@/models/comment';
import SendComment from '../sendComment/home';
import BoxReply from './boxReply';


const viewReplies = (data: IComment, showReply: boolean, setShowReply: Dispatch<SetStateAction<boolean>>) => {
  if (data.reply.length >= 1) {
    return (
      <div className='p-4 relative mb-4'>
        <hr />
        <span className='absolute text-sm cursor-pointer px-2 show-reply' onClick={() => setShowReply(!showReply)}>
          {showReply ? 'Hide replies' : `View replies(${data.reply.length})`}
        </span>
      </div>
    )
  }
}

interface IProps {
  data: IComment
}
const ReplyBox = ({ data }: IProps) => {
  const [showReplyOne, setShowReplyOne] = useState<boolean>(false)
  const [sendReplyOne, setSendReplyOne] = useState<boolean>(false)

  const [showReplyTwo, setShowReplyTwo] = useState<boolean>(false)
  const [sendReplyTwo, setSendReplyTwo] = useState<boolean>(false)

  const [showReplyThree, setShowReplyThree] = useState<boolean>(false)
  const [sendReplyThree, setSendReplyThree] = useState<boolean>(false)

  return (
    <>
      <div className='ml-12'>

        <div className="shadow-md">
          <div className='rounded-sm p-4 mt-2 bg-neutral-900/50'>
            <BoxReply data={data} />
          </div>
        </div>
        {viewReplies(data, showReplyOne, setShowReplyOne)}

        {showReplyOne &&
          data.reply.map((rep, index) => (
            <div className='ml-12' key={index}>
              <div className="shadow-md">
                <div className='rounded-sm p-4 mt-2 bg-neutral-800/50'>
                  <BoxReply data={rep} />
                </div>
              </div>
              {viewReplies(rep, showReplyTwo, setShowReplyTwo)}
              {showReplyTwo &&
                rep.reply?.map((repp, indexx) => (
                  <div className='ml-12' key={indexx}>
                    <div className="shadow-md">
                      <div className='rounded-sm p-4 mt-2 bg-neutral-700/50'>
                        <BoxReply data={repp} />
                      </div>
                    </div>
                    {viewReplies(repp, showReplyThree, setShowReplyThree)}
                  </div>
                ))}
            </div>
          ))}

      </div>
    </>
  )
}

export default ReplyBox