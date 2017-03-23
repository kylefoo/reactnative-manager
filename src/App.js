import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
      var config = {
        apiKey: 'AIzaSyBRR9_C6fWBWTe0OIMg-hczhOQPn-EcJ-c',
        authDomain: 'udemy-manager-1f0f6.firebaseapp.com',
        databaseURL: 'https://udemy-manager-1f0f6.firebaseio.com',
        storageBucket: 'udemy-manager-1f0f6.appspot.com',
        messagingSenderId: '383504070188'
      };
	  firebase.initializeApp(config);
    }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App;
