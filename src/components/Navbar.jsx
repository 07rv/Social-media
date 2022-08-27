import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, InputBase, styled, 
  Toolbar, Typography, Menu, MenuItem } from '@mui/material'
import { Pets, Notifications } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}))

const Icons = styled(Box)(({theme})=>({
  display: 'none',
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  },
  cursor: "pointer",
}))

const UserBox = styled(Box)(({theme})=>({
  display: 'flex',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  },
  cursor: "pointer",
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
          RvVerse
        </Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>
        <Search> <InputBase placeholder='search...'/> </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar
            sx={{width:30, height: 30}}
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg'
            onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            sx={{width:30, height: 30}}
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg'
          />
          <Typography variant='span'>Rv's</Typography>
        </UserBox>
      </StyleToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose = {e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar