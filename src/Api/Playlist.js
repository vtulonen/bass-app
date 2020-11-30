import axios from "axios";
const API_KEY = "AIzaSyCewWMOH6KuJRw8c3LsLUjHJIX971omc7w";






export default axios.create({
  
  baseURL: "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails",
  params: {
    maxResults: 5,
    forUsername: 'pewdiepie',
    key: API_KEY
    
  },
  headers: {}
});