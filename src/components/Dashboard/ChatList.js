import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';

export default function ChatList() {

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     
          <Link href="/" className='text-decoration'>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="/images/avatar.png"
                  />
                </ListItemAvatar>
                <ListItemText  primary="Zahid HR" />
              </ListItemButton>
            </ListItem>
          </Link>


          <Link href="/" className='text-decoration'>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="/images/avatar.png"
                  />
                </ListItemAvatar>
                <ListItemText  primary="Zahid HR" />
              </ListItemButton>
            </ListItem>
          </Link>


          <Link href="/" className='text-decoration'>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="/images/avatar.png"
                  />
                </ListItemAvatar>
                <ListItemText  primary="Zahid HR" />
              </ListItemButton>
            </ListItem>
          </Link>


          <Link href="/" className='text-decoration'>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="/images/avatar.png"
                  />
                </ListItemAvatar>
                <ListItemText  primary="Zahid HR" />
              </ListItemButton>
            </ListItem>
          </Link>


          <Link href="/" className='text-decoration'>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="/images/avatar.png"
                  />
                </ListItemAvatar>
                <ListItemText  primary="Zahid HR" />
              </ListItemButton>
            </ListItem>
          </Link>


          <Link href="/" className='text-decoration'>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="/images/avatar.png"
                  />
                </ListItemAvatar>
                <ListItemText  primary="Zahid HR" />
              </ListItemButton>
            </ListItem>
          </Link>


          <Link href="/" className='text-decoration'>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="/images/avatar.png"
                  />
                </ListItemAvatar>
                <ListItemText  primary="Zahid HR" />
              </ListItemButton>
            </ListItem>
          </Link>


          <Link href="/" className='text-decoration'>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="/images/avatar.png"
                  />
                </ListItemAvatar>
                <ListItemText  primary="Zahid HR" />
              </ListItemButton>
            </ListItem>
          </Link>

      
        
    </List>
  );
}

