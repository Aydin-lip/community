import BoxComment from '@/components/comments/boxComment/box';
import { IComment, ICommentt, IReply, IUserInfo } from '@/models/comment';
import { getCommentByToken, getComments, getInfoByUsernameId, getReplyByToken } from '@/services/http.service';
import { GetStaticProps } from 'next';

interface IProps {
  comment: ICommentt
  user: IUserInfo
  reply: IReply[]
}
const OneComment = ({ comment, user, reply }: IProps) => {
  return (
    <BoxComment comment={comment} user={user} reply={reply} />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let token = context.params?.token
  let comment: ICommentt
  let user: IUserInfo
  let reply: IReply[]
  try {
    const resultComment = await getCommentByToken(token as string)
    comment = resultComment.data.comment[0]

    const resultUser = await getInfoByUsernameId(comment.id_user)
    user = resultUser.data.user

    const resultReply = await getReplyByToken({ reply_token: comment.token })
    reply = resultReply.data.reply

  } catch (err) {
    console.log(err)
    return {
      notFound: true
    }
  }

  return {
    props: {
      comment,
      user,
      reply
    }
  }
}

export const getStaticPaths = async () => {
  let allComment: ICommentt[] = []
  try {
    const resultComment = await getComments()
    allComment = resultComment.data.comments
  } catch (err) { }

  let paths = allComment.map(c => ({ params: { token: c.token } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default OneComment