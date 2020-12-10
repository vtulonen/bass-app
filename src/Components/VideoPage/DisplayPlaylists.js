import React, { Component } from 'react'
import youtubeApi from "../../Api/Youtube";
import DisplayVideos from "./DisplayVideos";
export class DisplayPlaylists extends Component {
  constructor(props) {
    super(props);
   console.log(this.props)
  

  this.state = {
    playlistItems: undefined,
    playlistTitle: undefined
  };
}


  handleClick = async event => {
    console.log(event.currentTarget.getAttribute("playlistid"))
    const playlistId = event.currentTarget.getAttribute("playlistid")
    const playlistTitle = event.currentTarget.getAttribute("title")
    const response = await youtubeApi.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: playlistId,
      },
    });

    this.setState({
      playlistItems:  response.data.items,
      playlistTitle: playlistTitle
    })
    console.log(response)

  }

  

  render() {
    
    
    const playlists =  this.props.playlists.map((item, index) =>
    <div onClick={this.handleClick} className="playlists__item" key={index} playlistid={item.id} title={item.snippet.title}>
      <a>{item.snippet.title}</a>
      <img src={item.snippet.thumbnails.medium.url}/>
    </div>
      
    );



    return (
      <>
      <div className="playlist-videos">
        {  this.state.playlistItems && <DisplayVideos videosList={this.state.playlistItems} listName={this.state.playlistTitle}/> }
      </div>
      <div className="playlists">
      {playlists}
      </div>

      </>
    )
  }
}

export default DisplayPlaylists
