import React from 'react';
import "./navbar.css";
import {NavLink} from "react-router-dom";
import Friends from "../Friends/friends.jsx"

function Navbar(props){
  return(
  <div className="navbar">
    <NavLink to="/profile">Profile</NavLink>
    <NavLink to="/dialogs">Messages</NavLink>
    <NavLink to="/users">Users</NavLink>
    <Friends friendData={props.friendData}/>


  </div>
  );
}
export default Navbar;