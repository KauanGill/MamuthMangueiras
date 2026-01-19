import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import poliamidaSap1500 from '@/assets/images/poliamida-sap-ate1500.png';
import poliamidaUap2800 from '@/assets/images/mangueiras-conexoes.jpg';
import niplesM24DKO from '@/assets/images/niples-m24dko-1.png';
import niplesAdaptador from '@/assets/images/niples-adaptador-hp9-16.png';
import mangueiraWaterblast from '@/assets/images/mangueira-waterblast.jpg';
import mangueira10kPsi from '@/assets/images/mangueira-10000psi.png';
import luvasUniao from '@/assets/images/luvas-de-uniao.png';
import luvasEmendaUap from '@/assets/images/luvas-emenda-uap.png';
import engatesRapidos from '@/assets/images/engates-rapidos.png';
import distribuidoresUap from '@/assets/images/distribuidores-uap-em-y.png';
import distribuidorFluxo from '@/assets/images/distribuidores-fluxo-sap.png'

const PaginaCategoria = () => {
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Poliamida SAP até 1.500 bar',
      description: 'APLICAÇÃO Utilizadas em sistemas de limpeza, desobstrução, remoção de resíduos e preparação de superfícies com o uso de Hidrojateamento. São também conhecidas popularmente como “rabichos” ou “lanças flexíveis”',
      image: poliamidaSap1500, 
      category: 'Categoria Principal'
    },
    {
      name: 'Poliamida UAP até 2.800 bar',
      description: 'APLICAÇÃO Utilizadas em sistemas de limpeza, desobstrução, remoção de resíduos e preparação de superfícies com o uso de Hidrojateamento. São também conhecidas popularmente como “rabichos” ou “lanças flexíveis”',
      image: poliamidaUap2800, 
      category: 'Categoria Principal'
    },
    {
      name: 'Niples M24DKO-1',
      description: 'Conexões, Uniões, Adaptadores e Engates, são itens necessários para unir, acoplar e adaptar mangueiras e acessórios. A MAMUTH possui uma linha completa destes itens para atender todas as necessidades. Também atendemos solicitações e fabricamos itens sob medida e encomenda. Nosso portfólio de divide em duas linhas, a limitada até 1500 BAR e a que pode ser utilizada em pressões de até 2800 Bar todos esses itens são fabricados em aço inoxidável de alta performance.',
      image: niplesM24DKO, 
      category: 'Categoria Principal'
    },
    {
      name: 'Niples (Adaptador HP 9-16 HP X 9-16 JIC-1)',
      description: 'Conexões, Uniões, Adaptadores e Engates, são itens necessários para unir, acoplar e adaptar mangueiras e acessórios. A MAMUTH possui uma linha completa destes itens para atender todas as necessidades. Também atendemos solicitações e fabricamos itens sob medida e encomenda. Nosso portfólio de divide em duas linhas, a limitada até 1500 BAR e a que pode ser utilizada em pressões de até 2800 Bar todos esses itens são fabricados em aço inoxidável de alta performance.',
      image: niplesAdaptador, 
      category: 'Categoria Principal'
    },{
      name: 'Mangueira Waterblast para Hidrojateamento',
      description: 'Recomendadas para sistemas de limpeza, desobstrução, remoção de resíduos e preparação de superfícies com o uso de Hidrojateamento; Tubo interno fabricado em borracha sintética resistente a água envolta por espirais trançadas de fio de aço, coberta com uma camada de borracha sintética resistente ao ozônio, intempéries e calor;',
      image: mangueiraWaterblast, 
      category: 'Categoria Principal'
    },
    {
      name: 'Mangueira até 10.000 psi',
      description: 'Recomendadas para sistemas de limpeza, desobstrução, remoção de resíduos e preparação de superfícies com o uso de Hidrojateamento; Tubo interno fabricado em borracha sintética resistente a água envolta por espirais trançadas de fio de aço, coberta com uma camada de borracha sintética resistente ao ozônio, intempéries e calor;',
      image: mangueira10kPsi, 
      category: 'Categoria Principal'
    },
    {
      name: 'Luvas de União',
      description: 'Conexões indicadas para bombas, mangueiras e acessórios de hidrojateamento com pressão de até 1.500 bar (22.000 psi)',
      image: luvasUniao, 
      category: 'Categoria Principal'
    },
    {
      name: 'Luvas de Emenda UAP até 3.200bar',
      description: 'Conexões indicadas para bombas, mangueiras, varetas e acessórios de hidrojateamento com pressão de até 3.200 bar (46.400 psi)',
      image: luvasEmendaUap, 
      category: 'Categoria Principal'
    },
    {
      name: 'Engates Rápidos',
      description: 'Os Engates Rápido modelos ER12 e ER20 são indicados para unir mangueiras de forma prática e segura. Estes engates possuem uma porca roscada que rosqueiam e engatam os lados macho e fêmea não havendo a necessidade da utilização de uma chave para torquear, somente o aperto manual.',
      image: engatesRapidos, 
      category: 'Categoria Principal'
    },
    {
      name: 'Distribuidores UAP em Y, T e cotovelo 90°',
      description: 'Distribuidores são usados para dividir o fluxo de água e multiplicar ou número de mangueiras a serem utilizadas em Ultra Alta Pressão.',
      image: distribuidoresUap, 
      category: 'Categoria Principal'
    },
    {
      name: 'Distribuidores de Fluxo SAP',
      description: 'Distribuidores são utilizados para dividir o fluxo de água e multiplicar o número de mangueiras a serem utilizadas, permitindo que múltiplas operações ocorram simultaneamente. Com esses dispositivos, é possível otimizar o uso de recursos hídricos, direcionando a água para diferentes pontos de aplicação de forma eficiente e controlada. Além disso, os distribuidores garantem uma distribuição uniforme do fluxo, essencial para a manutenção da pressão adequada em todas as saídas, o que resulta em maior produtividade e detalhes nas operações.',
      image: distribuidorFluxo, 
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
        <title>Mangueiras e Conexões - Mamuth Mangueiras</title>
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
              Mangueiras e Conexões
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