import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import expandeOperacoes from "@/assets/images/mamuth-expande-operacoes.jpg";
import limpezaIa from "@/assets/images/sistema-limpeza-ia.jpg";
import certificacaoIso from "@/assets/images/certificacao-iso.jpg";
import seloParker from "@/assets/images/selo-certificado-parker.png";
import imagemCertificado from "@/assets/images/certificado_mamuth.jpg";
import seloFalch from "@/assets/images/logo_falch_certificado.png"

const Noticias = () => {
  const [open, setOpen] = useState(false);

  const newsArticles = [
    {
      id: '1',
      title: '5 Anos Fazendo Parte da Maior Feira de Bioenergia do Mundo.',
      subtitle: 'E em 2026 não será diferente. A Mamuth Hydro espera por você na FENASUCRO.',
      excerpt: 'Há mais de cinco anos, a Mamuth Hydro caminha lado a lado com os protagonistas da bioenergia na FENASUCRO & AGROCANA. São mais de 53 mil visitantes, 1.600 marcas expositoras e um ambiente de negócios que só a maior feira do mundo voltada para a cadeia de bioenergia pode oferecer. Em 2026, estaremos novamente em Sertãozinho, de 11 a 14 de agosto, apresentando soluções hidráulicas de alta performance para quem move o futuro da matriz energética. Quem conhece, volta. Quem é Mamuth, marca presença.',
      date: '15 de Dezembro, 2023',
      buttonText: 'Encontre a Mamuth na FENASUCRO 2026',
      link: '/noticias/feira-fenasucro',
      image: expandeOperacoes
    },
    {
      id: '2',
      title: 'R$ 12 Bilhões em Negócios. E Você, Onde Estará?',
      subtitle: 'A Mamuth Hydro desembarca na Navalshore 2026.',
      excerpt: 'Enquanto a indústria naval e offshore se prepara para movimentar bilhões na 20ª Navalshore, a Mamuth Hydro já garantiu seu espaço. Sabemos que um evento que reuniu mais de 18 mil profissionais e os maiores estaleiros e petroleiras da América Latina é o lugar certo para quem busca soluções que realmente resolvem.',
      date: '10 de Dezembro, 2023',
      buttonText: 'Agende um Horário Com Nosso Time',
      link: '/noticias/feira-navalshore',
      image: limpezaIa
    },
    {
      id: '3',
      title: 'Certificação ISO 9001 renovada',
      excerpt: 'Mamuth renova certificação ISO 9001, reafirmando compromisso com qualidade e excelência operacional.',
      date: '5 de Dezembro, 2023',
      image: certificacaoIso
    }
  ];

  return (
    <>
      <Helmet>
        <title>Notícias - Mamuth | Novidades e Atualizações do Setor Industrial</title>
        <meta name="description" content="Acompanhe as últimas notícias da Mamuth, novidades do setor industrial, lançamentos de produtos e atualizações sobre nossa empresa." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notícias</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              Fique por dentro das últimas novidades e acontecimentos da Mamuth
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Últimas Notícias"
            subtitle="Acompanhe nossos lançamentos, parcerias e atualizações"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <NewsCard
                key={article.id}
                {...article}
              />
            ))}
          </div>
        </div>
      </section>
       <section
            className="py-24 text-white relative"
            style={{ backgroundColor: 'var(--color-dark-blue)' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
                  {/* COLUNA 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-8">
                      <img
                        src={seloParker}
                        alt="Certificação Parker"
                        className="w-28 md:w-36 mx-auto"
                      />
                    </div>
      
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Mangueira Polyflex
                    </h2>
      
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">
                      Certificado de Montador e Distribuidor
                    </p>
      
                    <p className="text-base md:text-xl font-semibold text-[#FF5101] mb-10">
                      Mamuth Mangueiras e Conexões <br className="hidden md:block" />
                      Vila Maria – São Paulo
                    </p>
      
                    <button
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center gap-2 px-10 py-4 rounded-full
                                bg-[#FF5101] hover:bg-[#e54800] transition
                                text-white font-semibold"
                    >
                      CONFIRA
                    </button>
                  </motion.div>
      
      
                  {/* COLUNA 2 (CÓPIA) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-8">
                      <img
                        src={seloFalch}
                        alt="Certificação Parker"
                        className="w-28 md:w-36 mx-auto"
                      />
                    </div>
      
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Máquinas de Hidrojato
                    </h2>
      
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">
                      Certificado de Montador e Distribuidor
                    </p>
      
                    <p className="text-base md:text-xl font-semibold text-[#FF5101] mb-10">
                      Mamuth Mangueiras e Conexões <br className="hidden md:block" />
                      Vila Maria – São Paulo
                    </p>
      
                    <button
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center gap-2 px-10 py-4 rounded-full
                                bg-[#FF5101] hover:bg-[#e54800] transition
                                text-white font-semibold"
                    >
                      CONFIRA
                    </button>
                  </motion.div>
      
                </div>
              </div>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setOpen(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative bg-white rounded-xl p-4 max-w-4xl w-full mx-4"
                    >
                      {/* Botão fechar */}
                      <button
                        onClick={() => setOpen(false)}
                        className="absolute top-3 right-3 text-gray-700 hover:text-black"
                      >
                        <X size={28} />
                      </button>
      
                      {/* IMAGEM DO CERTIFICADO */}
                      <img
                        src={imagemCertificado}
                        alt="Certificado"
                        className="w-full h-auto rounded-lg"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
                  </section>

                 
    </>
  );
};

export default Noticias;