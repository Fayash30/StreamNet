import axios from "axios";


const URL = "https://youtube-v31.p.rapidapi.com/search";
const options = {
    url: URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) =>{
    await axios.get(`${URL}/${url}`)
}