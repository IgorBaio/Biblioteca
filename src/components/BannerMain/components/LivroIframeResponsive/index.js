import React from 'react';

import { VideoContainer } from './styles';

function YouTubeIframeResponsive({ Capa }) {
  return (
    <VideoContainer>
        <img src={Capa} alt="Logo"  width="80%" height="30%"/>;
      
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
