import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';
function Header() { 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () =>
  {
    dispatch(logout())
    auth.signOut();

  };
  return (
    <div className='header'> 
        <div className='header_left'> 
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
        <div className='header_search'>
            <SearchIcon />

             
            <input placeholder="Search" type="text"/>

        </div>

        </div>
        <div className='header_right'>
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon={ChatIcon} title='Messaging' />
          <HeaderOption Icon={NotificationsNoneIcon} title='Notifications' />
          <HeaderOption avatar= {true} title='me' 
          onClick={logoutOfApp} />



        </div>
       
    </div>
  )
}

export default Header
