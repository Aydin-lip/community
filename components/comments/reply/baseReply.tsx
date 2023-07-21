import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Tooltip } from '@mui/material';
import Link from 'next/link';
import { red } from '@mui/material/colors';
import { useState, Dispatch, SetStateAction } from 'react';
import { ICommentt, IUserInfo } from '@/models/comment';

interface IProps {
  user: Partial<IUserInfo>
  comment: Partial<ICommentt>
  replyLength: number
  link: boolean
  href?: string
  sendReply: boolean
  setSendReply: Dispatch<SetStateAction<boolean>>
  maxH?: boolean
  htmlFor?: string
}
const BaseReply = ({ user, comment, replyLength, link, href, sendReply, setSendReply, maxH, htmlFor }: IProps) => {
  const [like, setLike] = useState<boolean>(false)
  return (
    <>
      <div className='flex items-center mb-4 gap-4'>
        <Link href={`/user/${user.username}`}>
          <Avatar src={user.avatar} alt={user.username} />
        </Link>
        <Link href={`/user/${user.username}`}>{user.username}</Link>
      </div>
      <div>
        {link ? (
          <Link href={href ? href : '/'}>
            <p className={`text-hover overflow-auto ${maxH ? '' : 'max-h-20'}`}>{comment.text}</p>
          </Link>
        ) : (
          <p className={`overflow-auto ${maxH ? '' : 'max-h-20'}`}>{comment.text}</p>
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
            {like ? `${Number(comment.like) + 1}` : comment.like}
          </span>
          <span className='flex gap-2 cursor-default'>
            <label htmlFor={htmlFor ? htmlFor : ''}>
              <Tooltip title="Reply">
                <ReplyIcon className='cursor-pointer' onClick={(() => setSendReply(!sendReply))} />
              </Tooltip>
            </label>
            {replyLength > 0 && replyLength}
          </span>
        </div>
      </div>
    </>
  )
}

export default BaseReply