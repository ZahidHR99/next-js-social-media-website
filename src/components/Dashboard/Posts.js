import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Divider, ListItemAvatar, ListItemButton, ListItemText, TextField } from '@mui/material';
import Link from 'next/link';
import PostAction from './PostAction';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Posts() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{  }}>
      
      <CardHeader
        avatar={
          <Link href="/" className='text-decoration'>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="/images/avatar.png"></Avatar>
          </Link>
        }
        action={
          <IconButton aria-label="settings">
            <PostAction/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    

      <CardMedia
        component="img"
        height="194"
        image="/images/1.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <Divider />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{ color: red[500] }} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Divider />

      <CardActions disableSpacing>
          <ListItemAvatar>
            <Avatar
              alt=""
                src="/images/avatar.png"
            />
          </ListItemAvatar>
         <TextField fullWidth label="Write a comment..." id="fullWidth" />
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardActions disableSpacing>
            <ListItemAvatar>
              <Avatar
                alt=""
                  src="/images/avatar.png"
              />
            </ListItemAvatar>
            <CardContent>
              <Typography variant="body2">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
        </CardActions>
       
      </Collapse>

    </Card>
  );
}
