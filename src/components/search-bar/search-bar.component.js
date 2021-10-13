import React from 'react';

class SeacrhBar extends React.Component {
  state = {
    searchTerm: ''
  }

  handleInputChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearchSubmit(this.state.searchTerm);
  }

  render(){
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Video search</label>
            <input placeholder="procure por vídeos" value={this.state.searchTerm} onChange={this.handleInputChange} type="text" />
          </div>
        </form>
      </div>
    )
  }
}

export default SeacrhBar;