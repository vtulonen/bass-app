import React, { Component } from 'react'

export class DisplayPlaylists extends Component {
  constructor(props) {
    super(props);
   console.log(this.props)
  }


  handleClick = (event) => {
    console.log(event.currentTarget.getAttribute("videoid"))
  }


  render() {
    const playlists =  this.props.playlists.map((item, index) =>
    <div onClick={this.handleClick} className="playlists__item" key={index} videoid={item.id}>
      <a>{item.snippet.title}</a>
      <img src={item.snippet.thumbnails.medium.url}/>
    </div>
      
    );



    return (
      <div className="playlists">
        {playlists}
       
      </div>
    )
  }
}

export default DisplayPlaylists
