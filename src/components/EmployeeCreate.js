import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, CardSection, Button, Input } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
  const { name, phone, shift } = this.props;

  this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="enter name"
            onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
            value={this.props.phone}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
          >
            <Picker.item label="Monday" value="Monday" /> 
            <Picker.item label="Tuesday" value="Tuesday" /> 
            <Picker.item label="Wednesday" value="Wednesday" /> 
            <Picker.item label="Thursday" value="Thursday" /> 
            <Picker.item label="Froday" value="Friday" />
            <Picker.item label="Saturday" value="Saturday" />
            <Picker.item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles ={
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state;

  return { name, phone, shift };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);