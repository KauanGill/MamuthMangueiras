import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import CTASection from "@/components/CTASection";
import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import robo1 from "@/assets/images/robo-line-worker-250-2.png";
import robo2 from "@/assets/images/robo-line-worker-250-3.png";
import robo3 from "@/assets/images/robo-line-worker-250-4.png";
import robo4 from "@/assets/images/robo-line-worker-250-cp.png";


const RoboWorker250 = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Robo Line Worker 250', cover: robo1, color: '#FF5101' },
      { id: 2, title: 'Robo Line Worker 250', cover: robo2, color: '#FF5101' },
      { id: 3, title: 'Robo Line Worker 250', cover: robo3, color: '#FF5101' },
      { id: 4, title: 'Robo Line Worker 250', cover: robo4, color: '#FF5101' },
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Robo Line Worker 250 - Mamuth</title>
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
            Robo Line Worker 250
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Robo Line Worker 250, desenvolvido pela alemã Falch, é um robô de hidrojato de alta performance projetado para limpeza e preparação de pisos e superfícies com ultra alta pressão. Desenvolvido para operações industriais exigentes, o equipamento combina robustez, precisão e tecnologia avançada para remover incrustações severas, resíduos industriais, revestimentos, depósitos minerais e outros contaminantes de alta aderência.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Capaz de operar com pressões de até 3.000 bar (4351 PSI), o Line Worker 250 proporciona um nível de limpeza extremamente eficiente, garantindo alto desempenho mesmo nas aplicações mais desafiadoras. Seu sistema de operação permite maior controle do processo, estabilidade durante o trabalho e redução da exposição do operador, tornando as operações mais seguras e produtivas.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Com estrutura robusta, proteção IP65/IP55 e construção voltada para ambientes industriais, o equipamento foi projetado para operação contínua, oferecendo alta confiabilidade e durabilidade. Seu design compacto e funcional facilita a mobilidade e a aplicação em diferentes tipos de superfícies e ambientes de trabalho.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Equipado com sistema elétrico 400 V / 50 Hz e desenvolvido para uso intensivo, o Robo Line Worker 250 mantém elevada eficiência operacional ao mesmo tempo em que garante precisão e consistência nos resultados de limpeza técnica.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Esse robô representa uma solução avançada para operações de hidrojateamento automatizado, proporcionando ganhos significativos em segurança, produtividade e qualidade do processo de limpeza industrial.
          </p>
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
            Pressão de trabalho de até 3.000 bar (4351 PSI) <br/>



            Tecnologia alemã Falch, referência mundial em hidrojato <br/><br/>



            Alta eficiência na remoção de incrustações e contaminantes severos <br/><br/>



            Estrutura robusta com proteção IP65 / IP55 <br/><br/>



            Operação estável com maior segurança para o operador <br/><br/>



            Equipamento projetado para aplicações industriais exigentes
          </p>
        </div>
      </section>
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default RoboWorker250;