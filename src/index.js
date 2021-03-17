import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import authReducer from './store/reducers/authReducer';
import projectsReducer from './store/reducers/projectsReducer';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase, firebaseReducer} from 'react-redux-firebase';
import fbconfig from './config/fbconfig';
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

// IMPORTANT
// npm i --save react-redux@5.1.1 react-redux-firebase@2.2.4
const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(fbconfig),
  reactReduxFirebase(fbconfig, {attachAuthIsReady: true})
  )
  );

  store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
      <Provider store = {store}>
       <App />
      </Provider>,
    document.getElementById('root')
  );
  })


