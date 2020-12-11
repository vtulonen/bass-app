import React, { Component } from 'react'


export class DisplayVideos extends Component {
  constructor(props) {
    super(props);
   console.log(this.props)
  }

  render() {
    const items =  this.props.videosList.map((item, index) =>
    <div class="video">
      <iframe key={index} width="100%" height="100%" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} frameBorder="0" allowFullScreen></iframe>
    </div>
    
    
    );
    

    return (
      <div className="video-list-container">
        <h2>{this.props.listName}</h2>
          <div className="video-list">
          {items}
          </div>
      </div>
    )
  }
}

export default DisplayVideos
