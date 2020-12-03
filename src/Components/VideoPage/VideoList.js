import React, { Component } from 'react'
import PlaylistData from '../../Api/Playlist'

export class VideoList extends Component {
  constructor(props) {
    super(props);
   console.log(this.props)
  }

  render() {
    const items =  this.props.playlistItems.map((item, index) =>
    <iframe id={index} width="100%" max-width="560" height="100%" max-height="315" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} frameBorder="0" allowFullScreen></iframe>
    
    );
    

    return (
      <>
      <div>
        <h2>Latest Videos</h2>
      </div>
      <div className="video-list">
        
         {items}
      </div>
      </>
    )
  }
}

export default VideoList
