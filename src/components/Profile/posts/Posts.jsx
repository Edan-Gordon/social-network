import react from "react"
import Post from "./Post.jsx"
let postText=react.createRef()

function Posts(props){
  let addPost=()=>{
    let text=postText.current.value;
    props.addPost(text)
  //  postText.current.value=''
  }
  let onChange=()=>{
    props.onPostChange(postText.current.value)
  }
	return(
    <div className="posts">
      <input ref={postText} placeholder="write a caption" value={props.newPostText} onChange={onChange}/>
      <button onClick={addPost}>add post</button>
   		{props.postlog.map((e)=><Post message={e.message} likes={e.likes}/>)}
   		
   	
    </div>
    		);
}
export default Posts