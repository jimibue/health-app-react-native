import React from 'react'
import App from './App';

import thunk from 'redux-thunk';

import { AppRegistry } from 'react-native'

// redux
// import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import rootReducer from './src/reducers'
// //import thunk from 'redux-thunk'

// const store = createStore(rootReducer)

import configureStore from './src/configureStore'

const store = configureStore()
//const store = createStore(combineReducers ,applyMiddleware(thunk));

console.disableYellowBox = true; 

// App
const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent('healthbeta', () => ReduxApp );

