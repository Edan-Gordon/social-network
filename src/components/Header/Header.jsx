import React from 'react';
import "./header.css";
import logo from "../../logo.svg"
import {NavLink} from "react-router-dom";
// https://hwschool.bitrix24.ru/~JaarE


function Header(){
  return(
  <div className="header">
   <NavLink to="/"> <img src={logo}/></NavLink>
  </div>
  );
}
export default Header;