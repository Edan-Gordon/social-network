import React from 'react';
import "./profile.css"

import ProfileInfo from "./ProfileInfo.jsx"
import Posts from "./posts/Posts.jsx"

function Profile(){
  return(
  <div className="profile">
    <ProfileInfo/>
    <Posts/>
  </div>
  );
}
export default Profile;