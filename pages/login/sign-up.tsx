import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import { Alert, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signUp } from '@/services/http.service';
import { useAppContext } from '@/context/state';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'white'
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      // borderColor: '#f99800b5',
      borderColor: '#0066c6',
    },
  },
});


const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>("")
  const [errUsername, setErrUsername] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [errEmail, setErrEmail] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const [errPassword, setErrPassword] = useState<boolean>(false)
  const [conPassword, setConPassword] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean>(false)

  const router = useRouter()
  let context = useAppContext()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      router.replace("/")
    }
  }, [])

  const signupHandler = () => {
    if (username.length < 4) {
      setErrUsername(true)
    }
    if (!email.includes("@")) {
      setErrEmail(true)
    }
    if (password.length < 6) {
      setErrPassword(true)
    }
    if (username.length >= 4 && email.includes("@") && password.length >= 6 && password === conPassword) {
      setLoading(true)
      signUp({ username, email, password })
        .then(res => {
          setLogin(true)
          setUsername("")
          setEmail("")
          setPassword("")
          setConPassword("")
          context?.user.setInfo(res.data.user)
          localStorage.setItem("token", res.data.user.token)
          router.replace("/")
          setTimeout(() => {
            setLogin(false)
          }, 5000);
          setLoading(false)
        })
        .catch(err => {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 5000);
          setLoading(false)
        })
    }
  }

  return (
    <>
      <div className="flex justify-center items-center p-12">
        <div className="border p-4 rounded-sm flex flex-col gap-4 max-w-xs w-full shadow-lg bg-login">
          <div className='cursor-default'>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign up to continue.</Typography>
          </div>

          <CssTextField error={errUsername} type="text" label="Username" size="small" value={username} onChange={e => { setUsername(e.target.value); setErrUsername(false) }} />
          <CssTextField error={errEmail} type="email" label="Email" size="small" placeholder='johndoe@email.com' value={email} onChange={e => { setEmail(e.target.value); setErrEmail(false) }} />
          <CssTextField error={errPassword} type="password" label="Password" size="small" value={password} onChange={e => { setPassword(e.target.value); setErrPassword(false) }} />
          <CssTextField error={conPassword === password ? false : true} type="password" label="Confirm Password" size="small" value={conPassword} onChange={e => setConPassword(e.target.value)} />

          <Button
            size="medium"
            className='mt-2'
            onClick={signupHandler}
            style={loading ? { color: '#ffffff5c', cursor: 'progress' } : {}}
            disabled={loading}
          >Sign up</Button>
          <Typography
            endDecorator={<Link href="sign-in" className='text-blue-600'>Sign in</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            <span className="cursor-default">
              You have an account?
            </span>
          </Typography>
        </div>
      </div>
      <div className='max-w-lg fixed bottom-0 left-0 p-4'>
        {error &&
          <Alert
            variant="outlined"
            severity="error"
          >
            An account with this username or email already exists.
          </Alert>
        }
        {login &&
          <Alert
            variant="outlined"
            severity="success"
          >
            Your account has been successfully created.
          </Alert>
        }
      </div>
    </>
  );
}

export default SignUp