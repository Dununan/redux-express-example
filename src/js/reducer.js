import {combineReducers, createStore, applyMiddleware} from 'redux'
import dataStore from './reducers/data'
import stateStore from './reducers/state'
import thunk from 'redux-thunk'

const appReducer = combineReducers({
    stateStore,
    dataStore,
});

export default createStore(appReducer, applyMiddleware(thunk))