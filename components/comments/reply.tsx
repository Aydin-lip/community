import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Tooltip } from '@mui/material';
import Link from 'next/link';
import { red } from '@mui/material/colors';
import { useState } from 'react';

interface IProps {
  data: {
    text: string
    user: {
      avatar: string
      username: string
    }
    like: number
  }
}
const Reply = ({ data }: IProps) => {
  const [like, setLike] = useState<boolean>(false)

  return (
    <>
      <div className='flex scale-90'>
        <div className='w-12 h-auto flex justify-center'>
          <div className='bgColorThem w-0.5 h-112 rounded-lg relative top-n-58'></div>
          <div className='bgColorThem w-0.5 h-4 relative top-1/2 left-1.5 rotate-90'></div>
        </div>
        <div className='max-w-xl-38 rounded-sm p-4 border border-neutral-500 bg-neutral-900 mt-2'>
          <div className='flex items-center mb-4 gap-4'>
            <Link href={data.user.username}>
              <Avatar src={data.user.avatar} alt={data.user.username} />
            </Link>
            <Link href={data.user.username}>{data.user.username}</Link>
          </div>
          <div>
            <Link href="/">
              <p className='text-hover h-20 overflow-auto'>{data.text}</p>
            </Link>
            <div className='flex justify-end items-center gap-6 mt-4'>
              <span className='flex gap-2 cursor-default'>
                {like ? (
                  <FavoriteIcon sx={{ color: red[500] }} className='cursor-pointer' onClick={() => setLike(!like)} />
                ) : (
                  <Tooltip title="Like">
                    <FavoriteBorderIcon className='cursor-pointer' onClick={() => setLike(!like)} />
                  </Tooltip>
                )}
                {like ? data.like++ : data.like}
              </span>
              <span className='flex gap-2 cursor-default'>
                <Tooltip title="Reply">
                  <ReplyIcon className='cursor-pointer' />
                </Tooltip>
                13
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reply