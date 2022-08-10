import React from 'react';  //#1
import ReactDOM from 'react-dom/client';  //#2 ??? dom, document object model is the collection of Html tags
import './index.css';   //#3
import App from './App';    //#4
import reportWebVitals from './reportWebVitals';    //#5 debug gives us the error and tells us where the error is and usualy gets deleted on competionç

// till #5 the operations apear using (npx create-react-app app-name) and we get to chose the name instead of the command (app-name) 

import store from './data/store.js'   //#6 this is the data storage and where it is saved


 const root = ReactDOM.createRoot(document.getElementById('root'));//#7 Root element for the app
  let rerender=(state)=>{  //#8 this function is for the renderization of the screen
 
  root.render( //#9 renderization
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/> 
    </React.StrictMode>
  );
}
//#end of function #8

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();//#11 this is the standard cmmand when creating a react file

rerender(store.getState())//#12 first render screen after page loaded
store.subscribe(()=>{
rerender(store.getState())
})//#13 rerenderization of screen after the change of any data


//#10 17 app is the main component with data (state) and the dispatch function also a prop allows the flow of events (change or adding data).

