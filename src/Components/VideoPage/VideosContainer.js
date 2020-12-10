
//import {useSelector, useDispatch} from 'react-redux';
import React, { Component } from 'react'
import Search from './Search';
import DisplayChannelData from './DisplayChannelData'
import youtubeApi from '../../Api/Youtube'
import DisplayVideos from './DisplayVideos'
import DisplayPlaylists from './DisplayPlaylists'

export default class VideosContainer extends Component {
  constructor(props){ 
    super(props) 

    this.state = {
      channelId: '',
      allPlaylists: undefined,
      channelData: undefined,
      uploadsList: undefined,
    };
  } 


  handleUploadsCallback = (props) =>{
    
    this.setState({
      uploadsList: props,
      allPlaylists: undefined,
    })
  }

  handlePlaylistsCallback = (props) =>{
    this.setState({
      allPlaylists: props,
      uploadsList: undefined,
    })
  }
  

  handleSubmit = async keyword => { 
    console.log(keyword)
    const channelId = keyword

    // fetch channel data with channel id
    const response_channel = await youtubeApi.get('/channels', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: channelId
      }
    });
    this.setState({
      channelData: response_channel.data.items[0],
    });
   };

  
   render() {
      return (
      
      <div className="container">
        <Search handleClick={this.handleSubmit} />

        {  this.state.channelData && <DisplayChannelData data={this.state.channelData} 

        uploadsCallback = {this.handleUploadsCallback} 
        playlistsCallback = {this.handlePlaylistsCallback}
        /> }
        
        {this.state.uploadsList && (
            <DisplayVideos videosList={this.state.uploadsList} listName='Latest Videos' />
        )}
        {this.state.allPlaylists && (
            <DisplayPlaylists playlists={this.state.allPlaylists} 
            listName='All Playlists' />
          )}
      </div>
    )
  }
}




