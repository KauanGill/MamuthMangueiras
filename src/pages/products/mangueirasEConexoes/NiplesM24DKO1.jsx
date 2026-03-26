import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import niplesM24DKO from '@/assets/images/niples-m24dko-1.png';

const PoliamidaSAP1500 = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Niples M24DKO-1', artist: 'Trifásico', cover: niplesM24DKO, color: '#FF5101' },
        { id: 2, title: 'Niples M24DKO-1', artist: 'Vista lateral', cover: niplesM24DKO, color: '#FF5101' },
        { id: 3, title: 'Niples M24DKO-1', artist: 'Detalhes', cover: niplesM24DKO, color: '#FF5101' }
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

  <div className="overflow-x-auto pb-4 custom-scrollbar">
  <table className="w-full min-w-[1000px] border-collapse rounded-xl overflow-hidden shadow-md">
    <thead>
      <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
        <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">#</th>
        <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Modelo</th>
        <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Código</th>
        <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão MAX (bar)</th>
        <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Rosca A (Tipo)</th>
        <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Rosca B (Tipo)</th>
        <th className="py-6 px-4 font-bold text-lg">Aplicação</th>
      </tr>
    </thead>
    <tbody>
      {[
        { id: 1, cod: "3006.0174", p: "1.500", ra: "M7 (Macho)", rb: "M7 (Macho)" },
        { id: 2, cod: "3006.0208", p: "1.500", ra: "M7 (Macho)", rb: "1/8 BSP (Macho)" },
        { id: 3, cod: "3006.0201", p: "1.500", ra: "1/8 BSP (Macho)", rb: "1/8 BSP (Macho)" },
        { id: 4, cod: "3006.0150", p: "1.500", ra: "1/8 (Macho)", rb: "1/8 (Macho)" },
        { id: 5, cod: "3006.0145", p: "1.500", ra: "1/4 BSP (Macho)", rb: "1/4 BSP (Macho)" },
        { id: 6, cod: "3006.0421", p: "1.500", ra: "1/4 BSP (Macho)", rb: "1/2 BSP (Macho)" },
        { id: 7, cod: "3006.0096", p: "1.000", ra: "1/4 BSP (Macho)", rb: "1/2 BSP (Macho)" },
        { id: 8, cod: "3006.0531", p: "1.500", ra: "1/4 BSP (Macho)", rb: "M22 PL (Macho)" },
        { id: 9, cod: "3006.0321", p: "1.500", ra: "1/4 BSP (Macho)", rb: "M22 BOL (Macho)" },
        { id: 10, cod: "3006.0251", p: "1.500", ra: "1/4 BSP (Macho)", rb: "M24 DKO (Macho)" },
        { id: 11, cod: "3006.0552", p: "1.000", ra: "1/2 NPT (Macho)", rb: "1/2 NPT (Macho)" },
        { id: 12, cod: "3006.0273", p: "1.500", ra: "1/2 BSP (Macho)", rb: "1/2 BSP (Macho)" },
        { id: 13, cod: "3006.0152", p: "1.000", ra: "1/2 BSP (Macho)", rb: "1/2 NPT (Macho)" },
        { id: 14, cod: "3006.0056", p: "1.500", ra: "1/2 BSP (Macho)", rb: "M22 PL (Macho)" },
        { id: 15, cod: "3006.0046", p: "1.500", ra: "1/2 BSP (Macho)", rb: "M24 PL (Macho)" },
        { id: 16, cod: "3006.0015", p: "1.500", ra: "M22 PL (Macho)", rb: "M22 PL (Macho)" },
        { id: 17, cod: "3006.0067", p: "1.500", ra: "M22 PL (Macho)", rb: "M24 DKO (Macho)" },
        { id: 18, cod: "3006.0016", p: "1.500", ra: "M22 PL (Macho)", rb: "M30 PL (Macho)" },
        { id: 19, cod: "3006.0017", p: "1.500", ra: "M24 DKO (Macho)", rb: "M24 DKO (Macho)" },
        { id: 20, cod: "3006.0168", p: "1.500", ra: "M24 DKO (Macho)", rb: "M30 PL (Macho)" },
        { id: 21, cod: "3006.0098", p: "1.000", ra: "M24 DKO (Macho)", rb: "M35 PL (Macho)" },
        { id: 22, cod: "3006.0193", p: "1.000", ra: "M30 PL (Macho)", rb: "M30 PL (Macho)" },
        { id: 23, cod: "3006.0091", p: "1.000", ra: "M35 PL (Macho)", rb: "M35 PL (Macho)" },
        { id: 24, cod: "3006.0024", p: "1.000", ra: "M30 PL (Macho)", rb: "M36 DKO (Macho)" },
        { id: 25, cod: "3006.0032", p: "1.000", ra: "M36 DKO (Macho)", rb: "M36 DKO (Macho)" },
      ].map((niple) => (
        <tr key={niple.id} className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors">
          <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl text-center">{niple.id}</td>
          <td className="py-8 px-4 border-r border-gray-200 text-xl">Niple</td>
          <td className="py-8 px-4 border-r border-gray-200 text-xl">{niple.cod}</td>
          <td className="py-8 px-4 border-r border-gray-200 text-xl text-center">{niple.p}</td>
          <td className="py-8 px-4 border-r border-gray-200 text-xl">{niple.ra}</td>
          <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl text-orange-600 bg-orange-50/10">{niple.rb}</td>
          <td className="py-8 px-4 text-xl italic text-gray-500 text-center">Varetas, Bicos, etc.</td>
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