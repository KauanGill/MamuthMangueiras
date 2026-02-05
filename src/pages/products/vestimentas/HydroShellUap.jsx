import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import hydroShellUAP from '@/assets/images/vestimenta-protecao.png';

const Typhoon170Monofasico = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Hydro-Shell UAP - Mamuth</title>
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
            Hydro-Shell UAP
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-white p-2 rounded-[30px] shadow-2xl"
          >
            <img 
              src={hydroShellUAP} 
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
            Macacão de proteção indicado para trabalhadores do setor Naval, Oil & Gás, Petroquímico e/ou operações
            com bombas de hidrojateamento modelo UAP. Confeccionado em tripla camada de tecido tramado sintético de alta 
            tenacidade impermeabilizado externamente com PVC, possui costuras impermeabilizadas. O fechamento frontal 
            é através de argolas metálicas de encaixe rápido cobertos por lapela, o capuz fixo pode ser ajustado por 
            cadarço com regulador e ponteira. Punhos e barras das pernas são ajustados por velcro. Possui lapela protetora 
            do pescoço, com fechamento posterior com velcro. Para maior conforto, existe tirantes de sustentação interna com 
            ajustes de altura por fecho rápido, isso ajuda a sustentar do peso do traje.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Vestimenta composta por <br/> <br/>



            Jaqueta Hydro-Shell UAP; <br/> <br/>



            Calça Hydro-Shell UAP; <br/> <br/>



            Luvas de Proteção; <br/> <br/>



            Botas de Proteção UAP; <br/> <br/>



            Óculos + Protetor Facial.
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
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Código</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Modelo</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão Max.</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Tamanhos</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Construção</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">1</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1320.0432</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">Jaqueta Hydro-Shell UAP</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">2800 bar</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">P/M/G/GG/EXG</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl font-semibold">Tecido Sintético + PVC</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">2</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1320.0433</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">Calça Hydro-Shell</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">2800 bar</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">P/M/G/GG/EXG</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl font-semibold">Tecido Sintético + PVC</td>
                </tr>
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

export default Typhoon170Monofasico;