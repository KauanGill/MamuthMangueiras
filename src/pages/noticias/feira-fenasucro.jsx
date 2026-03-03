import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import imgFeira from '@/assets/images/feira-fenasucro.jpg'

const FeiraFenasucro = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Mamuth Hydro na Feira Fenasucro - Mamuth</title>
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
            Feira Fenasucro
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
            5 Anos Fazendo Parte da Maior Feira de Bioenergia do Mundo.
          </h2>

          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-left">
           A Fenasucro & Agrocana é reconhecida como a maior feira mundial voltada à cadeia produtiva da bioenergia, reunindo empresas, especialistas e lideranças do setor sucroenergético para apresentar inovações, tecnologias e soluções voltadas à eficiência industrial e à sustentabilidade. Realizada anualmente em Sertãozinho, no interior de São Paulo, a feira se consolidou como um dos principais pontos de encontro do mercado de bioenergia, biocombustíveis e energias renováveis, promovendo networking estratégico, geração de negócios e debates técnicos de alto nível.
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-left">
          A Mamuth participa da Fenasucro há mais de cinco anos consecutivos, reforçando seu compromisso com inovação, qualidade e presença ativa no desenvolvimento do setor. Ao longo dessas edições, a empresa tem apresentado suas soluções e tecnologias voltadas para alta performance operacional, fortalecendo parcerias, ampliando sua visibilidade no mercado e acompanhando de perto as tendências que impulsionam a indústria. Essa presença constante demonstra o posicionamento sólido da Mamuth como referência técnica e parceira estratégica para o setor sucroenergético.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeiraFenasucro;