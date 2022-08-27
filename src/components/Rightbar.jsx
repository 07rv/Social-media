import React from 'react'
import { Box, ImageList, ImageListItem, Typography,ImageListItemBar,
} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/12581576/pexels-photo-12581576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/13244387/pexels-photo-13244387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/13338230/pexels-photo-13338230.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/12928872/pexels-photo-12928872.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100}>Posts</Typography>
        
        <ImageList cols={2} >
          <ImageListItem sx={{m:0.5}}>
          <img
            width="10px" height="600"
            src={`${"https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"}?w=300&fit=crop&auto=format`}
            srcSet={`${"https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"}?w=300&fit=crop&auto=format&dpr=2 2x`}
            alt={"RVhuui"}
            loading="lazy"
          />
            <ImageListItemBar 
              title="Rohit verma"
              subtitle="1234"
          />
          </ImageListItem>

          <ImageListItem sx={{m:0.5}}>
          <img
            src={`${"https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"}?w=300&fit=crop&auto=format`}
            srcSet={`${"https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"}?w=300&fit=crop&auto=format&dpr=2 2x`}
            alt={"RVhuui"}
            loading="lazy"
          />
            <ImageListItemBar 
              title="Rohit verma"
              subtitle="1234"
          />
          </ImageListItem>

          <ImageListItem sx={{m:0.5}} >
          <img
            src={`${"https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"}?w=300&fit=crop&auto=format`}
            srcSet={`${"https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"}?w=300&fit=crop&auto=format&dpr=2 2x`}
            alt={"RVhuui"}
            loading="lazy"
          />
            <ImageListItemBar 
              title="Rohit verma"
              subtitle="1234"
          />
          </ImageListItem>


        </ImageList>

      </Box>
    </Box>
  )
}

export default Rightbar