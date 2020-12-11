import React from "react";



class Search extends React.Component {
  constructor(props){ 
    super(props) 
    this.state = { 
      search: "",
      channelId: ""
    };
  
    this.handleClick = this.handleClick.bind(this) 
  } 
  
  onSubmit = event => {
    event.preventDefault();
    let channelId = "";
    switch (this.state.search) {
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



  handleClick = (event) => {
    const _search = event.target.innerText;
    this.setState({ search: _search });
    
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

export default Search;