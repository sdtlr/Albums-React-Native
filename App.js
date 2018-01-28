import React from 'react';
import { Text, View } from 'react-native';

import HeaderComponent from "./src/components/common/header/header.component"

export default class App extends React.Component {
  render() {
    return (
      <View>
        <HeaderComponent headerText="Albums!"/>
      </View>
    );
  }
}
