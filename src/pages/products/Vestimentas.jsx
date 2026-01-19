import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import hydroShellUAP from '@/assets/images/vestimenta-protecao.png';
import hydroShellSAP from '@/assets/images/hydro-shell-sap.png';
import capaMangueira from '@/assets/images/capa-mangueira.png';
import botaProtecao40k from '@/assets/images/bota-protecao-40k.png';

const PaginaCategoria = () => {
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Hydro-Shell UAP',
      description: 'Macacão de proteção indicado para trabalhadores do setor Naval, Oil & Gás, Petroquímico e/ou operações com bombas de hidrojateamento modelo UAP. Confeccionado em tripla camada de tecido tramado sintético de alta tenacidade impermeabilizado externamente com PVC, possui costuras impermeabilizadas.',
      image: hydroShellUAP, 
      category: 'Categoria Principal'
    },
    {
      name: 'Hydro-Shell SAP',
      description: 'Macacão de proteção indicado para trabalhadores do setor sucroalcooleiro e/ou operações com bombas de hidrojateamento modelo SAP. Confeccionado em dupla camada de tecido tramado sintético de alta tenacidade impermeabilizado externamente com PVC, possui costuras impermeabilizadas.',
      image: hydroShellSAP, 
      category: 'Categoria Principal'
    },
    {
      name: 'Capa de Mangueira',
      description: 'Capa protetora indicada para mangueiras que trabalham com pressões de até 2800 Bar, proteção em caso de ruptura acidental formando um escudo e impedindo que a água em alta pressão atinja o operador.',
      image: capaMangueira, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bota de Proteção 40K',
      description: 'Especificamente projetada para fornecer proteção contra jatos de água em pressão ultra-alta até 40.000psi. Inclui meia embutida internamente ajustável para proporcionar maior conforto.',
      image: botaProtecao40k, 
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
        <title>Vestimentas de Proteção - Mamuth Mangueiras</title>
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
              Vestimentas de Proteção
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