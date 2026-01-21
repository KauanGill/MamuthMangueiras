import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import typhoonJet500 from '@/assets/images/lavadora-typhoon-jet-500bar.jpeg';
import typhoonJet500Gasolina from '@/assets/images/typhoonjet-500bar-1200L.png';
import typhoonJet170Monofasico from '@/assets/images/typhoonjet-170-bar-monofasico.png';
import typhoonJetEletrica from '@/assets/images/typhoonjet-50cv-eletrica.jpg'
import typhoonJetDiesel from '@/assets/images/typhoonjet-50cv-diesel.jpg'
import path from 'node:path';

const PaginaCategoria = () => {
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Lavadora de alta pressão Typhoon-Jet 500 BAR (7251 PSI) 1.200 L/H Trifásico',
      path: '/lavadoras/typhoon-jet-500-trifasico',
      description: 'O Typhoon-Jet 500 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas realmente muito pesadas em ambientes industriais, agrícolas e comerciais. Com uma pressão de 500 bar, uma vazão de 20 L/min e uma potência de 20 cv, este equipamento garante resultados superiores em qualquer desafio de limpeza.',
      image: typhoonJet500, 
      category: 'Categoria Principal'
    },
    {
      name: 'Lavadora de alta pressão Typhoon-Jet 500 BAR (7251 PSI) 1.200 L/H Gasolina',
      path: '/lavadoras/typhoon-jet-500-gasolina',
      description: 'O Typhoon-Jet 500 é um equipamento de alta pressão projetado para oferecer desempenho superior em limpezas intensivas em ambientes industriais, agrícolas e comerciais. Com uma pressão de 500 bar, uma vazão de 20 L/min e uma potência de 20 cv, este equipamento garante resultados excepcionais em desafios de limpeza mais exigentes.',
      image: typhoonJet500Gasolina, 
      category: 'Categoria Principal'
    },
    {
      name: 'Lavadora de alta pressão Typhoon-Jet 350 BAR (5076 PSI) 1.1020 L/H Trifásico',
      path: '/lavadoras/typhoon-jet-350-trifasico',
      description: 'O Typhoon-Jet 350 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas pesadas em ambientes industriais, agrícolas e comerciais. Com uma pressão de 350 bar, uma vazão de 17 L/min e uma potência de 15 cv, este equipamento garante resultados superiores em qualquer desafio de limpeza.',
      image: typhoonJet500, 
      category: 'Categoria Principal'
    },
    {
      name: 'Lavadora de alta pressão Typhoon-Jet 200 BAR (2900 PSI) 2.700 L/H Trifásico',
      path: '/lavadoras/typhoon-jet-200-trifasico',
      description: 'O Typhoon-Jet 200 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas pesadas em ambientes industriais, agrícolas e comerciais. Com uma pressão de 200 bar, uma vazão de 45 L/min e uma potência de 20 cv, este equipamento garante resultados superiores em qualquer desafio de limpeza.',
      image: typhoonJet500, 
      category: 'Categoria Principal'
    },
    {
      name: 'Lavadora de alta pressão Typhoon-Jet 200 BAR (2900 PSI) 2.700 L/H Gasolina',
      path: '/lavadoras/typhoon-jet-200-gasolina',
      description: 'O Typhoon-Jet 200 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas pesadas em ambientes industriais, agrícolas e comerciais. Com uma pressão de 200 bar, uma vazão de 45 L/min e uma potência de 20 cv, este equipamento garante resultados superiores em qualquer desafio de limpeza.',
      image: typhoonJet500Gasolina, 
      category: 'Categoria Principal'
    },
    {
      name: 'Lavadora de alta pressão Typhoon-Jet 170 BAR (2465 PSI) 720 L/H Monofásico',
      path: '/lavadoras/typhoon-jet-170-monofasico',
      description: 'O Typhoon-Jet 170 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas moderadas em ambientes industriais, agrícolas e comerciais. Com uma pressão de 170 bar (2465 PSI), uma vazão de 12 L/min (720 L/h) e uma potência de 5 cv, este equipamento garante resultados eficazes em desafios de limpeza de intensidade moderada.',
      image: typhoonJet170Monofasico, 
      category: 'Categoria Principal'
    },
    {
      name: 'Typhoon-Jet 50cv Elétrica',
      path: '/lavadoras/typhoon-jet-50cv-eletrica',
      description: 'As hidrojateadoras Typhoon-Jet são ideais para trabalhos que são exclusivos e rápidos. Equipadas com um motor elétrico trifásico, elas oferecem potência e eficiência na limpeza de superfícies difíceis. A sua construção robusta e componentes de alta qualidade garantem durabilidade e desempenho consistente, mesmo nas condições mais exigentes, enquanto o seu design permite fácil movimentação e posicionamento em diferentes ambientes.',
      image: typhoonJetEletrica, 
      category: 'Categoria Principal'
    },
    {
      name: 'Typhoon-Jet 50cv Diesel',
      path: '/lavadoras/typhoon-jet-50cv-diesel',
      description: 'As hidrojateadoras Typhoon-Jet são ideais para trabalhos que são exclusivos e rápidos. Equipadas com um motor Diesel refrigerado à água, elas oferecem potência confiável e eficiência em ambientes exigentes. O painel digital integrado facilita a partida e permite a leitura dos instrumentos de temperatura da água, óleo, carga da bateria, rotações do motor, entre outros, garantindo um monitoramento preciso durante a operação. Além disso, seu design prático permite fácil entrega e posicionamento em diferentes locais.',
      image: typhoonJetDiesel, 
      category: 'Categoria Principal'
    },
    {
      name: 'Lavadora de alta pressão Typhoon-Jet 350 BAR (5076 PSI) 1.1020 L/H Gasolina',
      path: '/lavadoras/typhoon-jet-350-gasolina',
      description: 'O Typhoon-Jet 350 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas pesadas em ambientes industriais, agrícolas e comerciais. Com uma pressão de 350 bar, uma vazão de 17 L/min e uma potência de 15 cv, este equipamento garante resultados superiores em qualquer desafio de limpeza.',
      image: typhoonJet500Gasolina, 
      category: 'Categoria Principal'
    },
    {
      name: 'Lavadora de alta pressão Typhoon-Jet 170 BAR (2465 PSI) 720 L/H Trifásico',
      description: 'O Typhoon-Jet 170 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas moderadas em ambientes industriais, agrícolas e comerciais. Com uma pressão de 170 bar (2465 PSI), uma vazão de 12 L/min (720 L/h) e uma potência de 5 cv, este equipamento garante resultados eficazes em desafios de limpeza de intensidade moderada.',
      image: typhoonJet170Monofasico, 
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
        <title>Lavadoras de Alta Pressão - Mamuth Mangueiras</title>
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
              Lavadoras de Alta Pressão
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