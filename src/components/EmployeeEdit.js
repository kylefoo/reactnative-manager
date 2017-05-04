import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onDeletePress() {
    this.props.employeeDelete(this.props.employee);
  }

  onTextPress() {
    const { name, phone, shift } = this.props;
    Communications.text(phone, '${name} Your upcoming shift is on ${shift}');
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onSavePress.bind(this)}>
            Save
          </Button>
          <Button onPress={this.onTextPress.bind(this)}>
            Text
          </Button> 
          <Button onPress={this.onDeletePress.bind(this)}>
            Delete
          </Button> 
          <Button onPress={this.onDeletePress.bind(this)}>
            Fire
          </Button>            
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);