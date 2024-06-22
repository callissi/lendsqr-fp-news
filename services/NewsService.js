// services/NewsService.js
import axios from 'axios';

const API_KEY = 'YOUR_RAPIDAPI_KEY';
const API_URL = 'https://newscatcher.p.rapidapi.com/v1/latest_headlines';

export const getNews = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};
