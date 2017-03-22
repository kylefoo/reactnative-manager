import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  const { label, value, onChangeText, placeholder, secureTextEntry } = props;
  const { textInputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={textInputStyle}
      />
    </View>
  );
};

const styles = {
    textInputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
  },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
  },
    containerStyle: {
      flexDirection: 'row',
      flex: 1,
      height: 40,
      alignItems: 'center'
  }
};

export { Input };