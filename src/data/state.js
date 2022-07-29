

let state={
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
};

let rerender=(state)=>{
  return
}

export let subscribe=(observer)=>{
  rerender=observer
}

export let addMessage=(text)=>{
  let newMessage={
    id:25,message:text
  }
  state.dialogData.messageLog.push(newMessage)
  state.dialogData.newMessageText=''
 // console.log(state.dialogData.messageLog)
 rerender(state)

}

export let onMessageChange=(text)=>{
  state.dialogData.newMessageText=text;

  rerender(state)
}

export let addPost=(text)=>{
  let newPost={
    id:6,message:text,likes:56
  }
  state.profileData.postlog.unshift(newPost)
  state.profileData.newPostText=''
  //console.log(state.profileData.postlog)
  rerender(state)
} 

export let onPostChange=(text)=>{
  state.profileData.newPostText=text;
  rerender(state)
}

window.state=state

export default state