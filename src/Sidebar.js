import { Avatar } from '@mui/material'
import React from 'react'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"
import { useSelector } from 'react-redux';
function Sidebar() {
  const user = useSelector  (selectUser);
    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
           <span className='sidebar_hash'>#
            <p>{topic}</p>

           </span>
        </div>
    )
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" alt=""/>
        <Avatar src={user.photoUrl} className='sidebar_avatar' >
          {
            user.email[0]}</Avatar>
          
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4></div>
        <div className='sidebar_stats'>
           <div className='sidebar_stat'>
            <p>who viewed you</p>
            <p className='sidebar_statNumber'>2,543</p>
            </div>
           <div className='sidebar_stat'>
           <p>Views on post</p>
            <p className='sidebar_statNumber'>2,448</p>

           </div>
           </div>
           <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem('react js')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}
           

            

            

           </div>
        </div>

  );
}

export default Sidebar
