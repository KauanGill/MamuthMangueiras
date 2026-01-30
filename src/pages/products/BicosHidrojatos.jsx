import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import portaBicoSafira from '@/assets/images/porta-bico-safira.png';
import portaBicoRetoELeque from '@/assets/images/porta-bico-reto-e-leque.png';
import bicoTurboRotativo600 from '@/assets/images/bico-turbo-rotativo-600.jpg';
import bicoSharkRadial from '@/assets/images/bico-shark-radial-40k.png';
import bicoSharkJet22K from '@/assets/images/bico-shark-jet-22k-40k.png';
import bicoSafiraM10 from '@/assets/images/bico-safira-m10.png';
import bicoSafira from '@/assets/images/bico-safira.png';
import bicoRotativoTitan from '@/assets/images/bico-rotativo-titan.jpg';
import bicoRotativoR from '@/assets/images/bico-rotativo-r.png';
import bicoRetoLeque from '@/assets/images/bico-reto-e-leque.png';
import bicoFixoFoguetinho from '@/assets/images/bico-fixo-foguetinho.png';
import bicoFerret22k from '@/assets/images/bico-ferret-22k.png';
import path from 'node:path';

const PaginaCategoria = () => {
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Porta Bico Safira',
      path: '/bicos-hidrojatos/porta-bico-safira',
      description: 'O suporte para fixação de Bico de Safira 3/8” é um componente essencial em operações de limpeza, jateamento ou corte utilizando pistolas de Ultra Alta Pressão. Este suporte foi projetado para garantir uma fixação segura e estável do bico, proporcionando precisão e eficiência durante o uso.',
      image: portaBicoSafira, 
      category: 'Categoria Principal'
    },
    {
      name: 'Porta Bico Reto e Leque',
      path: '/bicos-hidrojatos/porta-bico-reto-e-leque',
      description: 'O suporte para Bico Reto Forma 4 e Bico Leque Forma 19 é principalmente utilizado nas operações de limpeza, jateamento ou corte com pistolas de alta pressão. São recomendados para aplicações com até 1.500 bar / 21.750 psi.',
      image: portaBicoRetoELeque, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Turbo Rotativo 600',
      path:'/bicos-hidrojatos/bico-turbo-rotativo-600',
      description: 'Bicos indicados para hidrojateadoras até 500 bar, podem ser utilizados para jateamento de superfícies tubulações ou jateamento com abrasivo.',
      image: bicoTurboRotativo600, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Turbo Rotativo 500',
      path: '/bicos-hidrojatos/bico-turbo-rotativo-500',
      description: 'Bicos indicados para hidrojateadoras até 500 bar, podem ser utilizados para jateamento de superfícies tubulações ou jateamento com abrasivo.',
      image: bicoTurboRotativo600, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Torpedo de 1/2 Até 1',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Shark-Radial 40K',
      path: '/bicos-hidrojatos/bico-shark-radial-40k',
      description: 'O Shark-Jet Radial é uma ferramenta rotativa auto-propulsora indicada para limpeza e desobstrução de tubulações com pressões de até 2800 bar (40.000psi) e vazão de até 40 L/min. Seus componentes internos tem o sistema de lubrificação e refrigeração por óleo, além de um freio hidráulico para limitar as rotações.',
      image: bicoSharkRadial, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Shark-Jet 22K e 40K',
      path: '/bicos-hidrojatos/bico-shark-jet-22k',
      description: 'O Shark-Jet 22K e 40K é uma ferramenta rotativa auto-propulsora indicada para jateamento, limpeza e preparação de superfícies planas ou irregulares.',
      image: bicoSharkJet22K, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Safira M10',
      path: '/bicos-hidrojatos/bico-safira-m10',
      description: 'Os bicos ou insertos são utilizados em acessórios aplicados no processo de hidrojateamento como por exemplo: Pistolas, Ferramentas Rotativas, Barras Spray, Bicos Rotativos entre outros.',
      image: bicoSafiraM10, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Safira',
      path: '/bicos-hidrojatos/bico-safira',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: bicoSafira, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Rotativo Titan',
      path: '/bicos-hidrojatos/bico-rotativo-titan',
      description: 'O Bico Titan é um bico rotativo auto-propulsor desenvolvido para limpeza e desobstrução de tubulações em geral com pressões entre 1.000 bar e 2.800 bar. As cabeças do bico rotativo são fabricadas em diferentes configurações de orifícios.',
      image: bicoRotativoTitan, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Rotativo R',
      path:'/bicos-hidrojatos/bico-rotativo-r',
      description: 'O bico rotativo modelo “R’’ foi especificamente desenvolvido para limpeza e remoção de incrustações nas paredes internas de tubulações de trocadores de calor, evaporadores e linhas de tubos em geral.',
      image: bicoRotativoR, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Reto e Leque 1/4 NPT',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: '../assets/images/produto1.jpg', 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Reto e Leque',
      path: '/bicos-hidrojatos/bico-reto-e-leque',
      description: 'Os bicos ou insertos são utilizados em acessórios aplicados no processo de hidrojateamento como por exemplo: Pistolas, Ferramentas Rotativas, Barras Spray, Bicos Rotativos entre outros.',
      image: bicoRetoLeque, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Fixo Foguetinho',
      path: '/bicos-hidrojatos/bico-fixo-foguetinho',
      description: 'O bico fixo tipo “ Foguetinho” é indicado para limpeza e desobstrução das paredes internas de tubulações de trocadores de calor, evaporadores e linhas de tubos em geral.',
      image: bicoFixoFoguetinho, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Ferret 22K',
      path: '/bicos-hidrojatos/bico-ferret-22k',
      description: 'O Bico Auto-Propulsor Ferret 22K é indicado para operações com pressões de até 1600 bar e Vazão de 80 L/min. Com essa ferramenta é possível trabalhar com desobstrução e limpeza de tubulações entre 2 e 6 especialmente em tubulações que possuam curvas de 90°.',
      image: bicoFerret22k, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Attack 1/4',
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
        <title>Bicos para Hidrojato - Mamuth Mangueiras</title>
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
              Bicos para Hidrojato
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