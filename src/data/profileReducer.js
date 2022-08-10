const ADD_POST='ADD-POST'
const POST_CHANGE='POST-CHANGE'

let initialstore={
 postlog:[
        {id:1,message:"wow",likes:8},
        {id:2,message:"no way",likes:78},
        {id:3,message:"here we go again",likes:304},
        {id:4,message:"lol",likes:52},
        {id:5,message:"watch it",likes:65},
      ],
      newPostText:''
}

let profileReducer=(state=initialstore,action)=>{
	if (action.type==ADD_POST){
		if (state.newPostText) {
          let newPost={
            id:6,
            message:state.newPostText,
            likes:56
          }
          state.postlog.unshift(newPost)
          state.newPostText=''
          //console.log(state.profileData.postlog)
        }
	}else if (action.type==POST_CHANGE) {
		state.newPostText=action.text;
	}
  return state
}
export default profileReducer

export let addPostAC=()=>{
  return{
    type:ADD_POST,
    id:1

  }
}

export let onPostChangeAC=(text)=>{
  return{
    type:POST_CHANGE,
    text:text

  }
}