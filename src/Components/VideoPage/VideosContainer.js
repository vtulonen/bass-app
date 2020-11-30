
//import {useSelector, useDispatch} from 'react-redux';
import React, { Component } from 'react'

import ChannelData from '../../Api/ChannelData'
import Search from './Search';
import VideoList from './VideoList';
import PlaylistData from '../../Api/Playlist'


export default class VideosContainer extends Component {

  state = {
    data: [],
    title: '',
    playlistId: '',
    playlistItems: [],
  };



  async getPlaylist()  {
    const response = await PlaylistData.get('', {
      params: {
        playlistId: this.state.playlistId
      }
    });
    console.log('response');
    console.log(response);
    this.setState({
      playlistItems: response.data.items
    });

    console.log(this.state)
  };

  getChannelData = async keyword => {
    const response = await ChannelData.get('', {
      params: {
        forUsername: keyword
      }
    });
    console.log(response);
    this.setState({
       data: response.data.items[0],
       title: response.data.items[0].snippet.title,
       playlistId: response.data.items[0].contentDetails.relatedPlaylists.uploads
    });
    console.log(this.state)
    this.getPlaylist()
  };
  
  render() {
    
    return (
      <div className="container">
        <div id="content">
          <div className="row">
            <div className="col s6">
            <Search handleClick={this.getChannelData} />
            
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




