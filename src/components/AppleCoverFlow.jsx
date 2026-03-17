import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CoverFlowStyles.css';

const AppleCoverFlow = ({ slides }) => {
  return (
    <div className="coverflow-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView 'auto' com o stretch negativo cria o visual coverflow ideal
        slidesPerView={'auto'} 
        initialSlide={1}
        coverflowEffect={{
          rotate: 35,    
          stretch: -20,  // VALOR CHAVE: Negativo para aproximar os slides
          depth: 120,    // Profundidade para destacar o central
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
      >
        {slides.map((album) => (
          <SwiperSlide key={album.id} className="swiper-slide-custom">
            <div className="album-wrapper">
              <img src={album.cover} alt={album.title} className="album-image" />
              <div className="reflection" />
              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppleCoverFlow;