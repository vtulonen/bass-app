import axios from "axios";
const API_KEY = "AIzaSyCewWMOH6KuJRw8c3LsLUjHJIX971omc7w";



const baseUrl = axios.create({
  
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: API_KEY
  },
  headers: {}
});

export default baseUrl