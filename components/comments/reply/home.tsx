import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Tooltip } from '@mui/material';
import Link from 'next/link';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import BaseReply from './baseReply';
import { IComment } from '@/models/comment';

interface IProps {
  data: IComment
}
const ReplyHome = ({ data }: IProps) => {
  const [like, setLike] = useState<boolean>(false)
  const [reply, setReply] = useState<boolean>(false)

  return (
    <>
      <div className='flex scale-90'>
        <div className='w-12 h-auto justify-center d-none d-md-flex'>
          <div className='bgColorThem w-0.5 h-112 rounded-lg relative top-n-58'></div>
          <div className='bgColorThem w-0.5 h-4 relative top-1/2 left-1.5 rotate-90'></div>
        </div>
        <div className='max-w-xl-38 rounded-sm p-4 border border-neutral-500 bg-neutral-900 mt-2'>
          <BaseReply data={data} link={true} href={'/'} sendReply={reply} setSendReply={setReply} />
        </div>
      </div>
    </>
  )
}

export default ReplyHome