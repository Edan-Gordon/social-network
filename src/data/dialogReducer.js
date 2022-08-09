const ADD_MESSAGE='ADD-MESSAGE'
const MESSAGE_CHANGE='MESSAGE-CHANGE'


let dialogReducer=(state,action)=>{
	switch(action.type){
     
       case ADD_MESSAGE:
        if (state.newMessageText) {
          let newMessage={
            id:25,message:state.newMessageText
          }
          state.messageLog.push(newMessage)
          state.newMessageText=''
          // console.log(state.dialogData.messageLog)
        }
      break;
       case MESSAGE_CHANGE:
          state.newMessageText=action.text;
      break;
       
    }
    return state
}
export default dialogReducer

export let addMessageAC=()=>{
  return{
    type:ADD_MESSAGE,
    id:1
  }
}
export let onMessageChangeAC=(text)=>{
  return{
    type:MESSAGE_CHANGE,
    text:text
  }

}