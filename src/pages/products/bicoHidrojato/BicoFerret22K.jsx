import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import bicoFerret22k from '@/assets/images/bico-ferret-22k.png';

const BicoFerret22K = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Bico Ferret 22K - Mamuth</title>
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
         Bico Ferret 22K
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-white p-2 rounded-[30px] shadow-2xl"
          >
            <img 
              src={bicoFerret22k} 
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
            O bico fixo tipo “ Foguetinho” é indicado para limpeza e desobstrução das paredes internas 
            de tubulações de trocadores de calor, evaporadores e linhas de tubos em geral. 
            Esses bicos estão disponíveis em diversos diâmetros variados e orifícios dimensionados 
            de acordo com a vazão, este modelo conta com 8 furos, sendo 2 frontais de ataque e 6 traseiros furos de limpeza e propulsão.
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-justify md:text-left">
           Pressão Máxima de Trabalho 1.000 bar

          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-justify md:text-left">
            Max. Working Pressure 14.500 psi
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
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Código</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão MÁX (bar)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Vazão MÁX (L/min)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Conexão Entrada</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmetro Ø</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Comprimento</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Aplicação Diâmetro do Tubo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">Ferret 2°</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1001.0014</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">55</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">FF 1/4 BSP</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">33 mm</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">50 mm</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">Tubos de "2 até 3""</td>
                </tr>
              </tbody>
               <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">Ferret°</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1001.0014</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">80</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">FF 1/4 BSP</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">33mm</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">103mm</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">Tubos de 4" até 6"</td>
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

export default BicoFerret22K;