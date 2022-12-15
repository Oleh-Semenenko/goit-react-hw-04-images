import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30517244-e729ceb83709aa7ca3195b0ba';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
