import React from 'react';
import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem, List,
    ListItem, ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";

function RightBar(props) {
    return (
        <>
<Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>

    <Box sx={{
        position:"fixed",
        width:300
    }}>
      <Typography variant="h6" fontWeight="100">Online friends</Typography>
        <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp"
                    src="https://thispersondoesnotexist.com/" />
            <Avatar alt="Travis Howard" src="https://thispersondoesnotexist.com/" />
            <Avatar alt="Cindy Baker" src="https://thispersondoesnotexist.com/" />
            <Avatar alt="Agnes Walker" src="https://thispersondoesnotexist.com/" />
            <Avatar alt="Trevor Henderson" src="https://thispersondoesnotexist.com/" />
            <Avatar alt="Trevor Henderson" src="https://thispersondoesnotexist.com/" />
            <Avatar alt="Trevor Henderson" src="https://thispersondoesnotexist.com/" />
            <Avatar alt="Trevor Henderson" src="https://thispersondoesnotexist.com/" />
        </AvatarGroup>
         <Typography variant="h6" fontWeight="100" mt={2} mb={2}>
             Latest photos
         </Typography>
        <ImageList  cols={3} rowHeight={100} gap={5} >

                <ImageListItem >
                    <img src="https://images.unsplash.com/photo-1714891203404-b25f32706e0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Lilly"/>
                </ImageListItem>
            <ImageListItem >
                <img src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="forest"/>
            </ImageListItem>
            <ImageListItem >
                <img src="https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="beach"/>
            </ImageListItem>

        </ImageList>
        <Typography variant="h6" fontWeight="100" mt={2} >
            Latest Conversation
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>

    </Box>
            </Box>
        </>
    );
}
export default RightBar;
