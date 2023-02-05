import Image from "next/image"
import BoxCommentUser from "@/components/comments/boxComment/user"

const UserOne = () => {

  let comments = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum, accusantium ex vitae provident nostrum magni quaerat ipsum possimus inventore repellat sequi porro?",
      user: {
        avatar: "/image/avatar.png",
        username: "aydin.lip"
      },
      like: 187,
      reply:
        [{
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: [
            {
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
              user: {
                avatar: "/image/avatar.png",
                username: "sixnine"
              },
              like: 7,
              reply: []
            },
            {
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
              user: {
                avatar: "/image/avatar.png",
                username: "sixnine"
              },
              like: 7,
              reply: [{
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
                user: {
                  avatar: "/image/avatar.png",
                  username: "sixnine"
                },
                like: 7,
                reply: []
              }]
            }]
        }, {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: [{
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
            user: {
              avatar: "/image/avatar.png",
              username: "sixnine"
            },
            like: 7,
            reply: []
          }]
        }, {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: []
        }]
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum, accusantium ex vitae provident nostrum magni quaerat ipsum possimus inventore repellat sequi porro?",
      user: {
        avatar: "/image/avatar.png",
        username: "aydin.lip"
      },
      like: 187,
      reply:
        [{
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: [
            {
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
              user: {
                avatar: "/image/avatar.png",
                username: "sixnine"
              },
              like: 7,
              reply: []
            },
            {
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
              user: {
                avatar: "/image/avatar.png",
                username: "sixnine"
              },
              like: 7,
              reply: [{
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
                user: {
                  avatar: "/image/avatar.png",
                  username: "sixnine"
                },
                like: 7,
                reply: []
              }]
            }]
        }, {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: [{
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
            user: {
              avatar: "/image/avatar.png",
              username: "sixnine"
            },
            like: 7,
            reply: []
          }]
        }, {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: []
        }]
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum, accusantium ex vitae provident nostrum magni quaerat ipsum possimus inventore repellat sequi porro?",
      user: {
        avatar: "/image/avatar.png",
        username: "aydin.lip"
      },
      like: 187,
      reply:
        [{
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: [
            {
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
              user: {
                avatar: "/image/avatar.png",
                username: "sixnine"
              },
              like: 7,
              reply: []
            },
            {
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
              user: {
                avatar: "/image/avatar.png",
                username: "sixnine"
              },
              like: 7,
              reply: [{
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
                user: {
                  avatar: "/image/avatar.png",
                  username: "sixnine"
                },
                like: 7,
                reply: []
              }]
            }]
        }, {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: [{
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, esse adipisci ea voluptatum eligendi modi reprehenderit delectus nostrum aliquid aut repellendus officia doloremque harum dolor aperiam ex nulla a ab.",
            user: {
              avatar: "/image/avatar.png",
              username: "sixnine"
            },
            like: 7,
            reply: []
          }]
        }, {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eaque amet aspernatur delectus sunt deserunt in dolorum.",
          user: {
            avatar: "/image/avatar.png",
            username: "sixnine"
          },
          like: 7,
          reply: []
        }]
    }]

  return (
    <>
      <div className="container flex justify-center">
        <div className="max-w-4xl">

          <div className="border-b pb-4">
            <div className="flex justify-center gap-4 p-4 cursor-default">
              <div>
                <Image
                  src={'/image/avatar.png'}
                  alt="aydin"
                  width={200} height={200}
                  className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-wider">aydin.lip</span>
                <span className="opacity-70 p-2">Aydin Azakh</span>
                <span className="font-medium mt-auto ml-6">Email: example@gmail.com</span>
                <span className="font-medium my-1 ml-4">Phone: 09037336131</span>
                <span className="font-medium mb-2">Birthday: 2005/07/03</span>
              </div>
            </div>
            <div className="my-4 px-12 text-lg font-medium text-slate-300">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos dignissimos, ab delectus rem quis blanditiis cum voluptate qui eligendi. Inventore porro non, suscipit error ullam rerum similique exercitationem molestias.</p>
            </div>
          </div>

          <div className="flex justify-center flex-col p-8 gap-4">

            {comments.map((comment, index) => (
              <BoxCommentUser key={index} comment={comment} />
            ))}

          </div>


        </div>
      </div>
    </>
  )
}

export default UserOne