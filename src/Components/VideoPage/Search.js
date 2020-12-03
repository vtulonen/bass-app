import React from "react";



class Search extends React.Component {
  constructor(props){ 
    super(props) 
    this.state = { search: "" };
  
    this.handleClick = this.handleClick.bind(this) 
  } 
  
  onSubmit = event => {
    event.preventDefault();
    this.props.handleClick(this.state.search);
  };



  handleClick = (event) => {
    const _search = event.target.innerText;
    this.setState({ search: _search });
  }

  render() {
    return (
      <>
      <button onClick={this.handleClick}>Scotts Bass Lessons</button>
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