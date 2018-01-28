import React from 'react';
import { View } from 'react-native';

import cardSectionStyles from "./card-section.styles"

const CardSection = (props) => {
  return (
    <View style={cardSectionStyles.containerStyle}>
      {props.children}
    </View>
  );
};

export default CardSection;