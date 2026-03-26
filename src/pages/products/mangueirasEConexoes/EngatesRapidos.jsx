import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";

// Import da imagem
import engatesRapidos from '@/assets/images/engates-rapidos.png';

const EngatesRapidos = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Engates Rápidos', artist: 'Trifásico', cover: engatesRapidos, color: '#FF5101' },
        { id: 2, title: 'Engates Rápidos', artist: 'Vista lateral', cover: engatesRapidos, color: '#FF5101' },
        { id: 3, title: 'Engates Rápidos', artist: 'Detalhes', cover: engatesRapidos, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Engates Rápidos - Mamuth</title>
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
            Engates Rápidos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Os Engates Rápido modelos ER12 e ER20 são indicados para unir mangueiras de forma prática e segura. 
           Estes engates possuem uma porca roscada que rosqueiam e engatam os lados macho e fêmea não havendo a necessidade da utilização de uma chave para torquear, somente o aperto manual.
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
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[12%] uppercase">Modelo</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[15%] uppercase">Código</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[10%] uppercase">P. Max</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[20%] uppercase">Lado Macho</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[20%] uppercase">Lado Fêmea</th>
        <th className="py-6 px-1 font-bold text-xs md:text-sm text-center w-[18%] uppercase">Aplicação</th>
      </tr>
    </thead>
    <tbody>
      {[
        { id: 1, mod: "ER12", cod: "3020.0019", pres: "1.500", m: "1/8 BSP (F)", f: "1/8 BSP (F)", app: "Mangueiras" },
        { id: 2, mod: "ER12", cod: "3020.0027", pres: "1.500", m: "1/4 BSP (F)", f: "1/4 BSP (F)", app: "Mangueiras" },
        { id: 3, mod: "ER12", cod: "3020.0003", pres: "1.500", m: "1/2 BSP (F)", f: "1/2 BSP (F)", app: "Mangueiras" },
        { id: 4, mod: "ER12", cod: "3020.0023", pres: "1.000", m: "1/2 NPT (F)", f: "1/2 NPT (F)", app: "Mangueiras" },
        { id: 5, mod: "ER12", cod: "3020.0021", pres: "1.500", m: "M22 PL (F)", f: "M22 PL (F)", app: "Mangueiras" },
        { id: 6, mod: "Luva", cod: "3020.0024", pres: "1.000", m: "M35 PL (F)", f: "M35 PL (F)", app: "Mangueiras" },
      ].map((item) => (
        <tr key={item.id} className="text-gray-800 border-b border-gray-200">
          <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-base text-center font-bold">{item.id}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-base text-center">{item.mod}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-sm text-center font-semibold">{item.cod}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-base text-center">{item.pres}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center">{item.m}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-bold text-[#FF6B0A]">{item.f}</td>
          <td className="py-6 px-1 text-sm md:text-base text-center">{item.app}</td>
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

export default EngatesRapidos;