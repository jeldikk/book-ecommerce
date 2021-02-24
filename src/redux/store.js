import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import rootReducer from "./root_reducer"

let middleware = []

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware)) 