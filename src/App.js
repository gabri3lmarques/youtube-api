import React from 'react';
import SeacrhBar from './components/search-bar/search-bar.component';
import axios from './components/apis/youtube';
import VideoLIst from './components/video-list/video-list.component';
import VideoDetail from './components/videoDetail/video-detail-component';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSearchSubmit = async (term) => {
    const response = await axios.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  }

  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render(){
    return(
      <div className="ui container">
        <h1 style={{marginTop:"20px"}}>Youtube API</h1>
        <SeacrhBar handleSearchSubmit={this.handleSearchSubmit}  />
        <div className="ui grid">
          <div className="ui row">
            <div className="eight wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="eight wide column">
              <VideoLIst videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
            </div>
          </div>
        </div>            
      </div>
    );
  }
}

export default App;