// screens/NewsDetails.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const NewsDetails = ({ route }) => {
  const { news } = route.params;

  return (
    <View>
      <Image source={{ uri: news.media }} style={{ width: '100%', height: 200 }} />
      <Text>{news.title}</Text>
      <Text>{news.summary}</Text>
      <Text>{news.author}</Text>
      <Text>{news.published_date}</Text>
    </View>
  );
};

export default NewsDetails;
