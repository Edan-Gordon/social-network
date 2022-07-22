import react from "react"
import Post from "./Post.jsx"


function Posts(props){
	return(
    <div className="posts">
      <input placeholder="write a caption"/>
      <button>add post</button>
   		{props.postlog.map((e)=><Post message={e.message} likes={e.likes}/>)}
   		
   	
    </div>
    		);
}
export default Posts