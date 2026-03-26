import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import poliamidaSap1500 from '@/assets/images/poliamida-sap-ate1500.png';

const PoliamidaSAP1500 = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Poliamida SAP', artist: 'Trifásico', cover: poliamidaSap1500, color: '#FF5101' },
        { id: 2, title: 'Poliamida SAP', artist: 'Vista lateral', cover: poliamidaSap1500, color: '#FF5101' },
        { id: 3, title: 'Poliamida SAP', artist: 'Detalhes', cover: poliamidaSap1500, color: '#FF5101' }
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Poliamida SAP
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

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full min-w-[1200px] border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Modelo</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmetro Interno (mm)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Diâmetro Externo (mm)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">P. Trabalho (bar)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">P. Trabalho (psi)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg text-orange-200">P. Ruptura (bar)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">P. Ruptura (psi)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Raio Curvatura (mm)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Peso (kg/m)</th>
                  <th className="py-6 px-4 font-bold text-lg">Ø Terminal (mm)</th>
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
                  <tr key={index} className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors">
                    <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">{item.mod}</td>
                    <td className="py-8 px-4 border-r border-gray-200 text-xl text-center">{item.di}</td>
                    <td className="py-8 px-4 border-r border-gray-200 text-xl text-center">{item.de}</td>
                    <td className="py-8 px-4 border-r border-gray-200 text-xl text-center">{item.ptb}</td>
                    <td className="py-8 px-4 border-r border-gray-200 text-xl text-center">{item.ptp}</td>
                    <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl text-center text-orange-600 bg-orange-50/10">{item.prb}</td>
                    <td className="py-8 px-4 border-r border-gray-200 text-xl text-center">{item.prp}</td>
                    <td className="py-8 px-4 border-r border-gray-200 text-xl text-center">{item.rc}</td>
                    <td className="py-8 px-4 border-r border-gray-200 text-xl text-center">{item.p}</td>
                    <td className="py-8 px-4 text-xl text-center font-semibold">{item.dt}</td>
                  </tr>
                ))}
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