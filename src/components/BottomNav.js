import * as React from 'react';
import { Link as RouterLink, MemoryRouter as Router, NavLink } from 'react-router-dom';

// import styles from "./BottomNav.css";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import GroupsIcon from '@mui/icons-material/Groups';

export default function LabelBottomNavigation() {

  return (
      <div className="bottomNavClass">
    <BottomNavigation sx={{ width: 1, borderTop: 'solid 1px #e0e0e0'}}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeOutlinedIcon />}
        component={NavLink}
        to="/"
      />
      <BottomNavigationAction
        label="Explore"
        value="explore"
        icon={<SearchOutlinedIcon />}
        component={NavLink}
        to="/explore"
      />
      <BottomNavigationAction
        label="Community"
        value="community"
        icon={<GroupsIcon />}
        component={NavLink}
        to="/community"
      />
      <BottomNavigationAction
      label="My Pixel"
      value="myPixel"
      icon={<AccountCircleOutlinedIcon />}
      component={NavLink}
      to="/u/carter"
      />
    </BottomNavigation>
    </div>
  );
}