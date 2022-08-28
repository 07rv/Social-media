import React, { useState } from 'react'
import { Fab, Tooltip, Box, Modal, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button
 } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyleModal = styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: "center",
    gap: "10px",
    marginBottom: "5px",
})

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
                title="Delete" sx={{position: "fixed", bottom:20, 
                left:{xs:"calc(50%)", md:30} }}>
            <Fab color='primary' aria-label='add'>
                <AddIcon/>
            </Fab>
        </Tooltip>

        <StyleModal

            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={280} bgcolor={"background.default"} 
                color={"text.primary"}
                borderRadius={5} p={3}>
                <Typography variant='h6' color="gray" textAlign="center">
                    Create Post
                </Typography>

                <UserBox>
                    <Avatar
                    sx={{width:30, height: 30}}
                    src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg'
                />
                    <Typography fontWeight={500} variant='span'>Rv's</Typography>
                </UserBox>

                <TextField
                    sx={{width: "100%"}}
                    multiline
                    rows={3}
                    variant='standard'
                    placeholder="What's on your mind"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotionsIcon color='primary'/>
                    <ImageIcon color='secondary'/>
                    <VideoCameraBackIcon color='success'/>
                    <PersonAddIcon color='error'/>
                </Stack>

                <ButtonGroup fullWidth
                    variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}>
                        <DateRangeIcon/>
                    </Button>
                </ButtonGroup>
            </Box>
        </StyleModal>
    </>
  )
}

export default Add