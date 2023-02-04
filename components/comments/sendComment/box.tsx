import { Dispatch, SetStateAction } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';


interface IProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}
const SendComment = ({ active, setActive }: IProps) => {
  return (
    <>
      {active &&
        <div className='fixed top-0 left-0 right-0 bottom-0 -z-10' onClick={() => setActive(false)}></div>
      }
      <Paper
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        className={`rounded-3xl w-full shadow-md bg-neutral-200 z-30 ${!active && 'bg-zinc-900 opacity-50'}`}
        onClick={() => setActive(true)}
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="standard"
          size="small"
          maxRows={4}
          multiline
          className='w-full px-3'
          focused={active}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <SendIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SendComment