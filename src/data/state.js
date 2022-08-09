import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"

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
    profileReducer(this._state.profileData,action)
    dialogReducer(this._state.dialogData,action)
     

    this.rerender(this._state)
  },

  
}

window.state=store._state

export default store


