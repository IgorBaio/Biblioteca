import React from 'react';
import { LivroCardContainer } from './styles';
import {useLocation } from "react-router-dom";


function LivroCard({ videoTitle,videoCapa, videoURL, categoryColor, livroId }) {
  let location = useLocation();
  return (
    <LivroCardContainer
      id={livroId}
      url={videoCapa}
      href={location.pathname}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
    
  );
}

export default LivroCard;
