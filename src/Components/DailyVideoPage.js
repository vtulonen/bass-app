import React, { Component } from "react";
import youtubeApi from "../Api/Youtube";



export class DailyVideoPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      videoId: undefined,
      videoTitle: undefined,
    };
  }

  async componentDidMount() {
    const response = await youtubeApi.get('/search', {
      params: {
        part: 'snippet',
        order: 'date',
        q: 'bass guitar cover'
      }
    });

    console.log(response);
    this.setState({
      videoId: response.data.items[0].id.videoId,
      videoTitle: response.data.items[0].snippet.title,
    })
  }

  render() {
    return (
      <div className="center">
        <h2>Here's one of the latest bass related video from youtube</h2>
        <div className="video">
          <h3 className="video__title">{this.state.videoTitle}</h3>
          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${this.state.videoId}`} frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>

    )
  }
}

export default DailyVideoPage
