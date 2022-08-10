const ADD_MESSAGE='ADD-MESSAGE'
const MESSAGE_CHANGE='MESSAGE-CHANGE'

let initialstore={
  messageLog:[
        {id:1,message:" Hello join my project"},
        {id:1,message:" Welcome to my project"},
        {id:2,message:" Hello thank you for inviting me to the project"},
        {id:2,message:" i will see u at the project venue"}
      ],
       dialogNames:[
        {id:1,name:"Jacky Chan"},
        {id:2,name:"Jack Chin"},
      ],
      newMessageText:''
}
let dialogReducer=(state=initialstore,action)=>{
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