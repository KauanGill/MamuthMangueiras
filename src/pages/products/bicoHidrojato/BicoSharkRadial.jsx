import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import bicoSharkRadial from '@/assets/images/bico-shark-radial-40k.png';

const BicoSharkRadial = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Bico Shark-Radial 40K - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative pt-10 pb-20 px-4 w-full" 
        style={{ backgroundColor: 'var(--color-dark-blue)', zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-loose" 
            style={{ lineHeight: '1.4' }}
          >
         Bico Shark-Radial 40K
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-white p-2 rounded-[30px] shadow-2xl"
          >
            <img 
              src={bicoSharkRadial} 
              alt="Typhoon Jet 500" 
              className="mx-auto max-w-full h-auto md:max-h-[400px] rounded-[25px] block"
            />
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Outras Informações
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Shark-Jet Radial é uma ferramenta rotativa auto-propulsora indicada para limpeza e desobstrução de tubulações 
            com pressões de até 2800 bar (40.000psi) e vazão de até 40 L/min. Seus componentes internos tem o sistema de lubrificação 
            e refrigeração por óleo, além de um freio hidráulico para limitar as rotações. Esta ferramenta utiliza duas configurações 
            de cabeça, Polisher, Unplugger com ângulos de ataque deslocados, isso proporciona um desempenho de limpeza 
            mais elevado em uma maior área de ataque dentro de tubulações
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
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Código</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Pressão</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Vazão</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Entrada</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Diâm.</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Compr.</th>
                  <th className="py-4 px-1 font-bold text-[9px] sm:text-xs md:text-sm text-center">Aplicação (Tubos)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "Shark Radial 22K", cod: "1001.0064", pre: "1.500 bar", vaz: "40 L/m", ent: "1/4 BSP", dia: "47 mm", com: "230 mm", app: '2.1/8" a 6"' },
                  { mod: "Shark Radial 40K", cod: "1001.0054", pre: "2.800 bar", vaz: "30 L/m", ent: "9/16-18 LH", dia: "47 mm", com: "230 mm", app: '2.1/8" a 6"' },
                ].map((item, idx) => (
                  <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-gray-800 border-b border-gray-200`}>
                    <td className="py-4 px-1 border-r border-gray-200 font-bold text-[9px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.mod}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-base text-center">{item.cod}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.pre}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.vaz}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.ent}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.dia}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.com}</td>
                    <td className="py-4 px-1 text-[8px] sm:text-[10px] md:text-sm text-center leading-tight">{item.app}</td>
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

export default BicoSharkRadial;