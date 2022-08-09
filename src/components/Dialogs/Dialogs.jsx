import React from 'react';
import "./Dialogs.css";
import Message from "./Message.jsx"

import DialogsItem from "./DialogsItem";

import {addMessageAC,onMessageChangeAC} from "./../../data/dialogReducer"


let postText=React.createRef()


function Dialogs(props){
  let addMessage=()=>{
    props.dispatch(addMessageAC())
  }
  let onChange=()=>{
    props.dispatch(onMessageChangeAC(postText.current.value))
  }
  
  return(
<div className="Dialogs">
    <div className="dialog">
     {props.dialogNames.map((e)=><DialogsItem id={e.id} name={e.name}/>)}
    </div>

    <div className="messages">
      {props.messageLog.map((e)=><Message id={e.id} message={e.message}/>)}
      
      <textarea ref={postText} placeholder="enter message" onChange={onChange} value={props.newMessageText}/>

      
      <button onClick={addMessage}>send</button>

    </div>

  </div>
  );
}
export default Dialogs;
