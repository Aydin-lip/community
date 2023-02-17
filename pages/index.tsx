import BoxCommentHome from "@/components/comments/boxComment/home"
import { ICommentt, IUserInfo, IReply, IFullComment, IReplyByUser } from "@/models/comment"
import { getAllInfo, getAllReply, getComments } from "@/services/http.service"

interface IProps {
  comments: IFullComment[]
}
const Index = ({ comments }: IProps) => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center gap-4 flex-col my-4">
          {comments.map(comment => (
            <BoxCommentHome key={comment.id} data={comment} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  let allComment: ICommentt[] = []
  let allUser: IUserInfo[] = []
  let allReply: IReply[] = []
  try {
    const resultComment = await getComments()
    const resultInfo = await getAllInfo()
    const resultReply = await getAllReply()
    allComment = resultComment.data.comments
    allUser = resultInfo.data.users
    allReply = resultReply.data.reply
  } catch (error) { }


  let fullComments: IFullComment[] = []
  allComment.map(comment => {
    let user = allUser?.find(u => u.id === comment.id_user)
    let reply = allReply.filter(r => r.reply_token === comment.token)
    let fullReply: IReplyByUser[] = []
    reply.map(r => {
      let userReply = allUser?.find(u => u.id === r.id_user)
      fullReply.push({...r, user: {username: userReply?.username || "", avatar: userReply?.avatar || ""}})
    })
    fullComments.push({ ...comment, user: { username: user?.username || "", avatar: user?.avatar || "" }, reply: fullReply })
  })

  return {
    props: {
      comments: fullComments
    },
    revalidate: 30
  }

}


export default Index
