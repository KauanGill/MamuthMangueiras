import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import mangueira10kPsi from '@/assets/images/mangueira-10000psi.png';

const Mangueira10000PSI = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Mangueira até 10.000 psi', artist: 'Trifásico', cover: mangueira10kPsi, color: '#FF5101' },
        { id: 2, title: 'Mangueira até 10.000 psi', artist: 'Vista lateral', cover: mangueira10kPsi, color: '#FF5101' },
        { id: 3, title: 'Mangueira até 10.000 psi', artist: 'Detalhes', cover: mangueira10kPsi, color: '#FF5101' }
  ];

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
            Mangueira até 10.000 psi
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           APLICAÇÃO: Recomendadas para sistemas de limpeza, desobstrução, remoção de resíduos e preparação de superfícies com o uso de Hidrojateamento;
          </p>
           <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           CONSTRUÇÃO: Tubo interno fabricado em borracha sintética resistente a água envolta por espirais trançadas de fio de aço, coberta com uma camada de borracha sintética resistente ao ozônio, intempéries e calor;
          </p>
           <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
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

          <div className="w-full overflow-hidden rounded-xl shadow-md border border-gray-200">
            <table className="w-full border-collapse table-fixed bg-white">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[7%] uppercase">Mod.</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Ø Int. (mm)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Ø Ext. (mm)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[12%] uppercase">P. Trab. (bar/psi)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[12%] uppercase">P. Rupt. (bar/psi)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Raio Curv.</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Peso (kg/m)</th>
                  <th className="py-4 px-1 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Ø Term. (mm)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "1/4", int: "6,0", ext: "14,7", p_t: "700 / 10k", p_r: "1.450 / 21k", raio: "100", peso: "0,370", term: "18,0" },
                  { mod: "3/8", int: "10,0", ext: "16,8", p_t: "700 / 10k", p_r: "1.450 / 21k", raio: "127", peso: "0,395", term: "22,5" },
                ].map((item, idx) => (
                  <tr key={idx} className="text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors">
                    <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-base text-center font-bold">{item.mod}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.int}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.ext}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-medium bg-gray-50">{item.p_t}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-bold text-[#FF6B0A] bg-orange-50/30">{item.p_r}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.raio}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.peso}</td>
                    <td className="py-6 px-1 text-sm text-center">{item.term}</td>
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

export default Mangueira10000PSI;