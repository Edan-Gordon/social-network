import React from 'react';
import "./Dialogs.css";
import Message from "./Message.jsx"

import DialogsItem from "./DialogsItem";

let postText=React.createRef()


function Dialogs(props){
  let addMessage=()=>{
   // let text=postText.current.value;
    props.dispatch({type:'ADD-MESSAGE'})
    //postText.current.value=''
  }
  let onChange=()=>{
    props.dispatch({type:'MESSAGE-CHANGE',text:postText.current.value})
  }
  return(
<div className="Dialogs">
    <div className="dialog">
     {props.dialogNames.map((e)=><DialogsItem id={e.id} name={e.name}/>)}
    </div>

    <div className="messages">
      {props.messageLog.map((e)=><Message id={e.id} message={e.message}/>)}
      
      <textarea ref={postText} placeholder="enter message" onChange={onChange} value={props.newMessageText}/>

      <br/>
      <button onClick={addMessage}>send</button>
    </div>

  </div>
  );
}
export default Dialogs;
