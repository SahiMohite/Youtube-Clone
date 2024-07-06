import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': '095ee6d637msh57fc0d52712fc46p18ceb1jsn5e1cf3a28d29',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}