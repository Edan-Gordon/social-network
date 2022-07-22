import React from 'react';
import "./profile.css"

import ProfileInfo from "./ProfileInfo.jsx"
import Posts from "./posts/Posts.jsx"

function Profile(props){
  return(
  <div className="profile">
    <ProfileInfo/>
    <Posts postlog={props.postlog}/>
  </div>
  );
}
export default Profile;