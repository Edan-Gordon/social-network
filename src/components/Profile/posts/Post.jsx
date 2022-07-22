import react from "react"
import avatar_mini from "../../../img/elon1.png"

function Post(props){
	return(
    
      <div className="post">
        <img src={avatar_mini}/>
        <span>Elon Musk</span>
        <p>{props.message}</p>
       ❤ <span>{props.likes}</span>
        
      </div>
   
    		);
}
export default Post