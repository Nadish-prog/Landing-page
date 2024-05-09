import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {Home,Pages,People,Settings,LocalMall,Person,Portrait,ModeNight} from "@mui/icons-material";

const SideBar = ({mode,setMode}) => (
        <>
<Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
    <Box sx={{
            position:"fixed",
    }}>
        <List>
                <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                        <Home/>
                                </ListItemIcon>
                                <ListItemText primary="Homepage" />
                        </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                        <Pages/>
                                </ListItemIcon>
                                <ListItemText primary="Pages" />
                        </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                        <People/>
                                </ListItemIcon>
                                <ListItemText primary="Groups" />
                        </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                        <LocalMall/>
                                </ListItemIcon>
                                <ListItemText primary="Marketplace" />
                        </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                        <Person/>
                                </ListItemIcon>
                                <ListItemText primary="Friends" />
                        </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                        <Settings/>
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                        </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                        <Portrait/>
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                        </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                        <ModeNight/>
                                </ListItemIcon>
                                <Switch  onChange={e=>setMode(mode==="light" ?"dark":"light")} />
                        </ListItemButton>
                </ListItem>
        </List>
    </Box>
</Box>
        </>

);

export default SideBar;