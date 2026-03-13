import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CoverFlowStyles.css'; // Onde colocaremos o CSS do reflexo

import typhoon500 from "@/assets/images/lavadora-typhoon-jet-500bar.jpeg"; 

const albums = [
  { id: 1, title: 'Typhoon jet 500 Bar', artist: 'Trifasico', cover: typhoon500, color: '#FF5101' },
  { id: 2, title: 'Typhoon jet 500 Bar', artist: 'Gasolina', cover: typhoon500, color: '#FF5101' },
  { id: 3, title: 'Typhoon jet 500 Bar', artist: 'Elétrica', cover: typhoon500, color: '#FF5101' },
  { id: 4, title: 'Typhoon jet 500 Bar', artist: '...', cover: typhoon500, color: '#FF5101' },
];

const AppleCoverFlow = () => {
  return (
    <div className="coverflow-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,      // Ângulo das capas laterais
          stretch: 0,      // Espaço entre as capas (0 é o padrão)
          depth: 100,      // Profundidade (Z-axis)
          modifier: 1,     // Multiplicador do efeito
          slideShadows: true, // Sombras automáticas nas capas laterais
        }}
        navigation={true}
        /* MUDANÇA AQUI: Transformamos pagination de true para um objeto clicável */
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id} style={{ '--accent-color': album.color }}>
            <div className="album-wrapper">
              <img src={album.cover} alt={album.title} />
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