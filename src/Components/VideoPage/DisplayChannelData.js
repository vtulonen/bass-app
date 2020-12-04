import React, { Component } from 'react'
import youtubeApi from '../../Api/Youtube'
import DisplayUploads from './DisplayUploads';
import DisplayPlaylists from './DisplayPlaylists';

export class DisplayChannelData extends Component {
  constructor(props) {
    super(props);
    console.log('constr props')
    console.log(this.props)

    this.state = {
      uploadsList: undefined,
      allPlaylists: undefined,
      uploadsPlaylistId: this.props.data.contentDetails.relatedPlaylists.uploads
    };
  }


   handleClickLatest = async () => {
   
    
    const uploadsPlaylistId = this.props.data.contentDetails.relatedPlaylists.uploads
    const response_uploadsList = await youtubeApi.get('/playlistItems', {
      params: {
        part: 'snippet',
        uploadsPlaylistId: uploadsPlaylistId
      }
    });

    this.setState({
      uploadsList: response_uploadsList.data.items,
    });
  }


  handleClickPlaylists = async () => {
   
    
    const channelId = this.props.data.id
    console.log(channelId)
    const response = await youtubeApi.get('/playlists', {
      params: {
        part: 'snippet',
        channelId: channelId,
        maxResults: 25
      }
    });

    console.log(response.data.items)
    this.setState({
      allPlaylists: response.data.items
    });
  }

  render() {
    const { data } = this.props;
    const title = data.snippet.title
    const description = data.snippet.description
    const subscribers = data.statistics.subscriberCount
    const videoCount = data.statistics.videoCount
    const viewCount = data.statistics.viewCount
    const channelUrl = `https://www.youtube.com/${data.snippet.customUrl}`


    return (
      <>
      <div className="channel-info-container">
        <ul className="channel-info">
          <li className="channel-info__item">Title: {title}</li>
    <li className="channel-info__item">Subscribers: {subscribers}</li>
    <li className="channel-info__item">Videos: {videoCount}</li>
    <li className="channel-info__item">Views: {viewCount}</li>
        
        </ul>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <a className="btn" href={channelUrl}>View Channel</a>
        <button onClick={this.handleClickLatest}>Show latest videos</button>
        <button onClick={this.handleClickPlaylists}>Show playlists</button>
      </div>
      <div>
      { this.state.uploadsList && <DisplayUploads uploadsList={this.state.uploadsList} /> }
      { this.state.allPlaylists && <DisplayPlaylists playlists={this.state.allPlaylists} /> }
      </div>

      </>
    )
  }
}

export default DisplayChannelData
