
//import {useSelector, useDispatch} from 'react-redux';
import React, { Component } from 'react'

import ChannelId from '../../Api/getChannelId'
import Search from './Search';
import VideoList from './VideoList';
import PlaylistData from '../../Api/Playlist'
import ChannelData from '../../Api/ChannelData'
import getChannelId from '../../Api/getChannelId';

export default class VideosContainer extends Component {

  state = {
    title: '',
    channelId: '',
    playlistItems: [],
  };

  getChannelId = async keyword => { 

    // get channel id from user submit
    const response_id = await ChannelId.get('', {
      params: {
        q: keyword
      }
    });
    
    const channelId = response_id.data.items[0].id.channelId
    const playlistId = 'UU' + channelId.substring(2); // Uploads playlistId is same as channelId with the second character switched to 'U' - so it's done manually here to save an api call from fetching the id

    
    //get playlist items with playlistId
    const response_playlist = await PlaylistData.get('', {
      params: {
        playlistId: playlistId
      }
    });

    console.log(response_playlist)
    this.setState({
      playlistItems: response_playlist.data.items
    });
   

  };

  


  
  render() {
    
    return (
      <div className="container">
        <div id="content">
          <div className="row">
            <div className="col s6">
            <Search handleClick={this.getChannelId} />
            
            <VideoList playlistItems={this.state.playlistItems} />
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/pQlImUd1mR8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
            <div id="channel-data" className="col s6" />
          </div>
          <div className="row" id="video-container" />
        </div>
      </div>
    )
  }
}




