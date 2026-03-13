import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Target, Eye, Award, Leaf, Lightbulb, Shield, Building2, Globe} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import CertificacoesSection from "@/components/CertificadoSection";
import Hero from "@/components/Hero"

import videoSobre from '@/assets/images/video-sobre.mp4';

import seloParker from "@/assets/images/selo-certificado-parker.png";
import imagemCertificado from "@/assets/images/certificado_mamuth.jpg";
import seloFalch from "@/assets/images/logo_falch_certificado.png"

const Sobre = () => {

  const [open, setOpen] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLearnMore = (brandName) => {
    toast({
      title: "Informações",
      description: `Em breve mais detalhes sobre ${brandName} estarão disponíveis.`,
    });
  };

   const brands = [
    {
      icon: Building2,
      name: 'Parker Polyflex',
      description: 'A Parker-Hannifin é líder global em tecnologias de movimento e controle, fornecendo componentes essenciais para sistemas de hidrojateamento, como mangueiras, conexões e válvulas de alta pressão. Reconhecida pela qualidade e confiabilidade, a empresa possui forte atuação no Brasil, oferecendo soluções seguras e eficientes para aplicações industriais.',
      specialties: ['Alta Pressão', 'Controle Preciso', 'Confiabilidade Industrial']
    },
    {
      icon: Globe,
      name: 'Falch',
      description: 'A Falch GmbH é uma fabricante alemã especializada em equipamentos de hidrojateamento e sistemas de alta pressão para aplicações industriais. Com mais de 40 anos de experiência, desenvolve soluções robustas e inovadoras, reconhecidas pela eficiência, durabilidade e alto desempenho em operações exigentes.',
      specialties: ['Performance Extrema', 'Tecnologia Avançada', 'Engenharia Alemã']
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Comprometimento com a excelência em todos os nossos produtos e serviços.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Busca constante por soluções tecnológicas avançadas e eficientes.'
    },
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Parceiro de confiança para operações industriais críticas.'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Práticas responsáveis que respeitam o meio ambiente.'
    },
    {
      icon: Target,
      title: 'Excelência',
      description: 'Superação de expectativas em cada projeto e atendimento.'
    }
  ];

  const timeline = [
    { year: '2003', title: 'Fundação', description: 'Início das operações em São Paulo' },
    { year: '2008', title: 'Expansão', description: 'Ampliação da linha de produtos' },
    { year: '2013', title: 'Certificação ISO', description: 'Obtenção da certificação ISO 9001' },
    { year: '2018', title: 'Novas Parcerias', description: 'Parcerias internacionais estabelecidas' },
    { year: '2023', title: '20 Anos', description: 'Celebração de duas décadas de excelência' }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre a Mamuth - Nossa História e Valores | Equipamentos Industriais</title>
        <meta name="description" content="Conheça a história da Mamuth, nossa missão, visão e os valores que nos guiam há mais de 20 anos no mercado de equipamentos industriais." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Mamuth</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              Mais de 20 anos de experiência em soluções industriais de alta pressão
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pt-16 pb-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#FF5101' }}>
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-dark-blue)' }}>
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600">
                Fornecer soluções completas e inovadoras em equipamentos de alta pressão e serviços industriais, com qualidade excepcional, suporte técnico especializado e compromisso com a satisfação do cliente, contribuindo para o aumento da produtividade e eficiência operacional de nossos parceiros.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-dark-blue)' }}>
                Nossa Visão
              </h2>
              <p className="text-lg text-gray-600">
                Ser reconhecida como a empresa líder em soluções de alta pressão no Brasil, referência em inovação, qualidade e atendimento, expandindo nossa atuação para novos mercados e consolidando parcerias estratégicas internacionais, sempre mantendo nosso compromisso com a excelência e sustentabilidade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Seção do Vídeo com Título */}
      {/* Video Section - Layout 40/60 */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
      
      {/* Lado Esquerdo: Título e Texto (40% - 4 colunas de 10) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-6 w-full"
      >
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black aspect-video">
          <video
            autoPlay 
            controls
            muted
            loop 
            playsInline 
            className="w-full h-full object-cover block"
          >
            <source src={videoSobre} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-4 flex flex-col text-center lg:text-left"
      >
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6" 
          style={{ color: 'var(--color-dark-blue)' }}
        >
          Nossa Estrutura e Tecnologia
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed text-justify">
          Com mais de duas décadas de atuação, a <strong>Mamuth</strong> é referência nacional em soluções de alta pressão. 
          Unimos tradição e tecnologia de ponta para entregar equipamentos que garantem a máxima performance 
          e segurança absoluta para as operações mais críticas da sua indústria.
        </p>
      </motion.div>

      {/* Lado Direito: Vídeo (60% - 6 colunas de 10) */}

    </div>
  </div>
</section>
      {/* Values Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Nossos Valores
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Os princípios que guiam nossas ações e decisões diariamente
      </p>
    </div>

    {/* Cards */}
    <div className="flex flex-wrap justify-center gap-6">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="
            bg-white rounded-xl p-6 text-center
            w-full sm:w-[45%] lg:w-[30%]
            max-w-sm
          "
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: '#FF5101' }}
          >
            <value.icon className="w-8 h-8 text-white" />
          </div>

          <h3
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {value.title}
          </h3>

          <p className="text-gray-600">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
        ```jsx
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Marcas Representadas"
      subtitle="Selecionamos cuidadosamente cada parceiro para oferecer o melhor ao mercado brasileiro"
    />

    <div className="flex flex-wrap justify-center gap-8">
      {brands.map((brand, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          onClick={() => {
            setSelectedBrand(brand);
            setIsOpen(true);
          }}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full 
          w-full md:w-[48%] lg:w-[32%] cursor-pointer"
        >
          <div
            className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: '#FF5101' }}
          >
            <brand.icon className="w-8 h-8 text-white" />
          </div>

          <h3
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {brand.name}
          </h3>

          <p className="text-gray-600 mb-4 flex-grow">
            {brand.description}
          </p>

          <div className="mb-4">
            <h4
              className="font-semibold text-sm mb-2"
              style={{ color: 'var(--color-dark-blue)' }}
            >
              Especialidades:
            </h4>

            <div className="flex flex-wrap gap-2">
              {brand.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: '#FF5101' }}
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <button
            className="font-semibold hover:underline inline-flex items-center"
            style={{ color: '#FF5101' }}
          >
            Saiba Mais →
          </button>
        </motion.div>
      ))}
    </div>
  </div>

  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center 
        bg-black/40 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white/90 backdrop-blur-xl 
          rounded-3xl p-10 max-w-xl w-full 
          shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-gray-500 
            hover:text-black transition"
          >
            ✕
          </button>

          <h3 className="text-3xl font-bold mb-6 text-[#FF5101]">
            {selectedBrand?.name}
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {selectedBrand?.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {selectedBrand?.specialties.map((item, index) => (
              <span
                key={index}
                className="text-xs px-4 py-2 rounded-full 
                bg-[#FF5101] text-white font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>
```


      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossa Trajetória"
            subtitle="Décadas de crescimento e inovação no setor industrial"
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block" style={{ backgroundColor: '#FF5101' }}></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <span className="text-2xl font-bold" style={{ color: 'var(--color-orange)' }}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full flex-shrink-0 hidden md:block" style={{ backgroundColor: '#FF5101' }}></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CertificacoesSection />
    </>
  );
};

export default Sobre;