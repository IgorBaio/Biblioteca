import React from 'react';
import { VideoCardContainer } from './styles';
import {useLocation } from "react-router-dom";


function VideoCard({ videoTitle,videoCapa, videoURL, categoryColor, livroId }) {
  let location = useLocation();
  return (
    <VideoCardContainer
      id={livroId}
      url={videoCapa}
      href={location.pathname}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
    
  );
}

export default VideoCard;
