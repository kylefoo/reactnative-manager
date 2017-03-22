import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import * as actions from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
  	console.log(this.props)
    this.props.emailChanged(text);
  }

  render() {
  	return (
  	  <Card>
  	    <CardSection>
  	      <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
  	      />
  	    </CardSection>
  	    
  	    <CardSection>
  	      <Input
            secureTextEntry
            label="Password"
            placeholder="password"
  	      />
  	    </CardSection>
  	    
  	    <CardSection>
  	      <Button>
  	        Log In
  	      </Button>
  	    </CardSection>
  	  </Card>
  	);
  }
}

export default connect(null, actions)(LoginForm);