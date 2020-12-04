import React, { Component } from 'react'

export class DisplayPlaylists extends Component {
  constructor(props) {
    super(props);
   console.log(this.props)
  }
  render() {
    const items =  this.props.playlists.map((item, index) =>
      <p>{item.snippet.title}</p>
    
    );

    return (
      <div>
        {items}
      </div>
    )
  }
}

export default DisplayPlaylists
