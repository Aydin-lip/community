import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { signIn } from '@/services/http.service';
import { useRouter } from 'next/router';
import Alert from '@mui/material/Alert';
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

const SignIn = () => {
  const [username, setUsername] = useState<string>("")
  const [errUsername, setErrUsername] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const [errPassword, setErrPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
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


  const signinHandler = () => {
    if (username.length < 4) {
      setErrUsername(true)
    }
    if (password.length < 6) {
      setErrPassword(true)
    }
    if (username.length >= 4 && password.length >= 6) {
      setLoading(true)
      signIn({ username, password })
        .then(res => {
          setLogin(true)
          setLoading(false)
          setUsername("")
          setPassword("")
          context?.user.setInfo(res.data.user)
          localStorage.setItem("token", res.data.user.token)
          router.replace('/')
          setTimeout(() => {
            setLogin(false)
          }, 5000);
        })
        .catch(err => {
          setLoading(false)
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 5000);
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
            <Typography level="body2">Sign in to continue.</Typography>
          </div>

          <div>
            <CssTextField
              error={errUsername}
              type="text"
              label="Username"
              size="small"
              value={username}
              onChange={e => {
                setUsername(e.target?.value)
                setErrUsername(false)
              }}
              className='w-full'
            />
            {errUsername &&
              <span className='text-xs text-red-600'>Username must be at least 4 characters long</span>
            }
          </div>
          <div>
            <CssTextField
              error={errPassword}
              type="password"
              label="Password"
              size="small"
              value={password}
              onChange={e => {
                setPassword(e.target?.value)
                setErrPassword(false)
              }}
              className='w-full'
            />
            {errPassword &&
              <span className='text-xs text-red-600'>Password must be at least 6 characters long</span>
            }
          </div>
          <Button
            size="medium"
            className={`mt-2`}
            onClick={signinHandler}
            style={loading ? { color: '#ffffff5c', cursor: 'progress' } : {}}
            disabled={loading}
          >Sign in</Button>
          <Typography
            endDecorator={<Link href="sign-up" className='text-blue-600'>Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            <span className="cursor-default">
              Don&apos;t have an account?
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
            The username or password is wrong.
          </Alert>
        }
        {login &&
          <Alert
            variant="outlined"
            severity="success"
          >
            You have successfully logged in.
          </Alert>
        }
      </div>
    </>
  );
}


export default SignIn