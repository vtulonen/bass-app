
//import {useSelector, useDispatch} from 'react-redux';
import React, { Component } from 'react'

import ChannelId from '../../Api/getChannelId'
import Search from './Search';
import VideoList from './VideoList';
import PlaylistData from '../../Api/Playlist'
import ChannelData from '../../Api/ChannelData'
import DisplayChannelData from './DisplayChannelData'

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
    const response_id = await ChannelId.get('', {
      params: {
        q: keyword
      }
    });
    
    const channelId = response_id.data.items[0].id.channelId

    // fetch channel data with channel id
    const response_channel = await ChannelData.get('', {
      params: {
       id: channelId
      }
    });


    const playlistId = response_channel.data.items[0].contentDetails.relatedPlaylists.uploads
    
    
    
    
    //fetch playlist items with playlistId
    const response_playlist = await PlaylistData.get('', {
      params: {
        playlistId: playlistId
      }
    });

    
    this.setState({
      playlistItems: response_playlist.data.items,
      channelData: response_channel.data.items[0],
    });
   

   };

  


  
   render() {

    console.log(this.state)

    return (
      <div className="container">
        <Search handleClick={this.handleClick} />
        {  this.state.channelData && <DisplayChannelData data={this.state.channelData} /> }
        { this.state.playlistItems && <VideoList playlistItems={this.state.playlistItems} /> }
      </div>
    )
  }
}




