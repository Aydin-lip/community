import { useRouter } from "next/router";
import { useEffect } from "react";


const Login = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("login/sign-in")
    console.log(router)
  }, [])

  return (
    <>
    
    </>
  );
}

export default Login