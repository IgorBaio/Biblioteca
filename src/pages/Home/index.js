import React from 'react';
import Menu from '../../components/Menu'
import books from '../../data/Books.js';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';



function Home() {
  return (
    <div style={{backgroundColor: '#141414'}}>
      <Menu />
      
      <BannerMain
        livro = {books[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={books}
      />

     

      <Footer />
      
    </div>
  );
}

export default Home;
