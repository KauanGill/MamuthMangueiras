import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import bombaMTI600 from '@/assets/images/bomba-mti600.png';
import bombaMTI50FF from '@/assets/images/bomba-mti-50ff.png';
import bombaMTI500 from '@/assets/images/bomba-mti500.png';
import bombaMTI350 from '@/assets/images/bombas-altapressao.png';
import bombaMTI250 from '@/assets/images/bomba-mti250.png';
import path from 'node:path';

const PaginaCategoria = () => {
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Bomba MTI-600',
      path: '/bombas-de-alta-pressao/bomba-mti-600',
      description: 'Bomba Tríplex para hidrolavadoras ou testes hidrostaticos com pressão de 600 bar e vazão de até 35L/min.',
      image: bombaMTI600, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bomba-MTI-50FF',
      path: '/bombas-de-alta-pressao/bomba-mti-50ff',
      description: 'Bomba Tríplex para hidrolavadoras ou testes hidrostaticos com pressão de 160 bar e vazão de até 150L/min.',
      image: bombaMTI50FF, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bomba MTI-500',
      path: '/bombas-de-alta-pressao/bomba-mti-500',
      description: 'Bomba Tríplex para hidrolavadoras ou testes hidrostáticos com pressão de 500 bar e vazão de 20L/min.',
      image: bombaMTI500, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bomba MTI-350',
      path: '/bombas-de-alta-pressao/bomba-mti-350',
      description: 'Bomba Tríplex para hidrolavadoras ou testes hidrostáticos com pressão de 350 bar e vazão de 19L/min.',
      image: bombaMTI350, 
      category: 'Categoria Principal'
    },{
      name: 'Bomba MTI-250',
      path: '/bombas-de-alta-pressao/bomba-mti-250',
      description: 'Bomba Tríplex para hidrolavadoras ou testes hidrostáticos com pressão de 250 bar e vazão de 17L/min.',
      image: bombaMTI250, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bomba MTI-200',
      description: 'Bomba Tríplex para hidrolavadoras ou testes hidrostaticos com pressão de 200 bar e vazão de 45L/min.',
      image: bombaMTI350, 
      category: 'Categoria Principal'
    }
   
  ];

  const handleProductClick = (product) => {
    console.log("Produto selecionado:", product);
    // Aqui você pode abrir um WhatsApp ou modal de orçamento
  };

  return (
    <>
      <Helmet>
        <title>Bombas de Alta Pressão - Mamuth Mangueiras</title>
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
              Bombas de Alta Pressão
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