import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// Import da imagem
import typhoon500 from "@/assets/images/lavadora-typhoon-jet-500bar.jpeg";
import typhoonVideo from "@/assets/images/video-sobre.mp4";

const Typhoon500Trifasico = () => {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const items = [
    { type: "image", src: typhoon500 },
    { type: "image", src: typhoon500 },
    { type: "video", src: typhoonVideo },
    { type: "image", src: typhoon500 }
  ];

  // autoplay
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  // iniciar página no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prevIndex = (index - 1 + items.length) % items.length;
  const nextIndex = (index + 1) % items.length;

  const renderItem = (item, isCenter = false) => {

  if (item.type === "video") {
      return (
        <video
          src={item.src}
          className={`rounded-2xl mx-auto ${
            isCenter ? "w-[125%]" : "w-[95%]"
          }`}
          autoPlay={isCenter}
          muted
          loop
          controls={isCenter}
        />
      );
    }

    return (
      <img
        src={item.src}
        className={`rounded-2xl mx-auto ${
          isCenter ? "w-[85%]" : "w-[75%]"
        }`}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">

      <Helmet>
        <title>Typhoon Jet 500 Trifásico - Mamuth</title>
      </Helmet>

      {/* HERO */}
      <section
        className="relative pt-10 pb-20 px-4 w-full"
        style={{ backgroundColor: 'var(--color-dark-blue)', zIndex: 1 }}
      >

        <div className="max-w-7xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-loose"
          >
            Lavadora de alta pressão Typhoon-Jet <br />
            500 BAR (7251 PSI) 1.200 L/H Trifásico
          </motion.h1>

          {/* CARROSSEL */}
          <div
            className="relative flex items-center justify-center overflow-hidden py-16"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >

            {/* ESQUERDA */}
            <motion.div
              key={prevIndex}
              onClick={() => setIndex(prevIndex)}
              className="absolute left-10 w-[28%] opacity-40 blur-sm scale-90 cursor-pointer"
              animate={{ x: -60 }}
              transition={{ duration: 0.5 }}
            >
              {renderItem(items[prevIndex])}
            </motion.div>

            {/* CENTRO */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="w-[36%] z-10"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {renderItem(items[index], true)}
              </motion.div>
            </AnimatePresence>

            {/* DIREITA */}
            <motion.div
              key={nextIndex}
              onClick={() => setIndex(nextIndex)}
              className="absolute right-10 w-[28%] opacity-40 blur-sm scale-90 cursor-pointer"
              animate={{ x: 60 }}
              transition={{ duration: 0.5 }}
            >
              {renderItem(items[nextIndex])}
            </motion.div>

          </div>

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
            Typhoon-Jet 500: A Solução Completa para Limpeza Pesada
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Typhoon-Jet 500 é um equipamento de alta pressão projetado para oferecer desempenho excepcional 
            em limpezas realmente muito pesadas em ambientes industriais, agrícolas e comerciais. 
            Com uma pressão de 500 bar, uma vazão de 20 L/min e uma potência de 20 cv, 
            este equipamento garante resultados superiores em qualquer desafio de limpeza.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Sua estrutura robusta e resistente é construída para suportar as demandas mais exigentes, garantindo durabilidade 
            e confiabilidade mesmo nas situações mais extremas. Com um peso de 280 kg e dimensões de 1200 x 800 x 900 mm 
            (C x L x A), o Typhoon-Jet 500 oferece estabilidade e facilidade de manobra durante o uso, tornando-o ideal 
            para uma variedade de aplicações que exigem limpeza pesada.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Além disso, o Typhoon-Jet 500 é fácil de operar e manter, proporcionando uma experiência de 
            limpeza eficiente e sem complicações. Com ele, você pode remover sujeira pesada, graxa, 
            óleo e outros resíduos de forma rápida e eficaz, economizando tempo e esforço.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Ideal para postos de gasolina, médios e grandes lava-rápidos, indústrias, construtoras, transportadoras, 
            empresas de ônibus e turismo, comércios, condomínios, limpadoras agropecuárias, entre outros.


          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Itens Inclusos: <br/><br/>



            1 mangueira 3/8 de 20 metros de alta pressão <br/><br/>



            1 pistola de alta pressão Typhoon <br/><br/>



            1 bico leque de alta pressão Typhoon <br/><br/>



            1 regulador de pressão <br/><br/>



            1 carrinho 
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
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Modelo</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão (bar)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Pressão (PSI)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Vazão (L/min)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Vazão (L/h)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Potência (cv)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Peso (kg)</th>
                  <th className="py-6 px-4 border-r border-orange-400 font-bold text-lg">Tipo de Tensão</th>
                  <th className="py-6 px-4 font-bold text-lg">Dimensões(mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-4 border-r border-gray-200 font-bold text-xl">Typhoon-Jet 500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">500</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">7252</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">20</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl">1200</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl font-semibold">20</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl font-semibold">320</td>
                  <td className="py-8 px-4 border-r border-gray-200 text-xl font-semibold">Trifásico</td>
                  <td className="py-8 px-4 text-xl font-semibold">1200x800x950</td>
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

export default Typhoon500Trifasico;