import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import imgFeira from '@/assets/images/feira-navalshore.jpg'

const FeiraNavalShore = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Mamuth Hydro na Feira Navalshore - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative pt-10 pb-20 px-4 w-full" 
        style={{ backgroundColor: 'var(--color-dark-blue)', zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-6xl font-bold mb-12 tracking-tight leading-loose" 
            style={{ lineHeight: '1.4' }}
          >
            Feira Navalshore
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block"
          >
            <img 
              src={imgFeira} 
              alt="Typhoon Jet 500" 
              className="mx-auto max-w-full h-auto md:max-h-[400px] rounded-[25px] block"
            />
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-5xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            R$ 12 Bilhões em Negócios. E Você, Onde Estará?
          </h2>

          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-left">
           A Navalshore é o principal evento da indústria naval e offshore da América Latina, reunindo estaleiros, armadores, fornecedores de tecnologia, empresas de energia e especialistas do setor marítimo. Reconhecida como uma das mais importantes vitrines de inovação e negócios da área, a feira apresenta soluções voltadas à construção naval, manutenção, operações portuárias e exploração offshore, além de promover debates estratégicos sobre o futuro da indústria marítima no Brasil e no mundo.
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-left">
          Realizada no estado do Rio de Janeiro, a Navalshore conecta os principais players do mercado, criando um ambiente propício para networking qualificado, geração de oportunidades comerciais e fortalecimento de parcerias estratégicas. O evento também destaca avanços em tecnologia, segurança operacional e eficiência produtiva, pilares fundamentais para o crescimento sustentável do setor naval e offshore.
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-left">
          Em 2026, a Mamuth realiza sua primeira participação na Navalshore, marcando um novo momento em sua trajetória de expansão e posicionamento estratégico. A presença no evento reforça o compromisso da empresa em ampliar sua atuação no setor marítimo, apresentando soluções de alta performance voltadas para operações industriais exigentes. Essa estreia representa um passo importante na consolidação da Mamuth como parceira confiável e inovadora em diferentes segmentos da indústria pesada.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeiraNavalShore;