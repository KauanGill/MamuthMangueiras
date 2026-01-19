import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto

const PaginaCategoria = () => {
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Produto 1',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 2',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 3',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 4',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 5',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 6',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 7',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Produto 8',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
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
   
  ];

  const handleProductClick = (product) => {
    console.log("Produto selecionado:", product);
    // Aqui você pode abrir um WhatsApp ou modal de orçamento
  };

  return (
    <>
      <Helmet>
        <title>Hidrojato e Acessórios - Mamuth Mangueiras</title>
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
              Hidrojato e Acessórios
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