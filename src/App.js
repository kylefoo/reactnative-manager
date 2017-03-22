import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)} >
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
