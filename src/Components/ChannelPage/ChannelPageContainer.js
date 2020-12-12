import React, { Component } from 'react'
import SelectChannel from './SelectChannel';
import DisplayChannelData from './DisplayChannelData'
import youtubeApi from '../../Api/Youtube'
import DisplayVideos from './DisplayVideos'
import DisplayPlaylists from './DisplayPlaylists'

/*

Displays Select channel component, that sends channelId as callback, then fetches channeldata from youtube api

Displays channelData where user can select to preview latest videos or playlists -> callback + handle functions sets user selection to state -> if state is set, renders desired component

*/

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
      
      <div className="channel-page-container">
        <SelectChannel handleClick={this.handleSubmit} />

        {/* DisplayChannelData will render after channel is selected in SelectChannel and callback sets the state */}
        
        {  this.state.channelData && <DisplayChannelData data={this.state.channelData} 

        uploadsCallback = {this.handleUploadsCallback} 
        playlistsCallback = {this.handlePlaylistsCallback}
        /> }
        

        {/* Components below will only render if a callback is done from DisplayChannelData */}
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




