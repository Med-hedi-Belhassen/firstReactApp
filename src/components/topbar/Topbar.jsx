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
              <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/181270176_3953464234701700_4963932868331912823_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=N7TwypBzXxUAX_dGIG-&tn=QbMEh5YNOxS6mRpQ&_nc_ht=scontent.ftun14-1.fna&oh=00_AT-dNFHcSHRa-pevuebG_bQvYA2GiSzQ-pDGc7Rp5qHP7g&oe=6214F5B3" alt="" className="topAvatar" />
          </div>
      </div>
  </div>;
}

