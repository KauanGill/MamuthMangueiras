import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import typhoonJet170Monofasico from '@/assets/images/typhoonjet-170-bar-monofasico.png';
import iconCombustao from "@/assets/images/icon-combustao.svg"
import iconTrifasico from "@/assets/images/icon-trifasico.svg"

const Typhoon170Monofasico = () => {
  const navigate = useNavigate();

  const slides = [
    { id: 1, title: 'Typhoon Jet 170', artist: 'Trifásico', cover: typhoonJet170Monofasico, color: '#FF5101' },
    { id: 2, title: 'Typhoon Jet 170', artist: 'Monofásico', cover: typhoonJet170Monofasico, color: '#FF5101' },
    { id: 3, title: 'Typhoon Jet 170', artist: 'Detalhes', cover: typhoonJet170Monofasico, color: '#FF5101' }
  ];
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Typhoon Jet 170 Monofásico - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative py-0 w-full" 
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
            Typhoon-Jet 170: A Solução Completa para Limpeza Moderada
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          O Typhoon-Jet 170 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas moderadas em ambientes industriais, agrícolas e comerciais. Este equipamento garante resultados eficazes em desafios de limpeza de intensidade moderada.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          Ideal para fácil transporte e uso em diferentes ambientes. o Typhoon-Jet 170 oferece praticidade e eficiência durante o uso, tornando-o ideal para uma variedade de aplicações.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Além disso, o Typhoon-Jet 170 é fácil de operar e manter, proporcionando uma experiência de limpeza eficiente e sem complicações. Com ele, você pode remover sujeira leve a moderada de forma rápida e eficaz, economizando tempo e esforço.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Ideal para pequenos estabelecimentos comerciais, oficinas, condomínios, e outras áreas que necessitem de limpezas moderadas.


          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Itens Inclusos: <br/><br/>



            1 mangueira 3/8 de 20 metros de alta pressão <br/><br/>



            1 pistola de alta pressão Typhoon <br/><br/>



            1 bico leque de alta pressão Typhoon <br/><br/>



            1 regulador de pressão <br/><br/>



            1 carrinho 
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

            <div className="w-full mt-16 mb-6">
                     <div className="flex items-center justify-center gap-4 mb-8">
                         <img 
                           src={iconTrifasico} 
                           alt="Ícone Técnico" 
                           className="w-12 h-12 object-contain" 
                         />
                         <span className="text-gray-700 text-lg">Trifásico</span>
                       </div>
                     <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
                       <thead>
                         <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (bar)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (PSI)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/h)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência (cv)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso (kg)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Tensão</th>
                           <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="bg-white text-gray-800 border-b border-gray-200">
                           <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon-Jet 170</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">170</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">2465</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">12</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">720</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">5</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">40</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">Trifásico</td>
                           <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">950x640x540</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
           
                   {/* Segunda Div: Mantendo a proporção de maior em cima e menor embaixo */}
                   <div className="w-full mt-16 mb-6">
                     <div className="flex items-center justify-center gap-4 mb-8">
                         <img 
                           src={iconTrifasico} 
                           alt="Ícone Técnico" 
                           className="w-12 h-12 object-contain" 
                         />
                         <span className="text-gray-700 text-lg">Monofásico</span>
                       </div>
                     <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
                       <thead>
                         <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (bar)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (PSI)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/h)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência (cv)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso (kg)</th>
                           <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Tensão</th>
                           <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="bg-white text-gray-800 border-b border-gray-200">
                           <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon-Jet 170</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">170</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">2465</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">12</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">720</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">5</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">40</td>
                           <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center text-green-700">Monofásico</td>
                           <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">950x640x540</td>
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

export default Typhoon170Monofasico;