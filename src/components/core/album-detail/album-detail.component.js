import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../../common/card/card.component';
import CardSection from '../../common/card/card-section/card-section.component';
import Button from '../../common/button/button.component';

import albumDetailsStyles from "./album-detail.styles";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={albumDetailsStyles.thumbnailContainerStyle}>
          <Image
            style={albumDetailsStyles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={albumDetailsStyles.headerContentStyle}>
          <Text style={albumDetailsStyles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumDetailsStyles.imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;