import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardContent, Typography } from '@mui/material';

const ProfileCard = () => {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="facebook" description="Social Media Website"/>
      </Head>
      <div>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="380"
                  image="/images/avatar.png"
                  alt="green iguana"
                />
               
              </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={8}>
                <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="380"
                        image="/images/1.jpeg"
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                
              </Grid>
            </Grid>
          </Box>
        </Container>
       
      </div>
    </div>
  );
};

export default ProfileCard;

