import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return (
      <div>esperando por vídeos...</div>
    )
  }

  const videSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui segment">
        <iframe src={videSRC} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.desciption}</p>
      </div>
    </div>
  )
}

export default VideoDetail;