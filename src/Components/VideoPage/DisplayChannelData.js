import React, { Component } from 'react'

export class DisplayChannelData extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }


  render() {
    const { data } = this.props;
    const title = data.snippet.title
    const description = data.snippet.description
   
    return (
      <div className="channel-info">
        <h2>{title}</h2> 
        <p>{description}</p> 
      </div>
    )
  }
}

export default DisplayChannelData
