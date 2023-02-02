import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import Image from 'next/image';
import { Avatar, Tooltip } from '@mui/material';
import Link from 'next/link';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import Reply from './reply';
import SendComment from './sendComment';

interface IProps {
  data: {
    text: string
    user: {
      avatar: string
      username: string
    }
    like: number
    reply: {
      text: string
      user: {
        avatar: string
        username: string
      }
      like: number
    }[]
  }
}
const Comment = ({ data }: IProps) => {
  const [like, setLike] = useState<boolean>(false)
  const [reply, setReply] = useState<boolean>(false)

  return (
    <>
      <div className='relative max-w-2xl rounded-lg p-4 border border-neutral-500 bg-neutral-800 max-h-100 overflow-hidden'>
        <Link href="/">
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-zinc-900/50 z-10'></div>
        </Link>
        <div className='max-w-2xl rounded-sm p-4 border border-neutral-500 bg-neutral-900 relative z-20'>
          <div className='flex items-center mb-4 gap-4'>
            {/* <Image src={data.user.avatar} alt={data.user.avatar} width={100} height={100} className='' /> */}
            <Link href={data.user.username}>
              <Avatar src={data.user.avatar} alt={data.user.username} />
            </Link>
            <Link href={data.user.username}>{data.user.username}</Link>
          </div>
          <div>
            <Link href="/">
              <p className='text-hover'>{data.text}</p>
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
                {like ? `${data.like + 1}` : data.like}
              </span>
              <span className='flex gap-2 cursor-default'>
                <Tooltip title="Reply">
                  <ReplyIcon className='cursor-pointer' onClick={() => setReply(!reply)} />
                </Tooltip>
                13
              </span>
            </div>
          </div>

          {reply && (
            <SendComment onClose={setReply} />
          )}

        </div>
        <div>
          {data.reply.map(rep => (
            <Reply data={rep} />
          ))}
        </div>
        {data.reply.length > 1 &&
          <Link href="/">
            <div className='z-20 absolute bottom-0 left-0 right-0 p-3 flex justify-center bg-neutral-900/75 shadow-2xl'>
              show more
            </div>
          </Link>}
      </div>
    </>
  )
}

export default Comment