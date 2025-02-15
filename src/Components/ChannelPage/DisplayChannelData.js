import React, { Component } from "react";
import youtubeApi from "../../Api/Youtube";

// Renders channel data and
// Fetches channel latest uploads or playlists 
// depending on user input

export class DisplayChannelData extends Component {
  constructor(props) {
    super(props);
  }


  //  Handle functions for user input on button click
  // Fetches data from youtubeApi
  handleClickLatest = async () => {
    const uploadsPlaylistId = this.props.data.contentDetails.relatedPlaylists.uploads;
    const response_uploadsList = await youtubeApi.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: uploadsPlaylistId,
      },
    });


    // set fetched data as props for callback
    this.props.uploadsCallback(response_uploadsList.data.items);
    
  };

  handleClickPlaylists = async () => {
    const channelId = this.props.data.id;
    console.log(channelId);
    const response = await youtubeApi.get("/playlists", {
      params: {
        part: "snippet",
        channelId: channelId,
        maxResults: 25,
      },
    });

    // set fetched data as props for callback
    this.props.playlistsCallback(response.data.items);

  };
  

  render() {
    const { data } = this.props;
    const title = data.snippet.title;
    const description = data.snippet.description.split('.');
    const shortDescription = description[0];
    const subscribers = data.statistics.subscriberCount;
    const videoCount = data.statistics.videoCount;
    const viewCount = data.statistics.viewCount;
    const channelUrl = `https://www.youtube.com/${data.snippet.customUrl}`;

    return (
      <>
        <div className="channel-info-container">
          <ul className="channel-info">
            <li className="channel-info__item"><em>{title}</em></li>
            <li className="channel-info__item">Subscribers: {subscribers}</li>
            <li className="channel-info__item">Videos: {videoCount}</li>
            <li className="channel-info__item">Views: {viewCount}</li>
          </ul>
          <p className="channel-description">{shortDescription}</p>
        </div>
        <div className="channel-info__buttons btn-container">
          <button className="btn" onClick={this.handleClickLatest}>Show Latest Videos</button>
          <button className="btn" onClick={this.handleClickPlaylists}>Show Playlists</button>
          <a className="btn" href={channelUrl} target="_blank">
            Visit Channel
          </a>
        </div>
      </>
    );
  }
}

export default DisplayChannelData;
