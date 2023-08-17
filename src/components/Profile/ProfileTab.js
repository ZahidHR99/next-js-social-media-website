import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Posts from '../Dashboard/Posts';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PostPublish from '../Dashboard/PostPublish';
import IntroCard from './IntroCard';
import AboutCard from './AboutCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Posts" {...a11yProps(0)} />
                <Tab label="About" {...a11yProps(1)} />
                <Tab label="Friends" {...a11yProps(2)} />
                <Tab label="Photos" {...a11yProps(3)} />
                <Tab label="Videos" {...a11yProps(4)} />
                <Tab label="Music" {...a11yProps(5)} />
                <Tab label="Pages" {...a11yProps(6)} />
                <Tab label="Group" {...a11yProps(7)} />
                </Tabs>
            </Box>
        
        <CustomTabPanel value={value} index={0}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Item>
                        <IntroCard/>
                    </Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <PostPublish/>
                    <Posts/>
                </Grid>
            </Grid>

        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <AboutCard/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            Friends
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
            Photos
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
            Videos
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
            Music
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
            Pages
        </CustomTabPanel>
        <CustomTabPanel value={value} index={7}>
            Group
        </CustomTabPanel>
        </Box>
    </Container>
  );
}
