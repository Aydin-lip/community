import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import Image from 'next/image';
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
  }
}
const Comment = ({ data }: IProps) => {

  const [like, setLike] = useState<boolean>(false)

  return (
    <>
      <div className='max-w-2xl rounded-lg p-4 border border-neutral-500 bg-neutral-800'>
        <div className='max-w-2xl rounded-sm p-4 border border-neutral-500 bg-neutral-900'>
          <div className='flex items-center mb-4 gap-4'>
            {/* <Image src={data.user.avatar} alt={data.user.avatar} width={100} height={100} className='' /> */}
            <Link href={data.user.username}>
              <Avatar src={data.user.avatar} alt={data.user.username} />
            </Link>
            <Link href={data.user.username}>{data.user.username}</Link>
          </div>
          <div>
            <p>{data.text}</p>
            <div className='flex justify-end items-center gap-4'>
              {like ? (
                <FavoriteIcon sx={{ color: red[500] }} className='cursor-pointer' onClick={() => setLike(!like)} />
              ) : (
                <Tooltip title="Like">
                  <FavoriteBorderIcon className='cursor-pointer' onClick={() => setLike(!like)} />
                </Tooltip>
              )}
              <Tooltip title="Reply">
                <ReplyIcon className='cursor-pointer' />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment