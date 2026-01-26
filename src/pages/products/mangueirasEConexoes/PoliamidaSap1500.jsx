import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import poliamidaSap1500 from '@/assets/images/poliamida-sap-ate1500.png';

const PoliamidaSAP1500 = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Poliamida SAP até 1.500 bar- Mamuth</title>
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
           Poliamida SAP até 1.500 bar
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-white p-2 rounded-[30px] shadow-2xl"
          >
            <img 
              src={poliamidaSap1500} 
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

          <p className="text-2xl text-gray-600 leading-relaxed font-bold mb-10 text-justify md:text-left">
            Todas as mangueiras Mamuth são testadas em bancada de teste hidrostático de 6.900 
            bar (100.050 psi) e emitido Certificado de Teste Hidrostático.
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-justify md:text-left">
            APLICAÇÃO Utilizadas em sistemas de limpeza, desobstrução, remoção de resíduos e preparação 
            de superfícies com o uso de Hidrojateamento. São também conhecidas popularmente como “rabichos” ou “lanças flexíveis”;
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-justify md:text-left">
            CONSTRUÇÃO Tubo interno fabricado em Poliamida rígido envolto por camadas 
            de espirais trançadas de fios de aço e cobertura de Poliamida;
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 text-justify md:text-left">
           TEMPERATURA DE TRABALHO Indicadas para operações em temperatura entre - 10°C até +70°C;
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
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmtro interno(mm)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmtro externo(mm)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão de Trabalho(bar)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressao de Trabalho(psi)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão de Ruptura(bar)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão de Ruptura(psi)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Raio de Curvatura(mm.r)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Peso por metro(kg/m)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmetro no terminal(kg/m)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">3/2</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">3,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">7,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.100</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">15.950</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">2.750</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">39.875</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">60</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,072</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">9,0</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">4/2</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">4,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">7,7</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.200</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">17.400</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">3.000</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">43.511</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">75</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,100</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">9,5</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">4/2W</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">4,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">7,9</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">21.750</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">3.800</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">55.114</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">75</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0.110</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">10,0</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">5/2</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">5,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">9,5</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.000</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">14.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">2.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">36.250</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">95</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,140</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">12,0</td>
                </tr>
              </tbody>
               <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">5/4</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">5,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">11,5</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.800</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">26.100</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">4.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">65.250</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">130</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,290</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">15,0</td>
                </tr>
              </tbody>
               <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">6/2</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">2,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">11,5</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.100</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">15.950</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">2.750</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">39.875</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">110</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,200</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">15,0</td>
                </tr>
              </tbody>
               <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">8/2</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">8,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">15,8</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.000</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">14.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">2.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">36.250</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">90</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,350</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">20,0</td>
                </tr>
              </tbody>
               <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">8/4</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">8,0</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">15,2</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1.500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">21.750</td>
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">3.800</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">54.375</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">175</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">0,440</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">20,5</td>
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

export default PoliamidaSAP1500;