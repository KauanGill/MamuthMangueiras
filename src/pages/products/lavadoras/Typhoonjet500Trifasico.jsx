import React, { useEffect, useState  } from 'react';
import { color, motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import AppleCoverFlow from "@/components/AppleCoverFlow";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination"; 5 
// Import da imagem
import typhoon500 from "@/assets/images/lavadora-typhoon-jet-500bar.jpeg"; 
import typhoon5002 from "@/assets/images/typhoonjet-500bar-1200L.png"; 
import typhoon5003 from "@/assets/images/typhoonjet-500bar-1200L.png";
import typhoonVideo from "@/assets/images/video-sobre.mp4"

const Typhoon500Trifasico = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { id: 1, title: 'Typhoon Jet 500', artist: 'Trifásico', cover: typhoon500, color: '#FF5101' },
    { id: 2, title: 'Typhoon Jet 500', artist: 'Vista lateral', cover: typhoon5002, color: '#FF5101' },
    { id: 3, title: 'Typhoon Jet 500', artist: 'Detalhes', cover: typhoon5003, color: '#FF5101' }
  ];
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Typhoon Jet 500 Trifásico - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
     <section 
        className="relative py-0 w-full"
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
            Typhoon-Jet 500: A Solução Completa para Limpeza Pesada
          </h2>   
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
        {/* Mantive o max-w-4xl conforme solicitado */}
        <div className="max-w-4xl mx-auto text-center p-4 md:p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">
              Veja mais informações técnicas sobre este produto:
            </h2>
          </div>

          {/* Removemos o overflow-x-auto e a largura mínima da tabela */}
          <div className="w-full">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  {/* Reduzi o padding (px-1) e o tamanho da fonte (text-xs) para caber tudo */}
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Pressão (bar)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Pressão (PSI)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Vazão (L/min)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Vazão (L/h)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Potência (cv)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Peso (kg)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Tensão</th>
                  <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm">Dimensões</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base">Typhoon-Jet 500</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base">500</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base">7252</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base">20</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base">1200</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold">20</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold">320</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold">Trifásico</td>
                  <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold">1200x800x950</td>
                </tr>
              </tbody>
            </table>
          </div>
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