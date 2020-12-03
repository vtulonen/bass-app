
//import {useSelector, useDispatch} from 'react-redux';
import React, { Component } from 'react'


import Search from './Search';
import VideoList from './VideoList';

import DisplayChannelData from './DisplayChannelData'
import youtubeApi from '../../Api/Youtube'

export default class VideosContainer extends Component {
  constructor(props){ 
    super(props) 

    this.state = {
      channelId: '',
      playlistItems: undefined,
      channelData: undefined,
    };
  } 
  

  handleClick = async keyword => { 

    // fetch channel id from user submit (search)
    const response_id = await youtubeApi.get('/search', {
      params: {
        maxResults: 1,
        q: keyword
      }
    });
    
    const channelId = response_id.data.items[0].id.channelId

    // fetch channel data with channel id
    const response_channel = await youtubeApi.get('/channels', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: channelId
      }
    });
    console.log(response_channel)

    const playlistId = response_channel.data.items[0].contentDetails.relatedPlaylists.uploads
    
    
    
    
    //fetch playlist items with playlistId
    const response_playlist = await youtubeApi.get('/playlistItems', {
      params: {
        part: 'snippet',
        playlistId: playlistId
      }
    });

    console.log(response_playlist)
    this.setState({
      playlistItems: response_playlist.data.items,
      channelData: response_channel.data.items[0],
    });
   

   };

  


  
   render() {

    console.log(this.state.playlistItems)

    return (
      <div className="container">
        <Search handleClick={this.handleClick} />
        {  this.state.channelData && <DisplayChannelData data={this.state.channelData} /> }
        {/* { this.state.playlistItems && <VideoList playlistItems={this.state.playlistItems} /> } */}
      </div>
    )
  }
}




