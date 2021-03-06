
import state from './data/state.js'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {addPost,addMessage,onPostChange,onMessageChange,subscribe} from './data/state.js'

 const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender=(state)=>{
 
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} onPostChange={onPostChange} onMessageChange={onMessageChange}/>
    </React.StrictMode>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

rerender(state)
subscribe(rerender)