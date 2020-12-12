import React from "react";

// Display buttons for user
// on submit the selected channels
// channelid is set as props to callback

class SelectChannel extends React.Component {
  constructor(props){ 
    super(props) 
    this.state = { 
      channel: "",
      channelId: ""
    };
  
    this.handleClick = this.handleClick.bind(this) 
  } 
  
  // changes channelId based on user selected channel
  onSubmit = event => {
    event.preventDefault();
    let channelId = "";
    switch (this.state.channel) {
      case "Scott's Bass Lessons":
        channelId = 'UCWTj3vCqkQIsrTGSm4kM34g';
        break;
      case "BassBuzz":
        channelId = 'UCeD9_tDVA1wvqv1IF9QyP-A';
        break;
      case "TalkingBass":
        channelId = 'UCDfStxwji-22A_bvY280UIg'
    }

    
    if (channelId !== "") {
      this.props.handleClick(channelId);
    }  else {
      alert('Please select a channel first');
    }
      
    

  };

  // set buttons inner text as state
  handleClick = (event) => {
    const _channel = event.target.innerText;
    this.setState({ channel: _channel });
    
  }

  render() {
    return (
      <>
      <div className="btn-container">
      <button className="btn" onClick={this.handleClick}>Scott's Bass Lessons</button>
        <button className="btn" onClick={this.handleClick}>BassBuzz</button>
        <button className="btn" onClick={this.handleClick}>TalkingBass</button>
        <form onSubmit={this.onSubmit} className="submit-container">
      <input className="btn btn-submit" type="submit" value="View Channel" />
      </form>
      </div>
        
      

      </>
    );
  }
}

export default SelectChannel;