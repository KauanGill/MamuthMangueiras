import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import CTASection from "@/components/CTASection";
import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import robocp from "@/assets/images/robo-line-worker-250-2.png";
import robo1 from "@/assets/images/robo-magnetico-climb-rob-2.png";
import robo2 from "@/assets/images/robo-magnetico-climb-rob-3.png";
import robo3 from "@/assets/images/robo-magnetico-climb-rob-4.png";
import robo4 from "@/assets/images/robo-magnetico-climb-rob-5.png";

const RoboMagnetico = () => {
  const navigate = useNavigate();
  const slides = [
          { id: 1, title: 'Robo Magnetico Climb Rob', cover: robo1, color: '#FF5101' },
          { id: 2, title: 'Robo Magnetico Climb Rob', cover: robo2, color: '#FF5101' },
          { id: 3, title: 'Robo Magnetico Climb Rob', cover: robo3, color: '#FF5101' },
          { id: 4, title: 'Robo Magnetico Climb Rob', cover: robo4, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Robo Magnetico Climb Rob - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative pt-10 pb-20 px-4 w-full" 
        style={{ backgroundColor: 'var(--color-dark-blue)', zIndex: 1 }}
      >
        <div className="max-w-[1400px] mx-auto">
            <AppleCoverFlow slides={slides} />
        </div>
      </section>

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Robo Magnetico Climb Rob
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default RoboMagnetico;