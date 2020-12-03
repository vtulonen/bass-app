import axios from "axios";
const API_KEY = "AIzaSyCewWMOH6KuJRw8c3LsLUjHJIX971omc7w";

export default axios.create({
  
  baseURL: "https://www.googleapis.com/youtube/v3/search?part=snippet",
  params: {
    maxResults: 1,
    key: API_KEY,
    q: '',
    
    
  },
  headers: {}
});