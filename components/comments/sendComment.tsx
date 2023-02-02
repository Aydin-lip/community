import { Dispatch, SetStateAction } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

interface IProps {
  onClose: Dispatch<SetStateAction<boolean>>
}
const SendComment = ({ onClose }: IProps) => {
  const close = () => onClose(false)
  return (
    <>
      <div className='mt-4'>
        <textarea className='w-full p-2 text-sm outline-none max-h-40'></textarea>
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} className='justify-end mt-2'>
          <Button variant="contained" startIcon={<DeleteIcon />} color='error' onClick={close}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} onClick={close}>
            Send
          </Button>
        </Stack>
      </div>
    </>
  )
}

export default SendComment