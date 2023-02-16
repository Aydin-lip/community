import { createContext, useContext, useState } from 'react';

interface IUserInfo {
  id: number
  first_name: string
  last_name: string
  username: string
  birthday: string
  bio: string
  avatar: string
  eamil: string
  phone: string
}

const AppContext = createContext<any>({});


interface IProps {
  children: JSX.Element
}
export function Context({ children }: IProps) {
  const [info, setInfo] = useState<IUserInfo>({
    id: 0,
    first_name: '',
    last_name: '',
    username: '',
    birthday: '',
    bio: '',
    avatar: '',
    eamil: '',
    phone: ''
  })

  return (
    <AppContext.Provider value={{ user: { info, setInfo } }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}