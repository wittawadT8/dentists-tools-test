'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/store';
import { signOut } from '@/store/slices/userSlice';
import { ROUTER } from '@/utils/constant';

type Props = {}

export default function Header({}: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dentists Tools V. {process.env.NEXT_PUBLIC_APP_VERSION}
          </Typography>

          <Button onClick={() => router.push(ROUTER.HOME)} color="inherit">Home</Button>
          <Button onClick={() => router.push(ROUTER.ABOUT_US)} color="inherit">About us</Button>
          <Button onClick={() => router.push(ROUTER.CONTACT_US)} color="inherit">Contact us</Button>
          <Button onClick={() => router.push(ROUTER.OUR_SERVICES)} color="inherit">Our Services</Button>
          <Button onClick={() => router.push(ROUTER.FAQ)} color="inherit">FAQs</Button>

          <Button onClick={() => dispatch(signOut())} color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}