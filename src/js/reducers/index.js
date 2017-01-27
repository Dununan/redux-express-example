import {combineReducers, createStore, applyMiddleware} from 'redux'
import usersStore from './users'
import stateStore from './state'
import userDetailStore from './userDetail'
import thunk from 'redux-thunk'

const appReducer = combineReducers({
    stateStore,
    usersStore,
    userDetailStore,
});

export default createStore(appReducer, applyMiddleware(thunk))