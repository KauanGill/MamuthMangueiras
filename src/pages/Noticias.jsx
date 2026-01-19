import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import expandeOperacoes from "@/assets/images/mamuth-expande-operacoes.jpg";
import limpezaIa from "@/assets/images/sistema-limpeza-ia.jpg";
import certificacaoIso from "@/assets/images/certificacao-iso.jpg";
import parceriaLider from "@/assets/images/parceria-lider-hidro.jpg";
import mamuthExcelencia from "@/assets/images/mamuth-20anos-excelencia.jpg";
import treinamentoTecnico from "@/assets/images/treinamento-tecnico.jpg";
import acessoriosTecnicos from "@/assets/images/acessorios-tecnicos.jpg";

const Noticias = () => {
  const newsArticles = [
    {
      id: '1',
      title: 'Mamuth expande operações em São Paulo',
      excerpt: 'Nova unidade operacional será inaugurada no segundo semestre, ampliando nossa capacidade de atendimento na região metropolitana.',
      date: '15 de Dezembro, 2023',
      image: expandeOperacoes
    },
    {
      id: '2',
      title: 'Novo sistema de limpeza com IA',
      excerpt: 'Tecnologia de inteligência artificial aplicada aos nossos sistemas de limpeza industrial aumenta eficiência em 40%.',
      date: '10 de Dezembro, 2023',
      image: limpezaIa
    },
    {
      id: '3',
      title: 'Certificação ISO 9001 renovada',
      excerpt: 'Mamuth renova certificação ISO 9001, reafirmando compromisso com qualidade e excelência operacional.',
      date: '5 de Dezembro, 2023',
      image: certificacaoIso
    },
    {
      id: '4',
      title: 'Parceria com líder em hidrojateamento',
      excerpt: 'Nova parceria estratégica traz tecnologia de ponta em hidrojateamento para o mercado brasileiro.',
      date: '1 de Dezembro, 2023',
      image: parceriaLider
    },
    {
      id: '5',
      title: 'Inovação em equipamentos de alta pressão',
      excerpt: 'Lançamento de nova linha de bombas de alta pressão com tecnologia sustentável e maior eficiência energética.',
      date: '25 de Novembro, 2023',
      image: acessoriosTecnicos
    },
    {
      id: '6',
      title: 'Mamuth completa 20 anos de excelência',
      excerpt: 'Celebramos duas décadas de história, crescimento e compromisso com nossos clientes e parceiros.',
      date: '20 de Novembro, 2023',
      image: mamuthExcelencia
    },
    {
      id: '7',
      title: 'Treinamento técnico para equipes',
      excerpt: 'Programa de capacitação técnica é lançado para profissionais do setor industrial em todo o Brasil.',
      date: '15 de Novembro, 2023',
      image: treinamentoTecnico
    },
    {
      id: '8',
      title: 'Sustentabilidade em foco',
      excerpt: 'Mamuth implementa práticas sustentáveis em todas as operações, reduzindo impacto ambiental em 30%.',
      date: '10 de Novembro, 2023',
      image: acessoriosTecnicos
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
            <p className="text-xl max-w-3xl mx-auto">
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
    </>
  );
};

export default Noticias;