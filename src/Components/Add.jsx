import React from 'react';
import {
    Avatar,
    Box, Button,
    ButtonGroup,
    Fab,
    IconButton,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
function DeleteIcon() {
    return null;
}
const StyledModal= styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})

const Add = (props) => {
    const [open, setOpen] = React.useState(false);

    return(
        <>
            <Tooltip onClick={()=>setOpen(true)}
                title="Add post" sx={{
                position:"fixed",
                bottom:20,
                left:{
                    xs:"calc(50% - 25px)",
                    md:30}
            }}>
                <Fab color="primary" aria-label="add">
                <AddIcon/>
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
                  <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp"
                                src="https://thispersondoesnotexist.com/"
                        sx={{
                            width:30,
                            height:30
                        }}/>
                        <Typography fontWeight={500}>Nadish</Typography>
                    </UserBox>
                    <TextField
                        sx={{
                            width:"100%"
                        }}
                        id="standard-multiline-flexible"
                        label="What's on your mind?"
                        multiline
                        maxRows={7}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={1.5} mb={3}>
                        <EmojiEmotions color="primary"/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="success"/>
                        <PersonAdd color="error"/>
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained" aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button
                        sx={{
                            width:"100px"
                        }}
                        ><DateRange/></Button>

                    </ButtonGroup>
                </Box>

            </StyledModal>
        </>
    );
}


export default Add;