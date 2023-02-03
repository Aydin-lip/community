import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

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

          <CssTextField type="text" label="Username" size="small" id="custom-css-outlined-input" />
          <CssTextField type="email"  label="Email" size="small" id="custom-css-outlined-input" placeholder='johndoe@email.com' />
          <CssTextField type="password" label="Password" size="small" id="custom-css-outlined-input" />
          <CssTextField type="password" label="Confirm Password" size="small" id="custom-css-outlined-input" />

          <Button size="medium" className='mt-2'>Sign up</Button>
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
    </>
  );
}

export default SignUp