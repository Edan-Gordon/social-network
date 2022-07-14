import react from "react"
import Post from "./Post.jsx"

function Posts(){
	return(
    <div className="posts">
      <input placeholder="write a caption"/>
      <button>add post</button>
   		<Post message="wow"/>
   		<Post message="no way"/>
   		<Post message="here we go again"/>
   		<Post message="lol"/>
   		<Post message="watch it"/>
   		<Post message="good"/>
   		<Post message="yes"/>
    </div>
    		);
}
export default Posts