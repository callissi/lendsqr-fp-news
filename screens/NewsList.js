
// screens/NewsList.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { getNews } from '../services/NewsService';

const NewsList = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();
      setNews(newsData);
    };

    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { news: item })}>
      <View>
        <Image source={{ uri: item.media }} style={{ width: 100, height: 100 }} />
        <Text>{item.title}</Text>
        <Text>{item.topic}</Text>
        <Text>{item.published_date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />
  );
};

export default NewsList;


// Calling the function
console.log(greet("Alice")); // Output: Hello, Alice!
