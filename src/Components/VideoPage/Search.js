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
    let channelId;
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

    this.props.handleClick(channelId);

  };



  handleClick = (event) => {
    const _search = event.target.innerText;
    this.setState({ search: _search });
  }

  render() {
    return (
      <>
      <button onClick={this.handleClick}>Scott's Bass Lessons</button>
      <button onClick={this.handleClick}>BassBuzz</button>
      <button onClick={this.handleClick}>TalkingBass</button>
      <form onSubmit={this.onSubmit} className="search-form">
      <input className="submit" type="submit" value="submit" />
      </form>

      </>
    );
  }
}

export default Search;