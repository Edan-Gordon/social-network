import React from 'react';
import "./Dialogs.css";
import Message from "./Message.jsx"

import DialogsItem from "./DialogsItem";

let postText=React.createRef()


function Dialogs(props){
  let addMessage=()=>{
    let text=postText.current.value;
    props.addMessage(text)
  }
  return(
<div className="Dialogs">
    <div className="dialog">
     {props.dialogNames.map((e)=><DialogsItem id={e.id} name={e.name}/>)}
    </div>

    <div className="messages">
      {props.messageLog.map((e)=><Message id={e.id} message={e.message}/>)}
      
      <input ref={postText} placeholder="enter message"/>
      <br/>
      <button onClick={addMessage}>send</button>
    </div>

  </div>
  );
}
export default Dialogs;
