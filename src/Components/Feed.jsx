import React from 'react';
import Post from "./Post";
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Checkbox, Collapse,
    IconButton,
    Typography,

} from "@mui/material";
import {ExpandMore, Share, Favorite, MoreVert, FavoriteBorder} from "@mui/icons-material";

function Feed(props) {
    let handleExpandClick;
    return (
        <>
<Box  flex={4} p={2} >

    {/*<Card >*/}
    {/*    <CardHeader*/}
    {/*        avatar={*/}
    {/*            <Avatar sx={{ backgroundColor:"red" }} aria-label="recipe">*/}
    {/*                R*/}
    {/*            </Avatar>*/}
    {/*        }*/}
    {/*        action={*/}
    {/*            <IconButton aria-label="settings">*/}
    {/*                <MoreVert />*/}
    {/*            </IconButton>*/}
    {/*        }*/}
    {/*        title="Shrimp and Chorizo Paella"*/}
    {/*        subheader="September 14, 2016"*/}
    {/*    />*/}
    {/*    <CardMedia*/}
    {/*        component="img"*/}
    {/*        height="20%"*/}
    {/*        image="https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"*/}
    {/*        alt="Paella dish"*/}
    {/*    />*/}
    {/*    <CardContent>*/}
    {/*        <Typography variant="body2" color="text.secondary">*/}
    {/*            This impressive paella is a perfect party dish and a fun meal to cook*/}
    {/*            together with your guests. Add 1 cup of frozen peas along with the mussels,*/}
    {/*            if you like.*/}
    {/*        </Typography>*/}
    {/*    </CardContent>*/}
    {/*    <CardActions disableSpacing>*/}
    {/*        <IconButton aria-label="add to favorites">*/}
    {/*            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{*/}
    {/*                color:"red"*/}
    {/*            }} />} />*/}
    {/*        </IconButton>*/}
    {/*        <IconButton aria-label="share">*/}
    {/*            <Share />*/}
    {/*        </IconButton>*/}

    {/*    </CardActions>*/}

    {/*</Card>*/}

    <Post/>
    <Post/>
    <Post/>
</Box>
        </>
    );
}

export default Feed;