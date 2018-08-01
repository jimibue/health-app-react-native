import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import daily from './tracking/reducers/daily';

import ui from './sharedStore/reducers/ui';
import auth from './login/reducers/auth';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ui,
    daily,
    auth
})

let composeEnhancers = compose

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}

export default configureStore