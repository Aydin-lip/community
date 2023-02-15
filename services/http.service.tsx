import axios from 'axios'

const httpService = axios.create({
  baseURL: "/api",
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

export const getInfo = (token: string) => {
  return httpService.get(`/get-info`, {
    headers: {
      token
    }
  })
}