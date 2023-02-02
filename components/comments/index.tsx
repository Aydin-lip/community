import Comment from "./comment"

const Comments = () => {

  let comments = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum, accusantium ex vitae provident nostrum magni quaerat ipsum possimus inventore repellat sequi porro?",
      user: {
        avatar: "./image/avatar.png",
        username: "aydin.lip"
      },
      like: 187,
      reply: [{
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
        user: {
          avatar: "./image/avatar.png",
          username: "sixnine"
        },
        like: 7,
      },{
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum.",
        user: {
          avatar: "./image/avatar.png",
          username: "sixnine"
        },
        like: 7,
      },{
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum.",
        user: {
          avatar: "./image/avatar.png",
          username: "sixnine"
        },
        like: 7,
      }]
    }
  ]

  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center gap-4 flex-col my-4">
          {comments.map(comment => (
            <Comment data={comment} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Comments


// user
//   first name
//   last name
//   username
//   birthday
//   bio
//   avatar
//   email
//   phone

// comment
//   user
//     avatar
//     username

//   text
//     like
//     reply
