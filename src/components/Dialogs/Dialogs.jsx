import React from 'react';
import "./Dialogs.css";
import Message from "./Message.jsx"

import DialogsItem from "./DialogsItem";

function Dialogs(){
  return(
  <div className="Dialogs">
    <div className="dialog">
      <DialogsItem id="1" name="Jacky Chan"/>
      <DialogsItem id="2" name="Jack Chin"/>
   
    </div>
    <div className="messages">
      <Message message="wow"/>
      <Message message="how"/>
      <Message message="wow"/>
      <Message message="how"/>
      <input placeholder="enter message"/>
      <br/>
      <button>send</button>
    </div>
  </div>
  );
}
export default Dialogs;
