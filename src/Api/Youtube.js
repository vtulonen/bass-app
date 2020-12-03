import axios from "axios";
const API_KEY = "AIzaSyCewWMOH6KuJRw8c3LsLUjHJIX971omc7w";

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
}); 

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    key: API_KEY,
  };
  return config;
});

export default instance; 