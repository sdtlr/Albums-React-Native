import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import buttonStyles from "./button.styles";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.buttonStyle}>
      <Text style={buttonStyles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;