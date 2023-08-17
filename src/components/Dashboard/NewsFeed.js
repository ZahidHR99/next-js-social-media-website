import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Posts from './Posts';
import ChatList from './ChatList';
import Asides from './Asides';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NewsFeed() {
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>
                        <Asides/>
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Posts/>
                </Grid>
                <Grid item xs>
                    <Item>
                        <ChatList/>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </Container>
  );
}
