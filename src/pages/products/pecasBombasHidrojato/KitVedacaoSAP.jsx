import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import kitVedacaoSAP from '@/assets/images/kit-vedacao-sap.png';

const KitVedacaoSAP = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Kit de Vedação SAP - Mamuth</title>
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
            className="text-white text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-loose" 
            style={{ lineHeight: '1.4' }}
          >
         Kit de Vedação SAP
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-white p-2 rounded-[30px] shadow-2xl"
          >
            <img 
              src={kitVedacaoSAP} 
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
            className="text-5xl md:text-6xl font-bold mb-10 md:text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Outras Informações
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-justify md:text-left">
            A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo 
            diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite 
            garantir altos padrões de qualidade e durabilidade. Cada componente passa por um rigoroso controle de qualidade 
            para garantir desempenho superior e compatibilidade total com as bombas existentes no mercado nacional. 
            Com a MAMUTH, você pode confiar que está adquirindo peças confiáveis ​​e de alta performance, projetadas para atender às demandas exigidas.
          </p>

        </div>
      </section>
      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-[30px] p-8 md:p-12 border-2 shadow-2xl"
            style={{ backgroundColor: '#d3d3d3', borderColor: '#FF6B0A' }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div 
                className="flex-shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center text-4xl font-black"
                style={{ color: '#FF6B0A', borderColor: '#FF6B0A' }}
              >
                !
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-black text-3xl font-bold mb-6">Atenção</h3>
                <p className="text-black text-xl leading-relaxed mb-8">
                  Para garantir a segurança e o desempenho ideal, utilize sempre 
                  <span style={{ color: '#FF6B0A' }} className="font-bold"> Peças e Acessórios Originais Mamuth</span>.
                </p>
                <button
                  onClick={() => navigate('/contato')}
                  className="px-10 py-4 rounded-full font-bold text-black text-lg transition-all hover:scale-105"
                  style={{ backgroundColor: '#FF6B0A' }}
                >
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitVedacaoSAP;