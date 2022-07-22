import React from 'react';
import "./Dialogs.css";
import Message from "./Message.jsx"

import DialogsItem from "./DialogsItem";

function Dialogs(props){
  return(
<div className="Dialogs">
    <div className="dialog">
     {props.dialogNames.map((e)=><DialogsItem id={e.id} name={e.name}/>)}
    </div>

    <div className="messages">
      {props.massageLog.map((e)=><Message id={e.id} message={e.message}/>)}
      
      <input placeholder="enter message"/>
      <br/>
      <button>send</button>
    </div>

  </div>
  );
}
export default Dialogs;
