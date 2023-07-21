import Image from "next/image"
import BoxCommentUser from "@/components/comments/boxComment/user"
import { GetStaticProps } from "next"
import { getAllInfo, getAllReply, getCommentsByUsername, getInfoByUsernameId } from "@/services/http.service"
import { IReply, IUserInfo } from "@/models/comment"
import { IComment } from "@/db/mysql/model"

interface IProps {
  info: IUserInfo
  comments: IComment[]
  replys: IReply[]
}
const UserOne = ({ info, comments, replys }: IProps) => {
  return (
    <>
      <div className="container flex justify-center">
        <div className="max-w-4xl">

          <div className="border-b pb-4">
            <div className="flex max-sm:flex-col max-sm:items-center justify-center gap-4 p-4 cursor-default">
              <div>
                <Image
                  src={info.avatar}
                  alt={info.username}
                  width={200} height={200}
                  className="rounded-full" />
              </div>
              <div className="flex flex-col max-sm:items-center">
                <span className="font-extrabold text-2xl tracking-wider">{info.username}</span>
                <span className="opacity-70 p-2">{info.first_name} {info.last_name}</span>
                <span className="font-medium mt-auto sm:ml-6">Email: {info.email}</span>
                <span className="font-medium my-1 sm:ml-4">Phone: {info.phone}</span>
                <span className="font-medium mb-2">Birthday: {info.birthday}</span>
              </div>
            </div>
            <div className="sm:my-4 px-4 sm:px-12 text-lg font-medium text-slate-300">
              <p>{info.bio}</p>
            </div>
          </div>

          <div className="flex justify-center flex-col p-8 gap-4">
            {comments?.map(comment => (
              <BoxCommentUser
                key={comment.id}
                comment={comment}
                user={info}
                replys={replys.filter(rep => rep.reply_token === comment.token)} />
            ))}
          </div>
          
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const username = context.params?.username as string
  let user: IUserInfo = {
    id: 0,
    first_name: "",
    last_name: "",
    username: "",
    birthday: "",
    bio: "",
    avatar: "",
    email: "",
    phone: ""
  }
  let comments: IComment[] = []
  let replys: IReply[] = []

  await getInfoByUsernameId(username)
    .then(res => {
      user = res.data.user
    })

  if (user.id === 0) {
    return {
      notFound: true
    }
  }

  await getCommentsByUsername(username)
    .then(res => {
      comments = res.data.comments
    })
  await getAllReply()
    .then(res => {
      replys = res.data.reply
    })

  return {
    props: {
      info: user,
      comments,
      replys
    }
  }
}

export const getStaticPaths = async () => {
  let paths = [{}]
  let users: IUserInfo[] = []
  await getAllInfo()
    .then(res => {
      users = res.data.users
    })

  users.map(u => paths.push({ params: { username: u.username } }))
  paths.shift()

  return {
    paths,
    fallback: 'blocking'
  }
}

export default UserOne