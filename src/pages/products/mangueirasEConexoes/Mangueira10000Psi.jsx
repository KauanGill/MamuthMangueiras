import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import mangueira10kPsi from '@/assets/images/mangueira-10000psi.png';

const Mangueira10000PSI = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Mangueira até 10.000 psi- Mamuth</title>
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
         Mangueira até 10.000 psi
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-white p-2 rounded-[30px] shadow-2xl"
          >
            <img 
              src={mangueira10kPsi} 
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
           APLICAÇÃO: Recomendadas para sistemas de limpeza, desobstrução, remoção de resíduos e preparação de superfícies com o uso de Hidrojateamento;
          </p>
           <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-justify md:text-left">
           CONSTRUÇÃO: Tubo interno fabricado em borracha sintética resistente a água envolta por espirais trançadas de fio de aço, coberta com uma camada de borracha sintética resistente ao ozônio, intempéries e calor;
          </p>
           <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-justify md:text-left">
           TEMPERATURA DE TRABALHO: Indicadas para operações em temperatura entre - 40°C até +100°C. Temperatura máxima de trabalho intermitente: +121°C
          </p>
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center rounded-[30px] mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
              Veja mais informações técnicas sobre este produto:
            </h2>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full min-w-[1000px] border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Modelo</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmetro Interno (mm)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmetro Externo (mm)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão de Trabalho(bar)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão de Trabalho(psi)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão de Ruptura(bar)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão de Ruptura(psi)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Raio de Curvatura (mm.r)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Peso por metro (kg/m)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmetro no terminal (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">1/4</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">6,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">14,7</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">700</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">10.000</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">1.450</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">21.000</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">100</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,370</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">18,0</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">3/8</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">10,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">16,8</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">700</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">10.000</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">1.450</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">21.000</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">127</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,395</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">22,5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .custom-scrollbar::-webkit-scrollbar { height: 8px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF6B0A; border-radius: 10px; }
          `}} />
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

export default Mangueira10000PSI;