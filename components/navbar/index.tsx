import { Avatar, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import Image from "next/image"
import Logo from '@/public/image/logo/logo.png'
import Link from "next/link"
import { useRouter } from "next/router"
import { useAppContext } from "@/context/state"
import IconButton from '@mui/material/IconButton';
import { MouseEvent, useState } from "react"
import DropDown from "./dropdown"

let pages = [{
  name: 'home',
  href: '/'
}, {
  name: 'explore',
  href: '/explore'
}]

const Navbar = () => {
  const [open, setOpen] = useState<null | HTMLElement>(null)
  const router = useRouter()

  const { info, setInfo } = useAppContext()

  const openDropDownHandler = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  return (
    <>
      <div className="mt-16 p-1"></div>
      <div className="fixed z-10 top-0 right-0 left-0 bg-[#121212ad] shadow-xl">
        <div className="px-4 sm:px-6 py-2 sm:py-4 flex justify-between items-center">
          <div className="flex">
            <Link href={'/'}>
              <Image src={Logo} alt='Logo' width={30} height={30} className='mr-2 flex' />
            </Link>
            <Typography
              onClick={() => router.push("/")}
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              className='cursor-default flex'
            >
              <span className='textColorThem'>C</span>
              OMM
              <span className='textColorThem'>U</span>
              NITY
            </Typography>

          </div>
          <div>
            <DropDown>
              <Tooltip title="Open settings">
                <Avatar
                  alt={info.username}
                  src={info.avatar}
                  className="cursor-pointer" />
              </Tooltip>
            </DropDown>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar