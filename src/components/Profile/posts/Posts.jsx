import react from "react"
import Post from "./Post.jsx"

let postlog=[
  {id:1,message:"wow"},
  {id:2,message:"no way"},
  {id:3,message:"here we go again"},
  {id:4,message:"lol"},
  {id:5,message:"watch it"},

]
function Posts(){
	return(
    <div className="posts">
      <input placeholder="write a caption"/>
      <button>add post</button>
   		{postlog.map((e)=><Post message={e.message}/>)}
   		
   	
    </div>
    		);
}
export default Posts