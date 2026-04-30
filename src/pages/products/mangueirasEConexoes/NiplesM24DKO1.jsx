import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import niplesM24DKO from '@/assets/images/niples-m24dko-1.png';

const PoliamidaSAP1500 = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Niples M24DKO-1',  cover: niplesM24DKO, color: '#FF5101' },
        { id: 2, title: 'Niples M24DKO-1',  cover: niplesM24DKO, color: '#FF5101' },
        { id: 3, title: 'Niples M24DKO-1',  cover: niplesM24DKO, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Niples M24DKO-1 Mamuth</title>
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
            Niples M24DKO-1
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Conexões, Uniões, Adaptadores e Engates, são itens necessários para unir, acoplar e adaptar mangueiras e 
           acessórios. A MAMUTH possui uma linha completa destes itens para atender todas as necessidades. 
           Também atendemos solicitações e fabricamos itens sob medida e encomenda. 
           Nosso portfólio de divide em duas linhas, a limitada até 1500 BAR e a que pode ser 
           utilizada em pressões de até 2800 Bar todos esses itens são fabricados em aço inoxidável de alta performance.
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
                <tr className="text-white text-[10px] md:text-xs uppercase" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-3 px-1 border-r border-orange-400 font-bold">#</th>
                  <th className="py-3 px-2 border-r border-orange-400 font-bold">Modelo</th>
                  <th className="py-3 px-2 border-r border-orange-400 font-bold">Código</th>
                  <th className="py-3 px-1 border-r border-orange-400 font-bold text-center">Pressão (bar)</th>
                  <th className="py-3 px-2 border-r border-orange-400 font-bold">Rosca A</th>
                  <th className="py-3 px-2 border-r border-orange-400 font-bold">Rosca B</th>
                  <th className="py-3 px-2 font-bold">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, cod: "3006.0174", p: "1.500", ra: "M7 (M)", rb: "M7 (M)" },
                  { id: 2, cod: "3006.0208", p: "1.500", ra: "M7 (M)", rb: "1/8 BSP (M)" },
                  { id: 3, cod: "3006.0201", p: "1.500", ra: "1/8 BSP (M)", rb: "1/8 BSP (M)" },
                  { id: 4, cod: "3006.0150", p: "1.500", ra: "1/8 (M)", rb: "1/8 (M)" },
                  { id: 5, cod: "3006.0145", p: "1.500", ra: "1/4 BSP (M)", rb: "1/4 BSP (M)" },
                  { id: 6, cod: "3006.0421", p: "1.500", ra: "1/4 BSP (M)", rb: "1/2 BSP (M)" },
                  { id: 7, cod: "3006.0096", p: "1.000", ra: "1/4 BSP (M)", rb: "1/2 BSP (M)" },
                  { id: 8, cod: "3006.0531", p: "1.500", ra: "1/4 BSP (M)", rb: "M22 PL (M)" },
                  { id: 9, cod: "3006.0321", p: "1.500", ra: "1/4 BSP (M)", rb: "M22 BOL (M)" },
                  { id: 10, cod: "3006.0251", p: "1.500", ra: "1/4 BSP (M)", rb: "M24 DKO (M)" },
                  { id: 11, cod: "3006.0552", p: "1.000", ra: "1/2 NPT (M)", rb: "1/2 NPT (M)" },
                  { id: 12, cod: "3006.0273", p: "1.500", ra: "1/2 BSP (M)", rb: "1/2 BSP (M)" },
                  { id: 13, cod: "3006.0152", p: "1.000", ra: "1/2 BSP (M)", rb: "1/2 NPT (M)" },
                  { id: 14, cod: "3006.0056", p: "1.500", ra: "1/2 BSP (M)", rb: "M22 PL (M)" },
                  { id: 15, cod: "3006.0046", p: "1.500", ra: "1/2 BSP (M)", rb: "M24 PL (M)" },
                  { id: 16, cod: "3006.0015", p: "1.500", ra: "M22 PL (M)", rb: "M22 PL (M)" },
                  { id: 17, cod: "3006.0067", p: "1.500", ra: "M22 PL (M)", rb: "M24 DKO (M)" },
                  { id: 18, cod: "3006.0016", p: "1.500", ra: "M22 PL (M)", rb: "M30 PL (M)" },
                  { id: 19, cod: "3006.0017", p: "1.500", ra: "M24 DKO (M)", rb: "M24 DKO (M)" },
                  { id: 20, cod: "3006.0168", p: "1.500", ra: "M24 DKO (M)", rb: "M30 PL (M)" },
                  { id: 21, cod: "3006.0098", p: "1.000", ra: "M24 DKO (M)", rb: "M35 PL (M)" },
                  { id: 22, cod: "3006.0193", p: "1.000", ra: "M30 PL (M)", rb: "M30 PL (M)" },
                  { id: 23, cod: "3006.0091", p: "1.000", ra: "M35 PL (M)", rb: "M35 PL (M)" },
                  { id: 24, cod: "3006.0024", p: "1.000", ra: "M30 PL (M)", rb: "M36 DKO (M)" },
                  { id: 25, cod: "3006.0032", p: "1.000", ra: "M36 DKO (M)", rb: "M36 DKO (M)" },
                ].map((niple) => (
                  <tr key={niple.id} className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors text-[9px] sm:text-xs">
                    <td className="py-2 px-1 border-r border-gray-200 font-bold text-center">{niple.id}</td>
                    <td className="py-2 px-2 border-r border-gray-200">Niple</td>
                    <td className="py-2 px-2 border-r border-gray-200 tabular-nums">{niple.cod}</td>
                    <td className="py-2 px-1 border-r border-gray-200 text-center">{niple.p}</td>
                    <td className="py-2 px-2 border-r border-gray-200 text-[8px] sm:text-[11px] leading-tight">{niple.ra}</td>
                    <td className="py-2 px-2 border-r border-gray-200 font-bold text-orange-600 bg-orange-50/30 text-[8px] sm:text-[11px] leading-tight">
                      {niple.rb}
                    </td>
                    <td className="py-2 px-2 italic text-gray-500 text-[8px] sm:text-[10px]">Varetas, Bicos, etc.</td>
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