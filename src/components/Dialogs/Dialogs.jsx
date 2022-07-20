import React from 'react';
import "./Dialogs.css";
import Message from "./Message.jsx"

import DialogsItem from "./DialogsItem";
let massageLog=[
  {id:1,message:" Hello join my project"},
  {id:1,message:" Welcome to my project"},
  {id:2,message:" Hello thank you for inviting me to the project"},
  {id:2,message:" i will see u at the project venue"}
];
let dialogNames=[
  {id:1,name:"Jacky Chan"},
  {id:2,name:"Jack Chin"},
];
function Dialogs(){
  return(
<div className="Dialogs">
    <div className="dialog">
     {dialogNames.map((e)=><DialogsItem id={e.id} name={e.name}/>)}
    </div>

    <div className="messages">
      {massageLog.map((e)=><Message id={e.id} message={e.message}/>)}
      
      <input placeholder="enter message"/>
      <br/>
      <button>send</button>
    </div>

  </div>
  );
}
export default Dialogs;
