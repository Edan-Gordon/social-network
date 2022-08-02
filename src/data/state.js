let store={ 

   _state:{
    profileData:{
      postlog:[
        {id:1,message:"wow",likes:8},
        {id:2,message:"no way",likes:78},
        {id:3,message:"here we go again",likes:304},
        {id:4,message:"lol",likes:52},
        {id:5,message:"watch it",likes:65},
      ],
      newPostText:''
    },
    dialogData:{
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
    },
    navData:{
      friendData:[
       {img:require('./../img/fill.png'),name:'Fill'},
       {img:require('./../img/max.png'),name:'Max'},
       {img:require('./../img/john.jpg'),name:'John'},
      ],
    }
  },
  getState(){
    return this._state
  },

   rerender(state){
    return
  },

  subscribe(observer){
    this.rerender=observer
  },

  dispatch(action){
    switch(action.type){
      case 'ADD-POST':
        this.addPost()
      break;
       case 'POST-CHANGE':
        this.onPostChange(action.text)
      break;
       case 'ADD-MESSAGE':
       this.addMessage()
      break;
       case 'MESSAGE-CHANGE':
       this.onMessageChange(action.text)
      break;
       case '':
      break;
    }
  },

   addMessage(){
    let newMessage={
      id:25,message:this._state.dialogData.newMessageText
    }
    this._state.dialogData.messageLog.push(newMessage)
    this._state.dialogData.newMessageText=''
   // console.log(state.dialogData.messageLog)
   this.rerender(this._state)

  },

  onMessageChange(text){
    this._state.dialogData.newMessageText=text;

    this.rerender(this._state)
  },

  addPost(){
    let newPost={
      id:6,
      message:this._state.profileData.newPostText,
      likes:56
    }
    this._state.profileData.postlog.unshift(newPost)
    this._state.profileData.newPostText=''
    //console.log(state.profileData.postlog)
    this.rerender(this._state)
  },

  onPostChange(text){
    this._state.profileData.newPostText=text;
    this.rerender(this._state)
  }
}
window.state=store._state

export default store
