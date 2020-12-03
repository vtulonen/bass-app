import React, { Component } from 'react'
import youtubeApi from '../../Api/Youtube'
import DisplayUploads from './DisplayUploads';

export class DisplayChannelData extends Component {
  constructor(props) {
    super(props);
    console.log('constr props')
    console.log(this.props)

    this.state = {
      uploadsList: undefined,
      playlistId: this.props.data.contentDetails.relatedPlaylists.uploads
    };
  }


   handleClickLatest = async () => {
   
    
    const playlistId = this.props.data.contentDetails.relatedPlaylists.uploads
    const response_uploadsList = await youtubeApi.get('/playlistItems', {
      params: {
        part: 'snippet',
        playlistId: playlistId
      }
    });

    this.setState({
      uploadsList: response_uploadsList.data.items,
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
      </div>
      <div>
      { this.state.uploadsList && <DisplayUploads uploadsList={this.state.uploadsList} /> }
      </div>

      </>
    )
  }
}

export default DisplayChannelData
