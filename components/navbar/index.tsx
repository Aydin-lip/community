import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/image/logo/logo.png'
import { getInfo } from '@/services/http.service';
import { useRouter } from 'next/router';
import { useAppContext } from '@/context/state';


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [login, setLogin] = useState<boolean>(false);
  const router = useRouter()

  let pages = [{
    name: 'home',
    href: '/'
  }, {
    name: 'explore',
    href: '/explore'
  }]
  let settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  let context = useAppContext()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      getInfo()
        .then(res => {
          if (res?.status === 200) {
            setLogin(true)
            context?.user.setInfo(res.data.user)
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

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#15151596',
      },
    },
  });

  return (
    <>
      <div className="mt-16 p-1"></div>
      <ThemeProvider theme={darkTheme}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>

              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Image src={Logo} alt='Logo' width={30} height={30} className='mr-2 d-none d-md-flex' />
              <Typography
                variant="h6"
                noWrap
                component="a"
                // href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                className='cursor-default'
              >
                <span className='textColorThem'>C</span>
                OMM
                <span className='textColorThem'>U</span>
                NITY
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {login && pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link href={`${page.href}`}>
                          {page.name}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>


              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
              <Image src={Logo} alt='Logo' width={30} height={30} className='mr-2 d-flex d-md-none' />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                className='cursor-default'
              >
                <span className='textColorThem'>C</span>
                OMM
                <span className='textColorThem'>U</span>
                NITY
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {login && pages.map((page) => (
                  <Link key={page.name} href={`${page.href}`} onClick={handleCloseNavMenu}>
                    <Button
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>

              {login &&
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Aydin" src="/image/avatar.png" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              }

            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>

    </>
  );
}
export default Navbar;