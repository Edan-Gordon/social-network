import react from "react"
import Post from "./Post.jsx"
import {addPostAC,onPostChangeAC} from './../../../data/profileReducer.js'
let postText=react.createRef()

function Posts(props){
  let addPost=()=>{
  
    props.dispatch(addPostAC())
 
  }
  let onChange=()=>{
    props.dispatch(onPostChangeAC(postText.current.value))
  } 
  console.log(props)
	return(
    <div className="posts">
      <input ref={postText} placeholder="write a caption" value={props.newPostText} onChange={onChange}/>
      <button onClick={addPost}>add post</button>
   		{props.postlog.map((e)=><Post message={e.message} likes={e.likes}/>)}
   		
   	
    </div>
    		);
}
export default Posts
