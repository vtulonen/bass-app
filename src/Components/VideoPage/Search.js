import React from "react";



class Search extends React.Component {
  constructor(props){ 
    super(props) 
    this.state = { title: "" };
  
    this.handleClick = this.handleClick.bind(this) 
  } 
  
  // onSearchChanged = event => {
  //   const _title = event.target.value;
  //   this.setState({ title: _title });
  // };
  onSubmit = event => {
    event.preventDefault();
    this.props.handleClick(this.state.title);
  };



  handleClick = (event) => {
    const _title = event.target.innerText;
    this.setState({ title: _title });
  }

  render() {
    return (
      <>
      <button onClick={this.handleClick}>pewdiepie</button>
      <button onClick={this.handleClick}>bassbuzz</button>
      <form onSubmit={this.onSubmit} className="search-form">
      <input className="submit" type="submit" value="submit" />
      </form>


        {/* <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Enter Search Keyword"
            />
          </div>
        </form> */}
      </>
    );
  }
}

export default Search;