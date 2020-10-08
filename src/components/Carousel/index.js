import React from 'react';
import { LivroCardGroupContainer, Title, ExtraLink } from './styles';
import LivroCard from './components/LivroCard';
import Slider, { SliderItem } from './components/Slider';
import { Link } from "react-router-dom";
function Carrousel({
  ignoreFirstLivro,
  category,
}) {
  const livros = category;
  
  return (
    <LivroCardGroupContainer>
      
      <Slider>
        {livros.map((video, index) => {
          if (ignoreFirstLivro && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <Link to={
                                {pathname:'/BookDetails',
                                state: video
                              }
                            } >
                <LivroCard
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
    </LivroCardGroupContainer>
  );
}

export default Carrousel;
