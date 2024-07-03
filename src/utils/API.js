import axios from "axios";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY

const URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    url: URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    try {
      const { data } = await axios.get(`${URL}/${url}`, options);
      return data;
    } catch (error) {
      console.error("Error fetching data from API:", error);
      throw error; 
    }
  };
  