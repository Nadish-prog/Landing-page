 import React, {useState} from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {Pets, Mail, Search as SearchIcon, Notifications} from "@mui/icons-material";
import {Style} from "@mui/icons-material";
const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const StyledSearch = styled("div")(({ theme }) => ({
   backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%",
}));

const Icons = styled(Box)(({ theme }) => ({
display:"none",
    gap:"20px",
  alignItems:"center",
    [theme.breakpoints.up('sm')]:{
        display:"flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
     alignItems:"center",
    gap:"10px",
 [theme.breakpoints.up('sm')]:{
        display:"none"

 }
}))


const NavBar = () => {

    const [open,setOpen] = useState(false);

return(
    <>
    <AppBar position="sticky">
       <StyledToolbar>
           <Typography variant="h6" sx={{display :{xs:"none",sm:"block"}}}>Nadish</Typography>
           <Pets sx={{display :{xs:"block",sm:"none"}}}/>
          <StyledSearch><InputBase placeholder="Search..." /></StyledSearch>
           <Icons>
               <Badge badgeContent={4} color="error">
                   <Mail color="action" sx={{
                          color:"white"
                   }}/>
               </Badge>
               <Badge badgeContent={4} color="error">
                   <Notifications color="action" sx={{
                       color:"white"
                   }} />
               </Badge>
           <Avatar onClick={()=>setOpen(!open)}
               src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           sx={{
               width:35,
               height:35
           }}/>
           </Icons>
           <UserBox>
               <Avatar  onClick={()=>setOpen(!open)}  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                       sx={{
                           width:35,
                           height:35
                       }}/>
                <Typography variant="h6" >Nadish</Typography>
           </UserBox>
       </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            // anchorEl={anchorEl}
            open={open}
            onClose={(e)=>setOpen(false)}
            // onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
    </>
)};

export default NavBar;