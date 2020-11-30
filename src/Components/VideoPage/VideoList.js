import React, { Component } from 'react'

export class VideoList extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  
  render() {
    return (
      <div>
         <p>{this.props.playlistId}</p>
      </div>
    )
  }
}

export default VideoList
