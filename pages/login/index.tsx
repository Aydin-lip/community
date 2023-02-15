import { useRouter } from "next/router";
import { useEffect } from "react";


const Login = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      router.replace("/")
    } else {
      router.replace("login/sign-in")
    }
  }, [])

  return (<></>);
}

export default Login