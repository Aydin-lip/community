import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Tooltip } from '@mui/material';
import Link from 'next/link';
import { red } from '@mui/material/colors';
import { useState,Dispatch ,SetStateAction} from 'react';
import { IComment } from '@/models/comment';

interface IProps {
  data: IComment
  link: boolean
  href?: string
  sendReply: boolean
  setSendReply: Dispatch<SetStateAction<boolean>>
}
const BaseReply = ({ data, link, href, sendReply, setSendReply }: IProps) => {
  const [like, setLike] = useState<boolean>(false)
  return (
    <>
      <div className='flex items-center mb-4 gap-4'>
        <Link href={data.user.username}>
          <Avatar src={data.user.avatar} alt={data.user.username} />
        </Link>
        <Link href={data.user.username}>{data.user.username}</Link>
      </div>
      <div>
        {link ? (
          <Link href={href ? href : '/'}>
            <p className='text-hover h-20 overflow-auto'>{data.text}</p>
          </Link>
        ) : (
          <p className='h-20 overflow-auto'>{data.text}</p>
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
            {like ? `${data.like + 1}` : data.like}
          </span>
          <span className='flex gap-2 cursor-default'>
            <Tooltip title="Reply">
              <ReplyIcon className='cursor-pointer' onClick={(() => setSendReply(!sendReply))} />
            </Tooltip>
            {data.reply?.length}
          </span>
        </div>
      </div>
    </>
  )
}

export default BaseReply