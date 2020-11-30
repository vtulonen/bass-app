
//import {useSelector, useDispatch} from 'react-redux';
import React, { Component } from 'react'

import youtubeApi from '../../Api/ChannelData'
import Search from './Search';
import VideoList from './VideoList';



export default class VideosContainer extends Component {

  state = {
    data: [],
    title: '',
    playlistId: ''
  };


  onSearch = async keyword => {
    const response = await youtubeApi.get('', {
      params: {
        forUsername: keyword
      }
    });
    console.log(response);
    this.setState({
       data: response.data.items[0]
    });
    console.log(this.state);
  };


  handleClick = async keyword => {
    const response = await youtubeApi.get('', {
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
    console.log(this.state);
  };


  render() {
    
    return (
      <div className="container">
        <div id="content">
          <div className="row">
            <div className="col s6">
            <Search handleClick={this.handleClick} />
            
            <VideoList playlistId={this.state.playlistId} />
            </div>
            <div id="channel-data" className="col s6" />
          </div>
          <div className="row" id="video-container" />
        </div>
      </div>
    )
  }
}




