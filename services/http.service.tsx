import axios from 'axios'

const httpService = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    'Content-type': 'application/json',
  },
});

export const signIn = (data: { username: string, password: string }) => {
  return httpService.post(`/login/sign-in`, data)
}

export const signUp = (data: { username: string, email: string, password: string }) => {
  return httpService.post(`/login/sign-up`, data)
}

export const getInfo = () => {
  const token = localStorage.getItem("token")
  return httpService.get(`/get-info`, {
    headers: {
      token
    }
  })
}

export const getAllInfo = () => {
  return httpService.get(`/get-info/all`)
}

export const getInfoById = (id: number) => {
  const token = localStorage.getItem("token")
  return httpService.get(`/get-info/id/${id}`, {
    headers: {
      token
    }
  })
}

export const getInfoByUsernameId = (username_id: string | number) => {
  return httpService.get(`/get-info/${username_id}`)
}

interface IUpdateInfo {
  first_name?: string
  last_name?: string
  username?: string
  birthday?: string
  bio?: string
  avatar?: string
  email?: string
  phone?: string
}
export const updateInfo = (data: IUpdateInfo) => {
  const token = localStorage.getItem("token")
  return httpService.post(`/update-user/info`, data, {
    headers: {
      token
    }
  })
}

interface IUpdatePassword {
  username: string
  old_password: string
  new_password: string
}
export const updatePassword = (data: IUpdatePassword) => {
  return httpService.post(`/update-user/password`, data)
}

export const addComment = (data: string) => {
  const token = localStorage.getItem("token")
  return httpService.post(`/comment/add`, data, {
    headers: {
      token
    }
  })
}

export const getComments = () => {
  return httpService.get(`/comment/get`)
}

export const getCommentsByUsername = (username: string) => {
  return httpService.get(`/comment/get/${username}`)
}

export const getCommentByToken = (token: string) => {
  return httpService.get(`/comment/get/token/${token}`)
}

export const deleteCommentById = (id: number) => {
  const token = localStorage.getItem("token")
  return httpService.get(`/comment/delete/${id}`, {
    headers: {
      token
    }
  })
}

export const addReply = (data: { reply_token: string, text: string }) => {
  const token = localStorage.getItem("token")
  return httpService.post(`/reply/add`, data, {
    headers: {
      token
    }
  })
}

export const getReplyByToken = (data: { reply_token: string }) => {
  return httpService.post(`/reply/get`, data)
}

export const getAllReply = () => {
  return httpService.get(`/reply/get/all`)
}

export const deleteReply = (data: { reply_token: string }) => {
  const token = localStorage.getItem("token")
  return httpService.post(`/reply/delete`, data, {
    headers: {
      token
    }
  })
}