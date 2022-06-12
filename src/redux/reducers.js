import {combineReducers} from "redux";
import reduceUsers from './usersState/index'

export default combineReducers({users: reduceUsers});