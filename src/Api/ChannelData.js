import axios from "axios";
const API_KEY = "AIzaSyCewWMOH6KuJRw8c3LsLUjHJIX971omc7w";

export default axios.create({
  
  baseURL: "https://www.googleapis.com/youtube/v3/channels/?part=snippet%2CcontentDetails%2Cstatistics",
  params: {
    maxResults: 5,
    key: API_KEY
    
  },
  headers: {}
});