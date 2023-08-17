import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Button, Divider, FormControl, Grid, Input, InputLabel, ListItemAvatar, ListItemButton, ListItemText, OutlinedInput, TextField } from '@mui/material';
import Link from 'next/link';
import PostAction from './PostAction';
import SendIcon from '@mui/icons-material/Send';
const ariaLabel = { 'aria-label': 'description' };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostPublish() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ mb: 2 }}>
        <CardActions disableSpacing>
            <ListItemAvatar>
                <Avatar
                alt=""
                    src="/images/avatar.png"
                />
            </ListItemAvatar>
            <TextField fullWidth label="What's on your mind, Zahid?..." id="fullWidth" />
        </CardActions>

        <Box sx={{ mb: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={1}></Grid>
                <Grid item xs={6} md={8}>
                    <FormControl>
                        <OutlinedInput type="file" sx={{ width: '25ch', height: '5ch' }} placeholder="Please enter text" />
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Button variant="contained" endIcon={<SendIcon />}>Publish</Button>
                </Grid>
            </Grid>
        </Box>
       

    </Card>
  );
}
