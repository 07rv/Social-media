import React from 'react'
import { Box, ImageList, ImageListItem, Typography,ImageListItemBar,
  List,  ListItemText,Divider, ListItemAvatar, ListItem} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import RemySharp from "../Images/RemySharp.jpeg"; 
import TravisHoward from "../Images/TravisHoward.jpg";
import CindyBaker from "../Images/CindyBaker.jpeg";
import AgnesWalker from "../Images/AgnesWalker.jpeg";
import TrevorHenderson from "../Images/TrevorHenderson.jpeg";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={10}>
          <Avatar alt="Remy Sharp" src={RemySharp} />
          <Avatar alt="Travis Howard" src={TravisHoward} />
          <Avatar alt="Cindy Baker" src={CindyBaker} />
          <Avatar alt="Agnes Walker" src={AgnesWalker} />
          <Avatar alt="Trevor Henderson" src={TrevorHenderson} />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100}>Posts</Typography>
        
        <ImageList cols={2} >
          <ImageListItem sx={{m:0.5}}>
          <img
            width="10px" height="600"
            src={`${TravisHoward}?w=300&fit=crop&auto=format`}
            srcSet={`${TravisHoward}?w=300&fit=crop&auto=format&dpr=2 2x`}
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
            src={`${AgnesWalker}?w=300&fit=crop&auto=format`}
            srcSet={`${AgnesWalker}?w=300&fit=crop&auto=format&dpr=2 2x`}
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
            src={`${CindyBaker}?w=300&fit=crop&auto=format`}
            srcSet={`${CindyBaker}?w=300&fit=crop&auto=format&dpr=2 2x`}
            alt={"RVhuui"}
            loading="lazy"
          />
            <ImageListItemBar 
              title="Rohit verma"
              subtitle="1234"
          />
          </ImageListItem>


        </ImageList>


        <Typography variant='h6' fontWeight={100}>Conversion</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={TravisHoward} />
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
  )
}

export default Rightbar