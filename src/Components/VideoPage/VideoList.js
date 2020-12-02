import React, { Component } from 'react'
import PlaylistData from '../../Api/Playlist'

export class VideoList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.state = {
      data: [],
    };
  }

  render() {
    const items =  this.props.playlistItems.map((item) =>
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    
    );
    

    return (
      <div>
         {items}
      </div>
    )
  }
}

export default VideoList
