import React from 'react';
import "./Dialogs.css";



function Message(props){
  let mess=props.message.split('\n').map(function( item, idx) {
    return (
        <span key={idx}>
          {item}
          <br/>
        </span>
    )
  })
  return(
  <div className="Message">

    <p>{mess}</p>

  </div>
  );
}
export default Message;