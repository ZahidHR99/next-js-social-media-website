import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import HouseIcon from '@mui/icons-material/House';
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FlagIcon from '@mui/icons-material/Flag';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Link from 'next/link';

const Asides = () => {
    return (
        <div>

            <Link href="/" className='text-decoration'>
                <ListItemButton>
                    <ListItemIcon>
                        <HouseIcon />
                    </ListItemIcon>
                    <ListItemText id="" primary="Home" />
                </ListItemButton>
            </Link>

            <Link href="/profile" className='text-decoration'>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar
                            alt=""
                            src="/images/avatar.png"
                            />
                    </ListItemAvatar>
                    <ListItemText  primary="Zahid HR" />
                </ListItemButton>
            </Link>

            <Divider />

            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Link href="/photos" className='text-decoration'>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddPhotoAlternateIcon />
                        </ListItemIcon>
                        <ListItemText id="" primary="Photos" />
                    </ListItemButton>
                </Link>

                <Link href="/music" className='text-decoration'>
                    <ListItemButton>
                        <ListItemIcon>
                            <MusicVideoIcon />
                        </ListItemIcon>
                        <ListItemText id="" primary="Music" />
                    </ListItemButton>
                </Link>

                <Link href="/friends" className='text-decoration'>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText id="" primary="Friends" />
                    </ListItemButton>
                </Link>

                <Link href="/group" className='text-decoration'>
                    <ListItemButton>
                        <ListItemIcon>
                            <Diversity3Icon />
                        </ListItemIcon>
                        <ListItemText id="" primary="Group" />
                    </ListItemButton>
                </Link>

                <Link href="/pages" className='text-decoration'>
                    <ListItemButton>
                        <ListItemIcon>
                            <FlagIcon />
                        </ListItemIcon>
                        <ListItemText id="" primary="Pages" />
                    </ListItemButton>
                </Link>

                <Link href="/newsfeed" className='text-decoration'>
                    <ListItemButton>
                        <ListItemIcon>
                            <NewspaperIcon />
                        </ListItemIcon>
                        <ListItemText id="" primary="News Feed" />
                    </ListItemButton>
                </Link>
            </List>
          

        </div>
    );
};

export default Asides;





