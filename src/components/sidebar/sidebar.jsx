import React from 'react';
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
export default function sidebar() {
  return (
  <div className='sidebar'>
      <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Dashbored</h3>  
            <ul className='sidebarList'>
                <li className='sidebarListeItem active'>
                    <LineStyleIcon className='sidebarIcon'/> Home
                </li>
                <li className='sidebarListeItem'>
                    <TimelineIcon className='sidebarIcon'/> Analaytics
                </li>
                <li className='sidebarListeItem'>
                    <TrendingUpIcon className='sidebarIcon'/> sales
                </li>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Quick Menu</h3>  
            <ul className='sidebarList'>
                <li className='sidebarListeItem'>
                    <LineStyleIcon className='sidebarIcon'/> Users
                </li>
                <li className='sidebarListeItem'>
                    <TimelineIcon className='sidebarIcon'/> Products
                </li>
                <li className='sidebarListeItem'>
                    <TrendingUpIcon className='sidebarIcon'/> transactions
                </li>
                <li className='sidebarListeItem'>
                    <TrendingUpIcon className='sidebarIcon'/> reports
                </li>
            </ul>
            
          </div>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Notifications</h3>  
            <ul className='sidebarList'>
                <li className='sidebarListeItem'>
                    <LineStyleIcon className='sidebarIcon'/> maail
                </li>
                <li className='sidebarListeItem'>
                    <TimelineIcon className='sidebarIcon'/> feedback
                </li>
                <li className='sidebarListeItem'>
                    <TrendingUpIcon className='sidebarIcon'/> messages
                </li>
            
            </ul>
            
          </div>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>staff</h3>  
            <ul className='sidebarList'>
                <li className='sidebarListeItem'>
                    <LineStyleIcon className='sidebarIcon'/> Manage
                </li>
                <li className='sidebarListeItem'>
                    <TimelineIcon className='sidebarIcon'/>Analytics
                </li>
                <li className='sidebarListeItem'>
                    <TrendingUpIcon className='sidebarIcon'/> reports
                </li>
            
            </ul>
            
          </div>
      </div>
  </div>);
}
