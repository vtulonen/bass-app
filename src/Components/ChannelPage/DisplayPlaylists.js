import React, { Component } from 'react'
import youtubeApi from "../../Api/Youtube";
import DisplayVideos from "./DisplayVideos";

/*

Displays playlist thumbnails and names according to given channelid
When a playlist is clicked, videos for the playlist are fetched from youtube api

*/

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
      //Setting state in handle function to only display the videos after they are fetched
      playlistItems:  response.data.items,
      playlistTitle: playlistTitle
    })
    console.log(response)

  }

  

  render() {
    // map each playlist item into a div to display in return
    // onClick function for above handlefunction
    
    const playlists =  this.props.playlists.map((item, index) =>
    <div onClick={this.handleClick} className="playlists-item" key={index} playlistid={item.id} title={item.snippet.title}>
      <h3 className="playlist-item__title">{item.snippet.title}</h3>
      <img className="playlist-item__thumbnail" src={item.snippet.thumbnails.medium.url}/>  
    </div>
      
    );



    return (
      <div className="playlists">
      
      {/* Only display this after a playlist is clicked */}
        {  this.state.playlistItems && <DisplayVideos videosList={this.state.playlistItems} listName={this.state.playlistTitle}/> }
      
      {/* Display this first */}
        {playlists}

      </div>

     
    )
  }
}

export default DisplayPlaylists
