import React from 'react';
import {NavLink} from "react-router-dom";
import "./friends.css"

function Friends(props){
	return(
		<div className='friends'>
			<p>Friends</p>
			{props.friendData.map((e)=><NavLink to="/dialogs">
				<img src={e.img}/>
				<p>{e.name}</p>
			</NavLink> )}
		</div>	
		)
}
export default Friends