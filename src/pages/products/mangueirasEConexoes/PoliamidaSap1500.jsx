import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import poliamidaSap1500 from '@/assets/images/poliamida-sap-ate1500.png';
import seloParker from "@/assets/images/selo-certificado-parker.png";

const PoliamidaSAP1500 = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Poliamida SAP', cover: poliamidaSap1500, color: '#FF5101' },
        { id: 2, title: 'Poliamida SAP', cover: poliamidaSap1500, color: '#FF5101' },
        { id: 3, title: 'Poliamida SAP', cover: poliamidaSap1500, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Poliamida SAP - Mamuth</title>
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
            Poliamida SAP 1500
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
                <tr className="text-white text-sm" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Modelo</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Ø Int. (mm)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Ø Ext. (mm)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">P. Trab (bar)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">P. Trab (psi)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">P. Rupt (bar)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">P. Rupt (psi)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Raio Curv.</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">Peso (kg/m)</th>
                  <th className="py-4 px-2 font-bold">Ø Term.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "3/2", di: "3,0", de: "7,0", ptb: "1.100", ptp: "15.950", prb: "2.750", prp: "39.875", rc: "60", p: "0,072", dt: "9,0" },
                  { mod: "4/2", di: "4,0", de: "7,7", ptb: "1.200", ptp: "17.400", prb: "3.000", prp: "43.511", rc: "75", p: "0,100", dt: "9,5" },
                  { mod: "4/2W", di: "4,0", de: "7,9", ptb: "1.500", ptp: "21.750", prb: "3.800", prp: "55.114", rc: "75", p: "0,110", dt: "10,0" },
                  { mod: "5/2", di: "5,0", de: "9,5", ptb: "1.000", ptp: "14.500", prb: "2.500", prp: "36.250", rc: "95", p: "0,140", dt: "12,0" },
                  { mod: "5/4", di: "5,0", de: "11,5", ptb: "1.800", ptp: "26.100", prb: "4.500", prp: "65.250", rc: "130", p: "0,290", dt: "15,0" },
                  { mod: "6/2", di: "6,0", de: "11,5", ptb: "1.100", ptp: "15.950", prb: "2.750", prp: "39.875", rc: "110", p: "0,200", dt: "15,0" },
                  { mod: "8/2", di: "8,0", de: "15,8", ptb: "1.000", ptp: "14.500", prb: "2.500", prp: "36.250", rc: "90", p: "0,350", dt: "20,0" },
                  { mod: "8/4", di: "8,0", de: "15,2", ptb: "1.500", ptp: "21.750", prb: "3.800", prp: "54.375", rc: "175", p: "0,440", dt: "20,5" },
                ].map((item, index) => (
                  <tr key={index} className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors text-xs md:text-sm">
                    <td className="py-3 px-2 border-r border-gray-200 font-bold">{item.mod}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.di}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.de}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.ptb}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.ptp}</td>
                    <td className="py-3 px-2 border-r border-gray-200 font-bold text-center text-orange-600 bg-orange-50/30">{item.prb}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.prp}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.rc}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.p}</td>
                    <td className="py-3 px-2 text-center font-semibold">{item.dt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default PoliamidaSAP1500;