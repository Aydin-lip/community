interface IUser {
    avatar: string
    username: string
}
interface ICommentNoReply {
    text: string
    user: IUser
    like: number    
}
interface One extends ICommentNoReply {
    reply: []
}
interface Two extends ICommentNoReply {
    reply: One[]
}
interface Three extends ICommentNoReply {
    reply: Two[]
}
interface Four extends ICommentNoReply {
    reply: Three[]
}

export interface IComment extends ICommentNoReply {
    reply: One[] | Two[] | Three[] | Four[] 
}