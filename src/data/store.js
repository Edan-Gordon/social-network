import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import navbarReducer from "./navbarReducer"

import {createStore, combineReducers} from 'redux'

let reducers=combineReducers({
	dialogData:dialogReducer,
	profileData:profileReducer,
	navData:navbarReducer
})
let store = createStore(reducers)
export default store