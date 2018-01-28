import React from 'react';
import { Text, View } from 'react-native';

import HeaderComponent from "./src/components/common/header/header.component";
import AlbumListComponent from "./src/components/core/album-list/album-list.component";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <HeaderComponent headerText="Albums!"/>
        <AlbumListComponent />
      </View>
    );
  }
}
