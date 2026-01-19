import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import valvulaSuccaoUAP from '@/assets/images/valvula-succao-uap.png';
import valvulaPressaoSAP from '@/assets/images/valvula-pressao-sap.png';
import valvulaPressaoUAP from '@/assets/images/valvula-pressao-uap.png';
import sedeDuplaUAP from '@/assets/images/sede-dupla-uap.png';
import sedeDupla from '@/assets/images/sede-dupla.png';
import pistaoMetalUAP from '@/assets/images/pistao-metal-duro-uap.png';
import pistaoMetalSAP from '@/assets/images/pistao-metal-duro-sap.png';
import kitVedacaoUAP from '@/assets/images/pecas-para-bomba.png';

const PaginaCategoria = () => {
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Válvula Sucção UAP',
      description: 'A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite garantir altos padrões de qualidade e durabilidade.',
      image: valvulaSuccaoUAP, 
      category: 'Categoria Principal'
    },
    {
      name: 'Válvulas Pressão SAP',
      description: 'A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite garantir altos padrões de qualidade e durabilidade.',
      image: valvulaPressaoSAP, 
      category: 'Categoria Principal'
    },
    {
      name: 'Válvula Pressão UAP',
      description: 'A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite garantir altos padrões de qualidade e durabilidade. ',
      image: valvulaPressaoUAP, 
      category: 'Categoria Principal'
    },
    {
      name: 'Sede dupla UAP',
      description: 'A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite garantir altos padrões de qualidade e durabilidade. ',
      image: sedeDuplaUAP, 
      category: 'Categoria Principal'
    },{
      name: 'Sede Dupla',
      description: 'A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite garantir altos padrões de qualidade e durabilidade.',
      image: sedeDupla, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pistão de Metal Duro UAP',
      description: 'A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite garantir altos padrões de qualidade e durabilidade.',
      image: pistaoMetalUAP, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pistão de Metal Duro SAP',
      description: 'A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite garantir altos padrões de qualidade e durabilidade. ',
      image: pistaoMetalSAP, 
      category: 'Categoria Principal'
    },
    {
      name: 'Kit de Vedação UAP',
      description: 'A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite garantir altos padrões de qualidade e durabilidade. ',
      image: kitVedacaoUAP, 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 9',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 10',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 11',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
     {
      name: 'Produto 12',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
     {
      name: 'Produto 13',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
  ];

  const handleProductClick = (product) => {
    console.log("Produto selecionado:", product);
    // Aqui você pode abrir um WhatsApp ou modal de orçamento
  };

  return (
    <>
      <Helmet>
        <title>Peças para Bombas de Hidrojato - Mamuth Mangueiras</title>
      </Helmet>

      {/* Hero Section - Mesmo estilo da página de Linhas de Produtos */}
      <section className="pb-20 pt-20" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            >
              Peças para Bombas de Hidrojato
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Soluções robustas e tecnologia de ponta para sua operação industrial.
            </motion.p>
          </div>

          {/* Grid de Produtos - Mantendo o layout de 4 colunas ou 3 dependendo do destaque */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosDaCategoria.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  {...product}
                  onCTAClick={handleProductClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaginaCategoria;