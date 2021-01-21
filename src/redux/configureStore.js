import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Diseases } from './diseases';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore=() =>{
    const store=createStore(
        combineReducers({
            diseases: Diseases,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}