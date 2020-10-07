import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import { Link } from "react-router-dom";
function Carrousel({
  ignoreFirstVideo,
  category,
}) {
  const livros = category;
  
  return (
    <VideoCardGroupContainer>
      
      <Slider>
        {livros.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <Link to={
                                {pathname:'/BookDetails',
                                state: video
                              }
                            } >
                <VideoCard
                  videoTitle={video.titulo}
                  videoCapa={video.capa}
                  videoURL={'/BookDetails'}
                  livroId ={video.id}
                />
              </Link>
                
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carrousel;
