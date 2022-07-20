import React from 'react';


import avatar from "../../img/elon2.jpg"


function ProfileInfo(){
  return(
  
    <div className="me">
      <img src={avatar}/>
      <p>Elon Musk</p>
    </div>
    
  
  );
}
export default ProfileInfo;