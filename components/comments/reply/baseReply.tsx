import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Tooltip } from '@mui/material';
import Link from 'next/link';
import { red } from '@mui/material/colors';
import { useState, Dispatch, SetStateAction } from 'react';
import { ICommentt } from '@/models/comment';

interface IProps {
  user: { username: string, avatar: string }
  comment: ICommentt
  replyLength: number
  link: boolean
  href?: string
  sendReply: boolean
  setSendReply: Dispatch<SetStateAction<boolean>>
}
const BaseReply = ({ user, comment, replyLength, link, href, sendReply, setSendReply }: IProps) => {
  const [like, setLike] = useState<boolean>(false)
  return (
    <>
      <div className='flex items-center mb-4 gap-4'>
        <Link href={'/user/aydin'}>
          <Avatar src={user.avatar} alt={user.username} />
        </Link>
        <Link href={user.username}>{user.username}</Link>
      </div>
      <div>
        {link ? (
          <Link href={href ? href : '/'}>
            <p className='text-hover max-h-20 overflow-auto'>{comment.text}</p>
          </Link>
        ) : (
          <p className='max-h-20 overflow-auto'>{comment.text}</p>
        )}
        <div className='flex justify-end items-center gap-6 mt-4'>
          <span className='flex gap-2 cursor-default'>
            {like ? (
              <FavoriteIcon sx={{ color: red[500] }} className='cursor-pointer' onClick={() => setLike(!like)} />
            ) : (
              <Tooltip title="Like">
                <FavoriteBorderIcon className='cursor-pointer' onClick={() => setLike(!like)} />
              </Tooltip>
            )}
            {like ? `${comment.like + 1}` : comment.like}
          </span>
          <span className='flex gap-2 cursor-default'>
            <Tooltip title="Reply">
              <ReplyIcon className='cursor-pointer' onClick={(() => setSendReply(!sendReply))} />
            </Tooltip>
            {replyLength > 0 && replyLength}
          </span>
        </div>
      </div>
    </>
  )
}

export default BaseReply