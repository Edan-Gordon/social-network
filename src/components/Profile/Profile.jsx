import React from 'react';
import "./profile.css"
import avatar_mini from "../../img/elon1.png"
import avatar from "../../img/elon2.jpg"
function Profile(){
  return(
  <div className="profile">
    <div className="me">
      <img src={avatar}/>
      <p>Elon Musk</p>
    </div>
    <div className="posts">
      <input placeholder="write a caption"/>
      <button>add post</button>
      <div className="post">
        <img src={avatar_mini}/>
        <span>Elon Musk</span>
        <p>lorem ipsum</p> 
      </div>
    </div>
  </div>
  );
}
export default Profile;