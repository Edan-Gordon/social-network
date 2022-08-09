const ADD_POST='ADD-POST'
const POST_CHANGE='POST-CHANGE'

let profileReducer=(state,action)=>{
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