import React, { Component } from "react";
import youtubeApi from "../../Api/Youtube";
import DisplayVideos from "./DisplayVideos";
import DisplayPlaylists from "./DisplayPlaylists";



// TODO hide other components when not needed
export class DisplayChannelData extends Component {
  constructor(props) {
    super(props);
    console.log("constr props");
    console.log(this.props);

    this.state = {
      uploadsList: undefined,
      allPlaylists: undefined,
    };
  }

  handleClickLatest = async () => {
    const uploadsPlaylistId = this.props.data.contentDetails.relatedPlaylists.uploads;
    const response_uploadsList = await youtubeApi.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: uploadsPlaylistId,
      },
    });

    this.props.uploadsCallback(response_uploadsList.data.items);
    this.setState({
      uploadsList: response_uploadsList.data.items,
    });
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

    this.props.playlistsCallback(response.data.items);

    console.log(response.data.items);
    this.setState({
      allPlaylists: response.data.items,
    });
  };
  

  render() {
    const { data } = this.props;
    const title = data.snippet.title;
    const description = data.snippet.description;
    const subscribers = data.statistics.subscriberCount;
    const videoCount = data.statistics.videoCount;
    const viewCount = data.statistics.viewCount;
    const channelUrl = `https://www.youtube.com/${data.snippet.customUrl}`;

    return (
      <>
        <div className="channel-info-container">
          <ul className="channel-info">
            <li className="channel-info__item">{title}</li>
            <li className="channel-info__item">Subscribers: {subscribers}</li>
            <li className="channel-info__item">Videos: {videoCount}</li>
            <li className="channel-info__item">Views: {viewCount}</li>
          </ul>
          <p>{description}</p>
        </div>
        <div className="buttons">
          <a className="btn" href={channelUrl}>
            View Channel
          </a>
          <button onClick={this.handleClickLatest}>Show latest videos</button>
          <button onClick={this.handleClickPlaylists}>Show playlists</button>
        </div>
        <div>
          {/* {this.state.uploadsList && (
            <DisplayVideos videosList={this.state.uploadsList} listName='Latest Videos' />
          )} */}
          {/* {this.state.allPlaylists && (
            <DisplayPlaylists playlists={this.state.allPlaylists} listName='All Playlists' />
          )} */}
        </div>
      </>
    );
  }
}

export default DisplayChannelData;
