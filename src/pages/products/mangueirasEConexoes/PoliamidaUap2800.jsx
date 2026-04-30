import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import poliamidaUap2800 from '@/assets/images/mangueiras-conexoes.jpg';
import seloParker from "@/assets/images/selo-certificado-parker.png";

const PoliamidaSAP1500 = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Poliamida UAP', cover: poliamidaUap2800, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Poliamida UAP - Mamuth</title>
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left flex items-center gap-4"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Poliamida UAP 2800
            <img 
              src={seloParker}
              alt="Selo de Qualidade" 
              className="w-16 h-auto md:w-32 md:h-auto object-contain" 
            />
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed font-bold mb-10 text-left">
            Todas as mangueiras Mamuth são testadas em bancada de teste hidrostático de 6.900 
            bar (100.050 psi) e emitido Certificado de Teste Hidrostático.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            APLICAÇÃO Utilizadas em sistemas de limpeza, desobstrução, remoção de resíduos e preparação 
            de superfícies com o uso de Hidrojateamento. São também conhecidas popularmente como “rabichos” ou “lanças flexíveis”;
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            CONSTRUÇÃO Tubo interno fabricado em Poliamida rígido envolto por camadas 
            de espirais trançadas de fios de aço e cobertura de Poliamida;
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
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

          <div className="w-full overflow-hidden rounded-xl shadow-md border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-white text-xs md:text-sm" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Modelo</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">DI (mm)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">DE (mm)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Trab. (bar)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Trab. (psi)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Rupt. (bar)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Rupt. (psi)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Raio</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">kg/m</th>
                  <th className="py-4 px-2 font-bold">Ø Term.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "4/6", di: "4,0", de: "12,0", pb: "2.800", pp: "40.600", rb: "7.000", rp: "101.500", r: "120", w: "0,400", t: "15,0" },
                  { mod: "5/6", di: "5,0", de: "13,0", pb: "2.500", pp: "36.230", rb: "6.240", rp: "90.580", r: "175", w: "0,400", t: "18,0" },
                  { mod: "5/8", di: "5,0", de: "15,0", pb: "2.800", pp: "40.600", rb: "7.000", rp: "101.500", r: "200", w: "0,630", t: "19,0" },
                  { mod: "8/8", di: "8,0", de: "17,3", pb: "2.800", pp: "40.600", rb: "7.000", rp: "101.500", r: "200", w: "0,830", t: "24,0" },
                ].map((item, idx) => (
                  <tr key={idx} className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors text-[10px] sm:text-xs md:text-sm">
                    <td className="py-3 px-2 border-r border-gray-200 font-bold text-center">{item.mod}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.di}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.de}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.pb}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.pp}</td>
                    <td className="py-3 px-2 border-r border-gray-200 font-bold text-center text-orange-600 bg-orange-50/30">{item.rb}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.rp}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.r}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.w}</td>
                    <td className="py-3 px-2 text-center font-semibold">{item.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default PoliamidaSAP1500;