import React, { Component } from 'react'

export class DisplayChannelData extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
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
          <li class="channel-info__item">Title: {title}</li>
    <li className="channel-info__item">Subscribers: {subscribers}</li>
    <li className="channel-info__item">Videos: {videoCount}</li>
    <li className="channel-info__item">Views: {viewCount}</li>
        
        </ul>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <a className="btn" href={channelUrl}>View Channel</a>
      </div>
      </>
    )
  }
}

export default DisplayChannelData
