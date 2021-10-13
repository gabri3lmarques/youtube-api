import React from 'react';
import VideoItem from '../video-item/video-item.component';

const VideoLIst = ({videos, handleVideoSelect}) => {
  return (
    <div className="ui relaxed divided list">
      {
        videos.map(video => {
          return <VideoItem key={video.etag} video={video} handleVideoSelect={handleVideoSelect}/>
        })
      }
    </div>
  )
}

export default VideoLIst;