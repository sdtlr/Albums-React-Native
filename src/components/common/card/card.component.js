import React from 'react';
import { View } from 'react-native';

import cardStyles from "./card.styles"

const Card = (props) => {
  return (
    <View style={cardStyles.containerStyle}>
      {props.children}
    </View>
  );
};

export default Card;
