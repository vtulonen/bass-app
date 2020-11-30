import axios from "axios";
const API_KEY = "AIzaSyCewWMOH6KuJRw8c3LsLUjHJIX971omc7w";



// GET https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=UU-lHJZR3Gqxm24_Vd_AJ5Yw&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json



export default axios.create({
  
  baseURL: "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails",
  params: {
    maxResults: 5,
    playlistId: '',
    key: API_KEY
    
  },
  headers: {}
});