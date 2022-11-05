import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (query, page) => {
  const responce = await axios.get();
};
