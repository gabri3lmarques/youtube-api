import React from 'react';
import './video-item.component.css'

const VideoItem = ({video, handleVideoSelect}) => {
  return (
    <div className="item video-item" onClick={() => handleVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">
          <p className="red">{video.snippet.title}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoItem;