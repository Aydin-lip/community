import { IUser, IUserInfo } from '@/models/comment';
import { getInfo } from '@/services/http.service';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

let defaultUserInfo: IUserInfo = {
  id: 0,
  first_name: '',
  last_name: '',
  username: '',
  birthday: '',
  bio: '',
  avatar: '',
  email: '',
  phone: ''
}
interface IContext {
  info: IUserInfo
  setInfo: (info: IUserInfo) => void
}
const contextDefaultValue: IContext = {
  info: defaultUserInfo,
  setInfo: () => { }
}

const AppContext = createContext<IContext>(contextDefaultValue);


interface IProps {
  children: JSX.Element
}
export function Context({ children }: IProps) {
  const [userInfo, setUserInfo] = useState<IUserInfo>(defaultUserInfo)

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      getInfo()
        .then(res => {
          if (res?.status === 200) {
            setUserInfo(res.data.user)
          }
        })
        .catch(err => {
          if (err?.response?.status === 404) {
            localStorage.removeItem("token")
            router.replace("/login")
          } else {
            alert('Please try again in a few minutes.')
          }
        })
    } else {
      router.replace("/login")
    }
  }, [])

  const setInfo = (info: IUserInfo) => {
    setUserInfo(info)
  }

  let value = {
    info: userInfo,
    setInfo
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}