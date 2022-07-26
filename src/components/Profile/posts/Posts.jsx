import react from "react"
import Post from "./Post.jsx"
let postText=react.createRef()

function Posts(props){
  let addPost=()=>{
    let text=postText.current.value;
    props.addPost(text)
  }
	return(
    <div className="posts">
      <input ref={postText} placeholder="write a caption"/>
      <button onClick={addPost}>add post</button>
   		{props.postlog.map((e)=><Post message={e.message} likes={e.likes}/>)}
   		
   	
    </div>
    		);
}
export default Posts