import React from 'react';
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
export default function  () {
  return <div className='topbar'>
      <div className='topbarWrapper'>
          <div className="topLeft">
              <span className="logo">Code Me</span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                  <NotificationsNoneIcon/>
                  <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                  <LanguageIcon/>
                  <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                  <SettingsIcon/>
              </div>
          </div>
      </div>
  </div>;
}

