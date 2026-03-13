import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import CertificacoesSection from "@/components/CertificadoSection";
import Hero from "@/components/Hero"
import imgFenasucro from '@/assets/images/feira-fenasucro.jpg'
import imgNavalshore from '@/assets/images/feira-navalshore.jpg'
import certificacaoIso from "@/assets/images/certificacao-iso.jpg";

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
      image: imgFenasucro
    },
    {
      id: '2',
      title: 'R$ 12 Bilhões em Negócios. E Você, Onde Estará?',
      subtitle: 'A Mamuth Hydro desembarca na Navalshore 2026.',
      excerpt: 'Enquanto a indústria naval e offshore se prepara para movimentar bilhões na 20ª Navalshore, a Mamuth Hydro já garantiu seu espaço. Sabemos que um evento que reuniu mais de 18 mil profissionais e os maiores estaleiros e petroleiras da América Latina é o lugar certo para quem busca soluções que realmente resolvem.',
      date: '10 de Dezembro, 2023',
      buttonText: 'Agende um Horário Com Nosso Time',
      link: '/noticias/feira-navalshore',
      image: imgNavalshore
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
             <CertificacoesSection />
           </>

              
  );
};

export default Noticias;