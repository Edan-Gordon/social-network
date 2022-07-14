import React from 'react';
import "./profile.css"

import avatar from "../../img/elon2.jpg"
import Posts from "./posts/Posts.jsx"
function Profile(){
  return(
  <div className="profile">
    <div className="me">
      <img src={avatar}/>
      <p>Elon Musk</p>
    </div>
    <Posts/>
  </div>
  );
}
export default Profile;