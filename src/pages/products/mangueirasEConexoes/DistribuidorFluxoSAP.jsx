import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import distribuidorFluxo from '@/assets/images/distribuidores-fluxo-sap.png'

const DistribuidoresFluxoSAP = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Distribuidor de Fluxo SAP', artist: 'Trifásico', cover: distribuidorFluxo, color: '#FF5101' },
        { id: 2, title: 'Distribuidor de Fluxo SAP', artist: 'Vista lateral', cover: distribuidorFluxo, color: '#FF5101' },
        { id: 3, title: 'Distribuidor de Fluxo SAP', artist: 'Detalhes', cover: distribuidorFluxo, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Distribuidores de Fluxo SAP - Mamuth</title>
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
            Distribuidores de Fluxo SAP
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Distribuidores são utilizados para dividir o fluxo de água e multiplicar o número de mangueiras a serem utilizadas, 
           permitindo que múltiplas operações ocorram simultaneamente. Com esses dispositivos, é possível otimizar o uso 
           de recursos hídricos, direcionando a água para diferentes pontos de aplicação de forma eficiente e controlada. 
           Além disso, os distribuidores garantem uma distribuição uniforme do fluxo, essencial para a manutenção da pressão 
           adequada em todas as saídas, o que resulta em maior produtividade e detalhes nas operações.
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

          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <table className="w-full border-collapse table-fixed bg-white">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[5%] uppercase">#</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[15%] uppercase">Modelo</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[15%] uppercase">Código</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[10%] uppercase">P. Max</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[20%] uppercase">Entrada (Rosca)</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[20%] uppercase">Saída (Rosca)</th>
                  <th className="py-6 px-1 font-bold text-xs md:text-sm text-center w-[15%] uppercase">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, mod: "Tipo T", cod: "3006.0014", pres: "1.500", ent: "M30 PL (F)", sai: "M22 PL (2x) (F)", app: "Mangueiras" },
                  { id: 2, mod: "Flauta", cod: "3006.0046", pres: "1.500", ent: "M30 PL (F)", sai: "M22 PL (3x) (F)", app: "Mangueiras" },
                ].map((item) => (
                  <tr key={item.id} className="text-gray-800 border-b border-gray-200">
                    <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center font-bold">{item.id}</td>
                    <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center">{item.mod}</td>
                    <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-base text-center font-semibold">{item.cod}</td>
                    <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center">{item.pres}</td>
                    <td className="py-8 px-1 border-r border-gray-200 text-xs md:text-base text-center">{item.ent}</td>
                    <td className="py-8 px-1 border-r border-gray-200 text-xs md:text-base text-center font-bold text-[#FF6B0A]">{item.sai}</td>
                    <td className="py-8 px-1 text-sm md:text-lg text-center">{item.app}</td>
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

export default DistribuidoresFluxoSAP;