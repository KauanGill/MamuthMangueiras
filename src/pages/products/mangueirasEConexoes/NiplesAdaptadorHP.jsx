import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import niplesAdaptador from '@/assets/images/niples-adaptador-hp9-16.png';

const NiplesAdaptadorHP = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Niples Adaptador HP', artist: 'Trifásico', cover: niplesAdaptador, color: '#FF5101' },
        { id: 2, title: 'Niples Adaptador HP', artist: 'Vista lateral', cover: niplesAdaptador, color: '#FF5101' },
        { id: 3, title: 'Niples Adaptador HP', artist: 'Detalhes', cover: niplesAdaptador, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Niples (Adaptador HP 9-16 HP X 9-16 JIC-1)- Mamuth</title>
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
            Niples Adaptador HP 
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Conexões, Uniões, Adaptadores e Engates, são itens necessários para unir, acoplar e adaptar 
           mangueiras e acessórios. A MAMUTH possui uma linha completa destes itens para atender todas 
           as necessidades. Também atendemos solicitações e fabricamos itens sob medida e encomenda. 
           Nosso portfólio de divide em duas linhas, a limitada até 1500 BAR e a que pode ser 
           utilizada em pressões de até 2800 Bar todos esses itens são fabricados 
           em aço inoxidável de alta performance.
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
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[5%] uppercase">#</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[12%] uppercase">Modelo</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[15%] uppercase">Código</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[10%] uppercase">P. Max (bar)</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[18%] uppercase">Rosca A (Tipo)</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[18%] uppercase">Rosca B (Tipo)</th>
        <th className="py-6 px-1 font-bold text-xs md:text-sm text-center w-[22%] uppercase">Aplicação</th>
      </tr>
    </thead>
    <tbody>
      {[
        { id: 1, cod: "3006.0394", p: "2.800", ra: "3/8 UNF LH (M)", rb: "9/16 UNF LH (M)" },
        { id: 2, cod: "3006.0588", p: "2.800", ra: "3/8 UNF LH (M)", rb: "7/16 UNF LH (M)" },
        { id: 3, cod: "3006.0018", p: "2.800", ra: "9/16 UNF LH (M)", rb: "9/16 UNF LH (M)" },
        { id: 4, cod: "3006.0299", p: "2.800", ra: "9/16 UNF LH (M)", rb: "9/16 UNF LH (M)" },
        { id: 5, cod: "3006.0557", p: "2.800", ra: "9/16 UNF LH (M)", rb: "7/16 UNF LH (M)" },
        { id: 6, cod: "3006.0275", p: "2.800", ra: "7/8 UNF LH (M)", rb: "7/8 UNF LH (M)" },
      ].map((item) => (
        <tr key={item.id} className="text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors">
          <td className="py-6 px-1 border-r border-gray-200 text-sm text-center font-bold">{item.id}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-sm text-center font-medium">Niple</td>
          <td className="py-6 px-1 border-r border-gray-200 text-sm text-center font-mono text-gray-600">{item.cod}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.p}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center">{item.ra}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-bold text-[#FF6B0A]">{item.rb}</td>
          <td className="py-6 px-1 text-xs md:text-sm text-center text-gray-500 italic">Mangueiras, acessórios...</td>
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

export default NiplesAdaptadorHP;