import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import {BrowserRouter,Routes, Route} from "react-router-dom";



function App(props) {
  return (
    <div className="wrapper">
    <BrowserRouter>
      <Header/>
      <Navbar friendData={props.state.navData.friendData}/>
      <div className="wrap-content"> 
      <Routes>
        <Route path="/" element={<Profile postlog={props.state.profileData.postlog} newPostText={props.state.profileData.newPostText}  dispatch={props.dispatch}/>}/>
        <Route path="/profile" element={<Profile postlog={props.state.profileData.postlog} newPostText={props.state.profileData.newPostText}  dispatch={props.dispatch}/>}/>
        <Route path="/dialogs" element={<Dialogs dialogNames={props.state.dialogData.dialogNames} messageLog={props.state.dialogData.messageLog} newMessageText={props.state.dialogData.newMessageText} dispatch={props.dispatch} />}/>
      </Routes> 
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


