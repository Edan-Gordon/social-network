import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <div className="wrap-content">
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dialogs" element={<Dialogs/>}/>
      </Routes> 
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


