import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import tubecleanMamuth from '@/assets/images/tubeclean-mamuth.jpeg';
import powerBoxMamuth from '@/assets/images/powerbox-mamuth-2800.jpeg';
import pistolaRotativaViper40k from '@/assets/images/hidro-acessorios.jpg';
import pistolaPneumatica2G from '@/assets/images/pistola-pneumatica-2g.png';
import pistolaFluxoFechadoMTFF from '@/assets/images/pistola-fluxo-fechado-mtff.jpeg';
import pistolaFluxoAbertoMTFA from '@/assets/images/pistola-fluxo-aberto-mtfa.png';
import pedalFluxoAbertoMTPA from '@/assets/images/pedal-fluxo-aberto-mtpa.jpeg';
import malhaSeguranca from '@/assets/images/malha-de-seguranca.png';
import lancaTuboinox from '@/assets/images/lanca-tubo-inox.png';
import lacoSeguranca from '@/assets/images/laco-seguranca.png';
import distorcedorMangueiraUap from '@/assets/images/distorcedor-mangueira-uap.jpeg';
import cabecoteRotativo3D from '@/assets/images/cabecote-rotativo-3d.png';
import path from 'node:path';

const PaginaCategoria = () => {
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Tubeclean Mamuth',
      path: '/hidrojatos-e-acessorios/tubeclean-mamuth',
      description: 'Ferramenta projetada para auxiliar o operador na limpeza eficiente de evaporadores e diversas tubulações, especialmente em posições verticais. Ideal para remover resíduos e obstruções, garantindo a manutenção adequada e o funcionamento contínuo dos sistemas.',
      image: tubecleanMamuth, 
      category: 'Categoria Principal'
    },
    {
      name: 'Power Box MAMUTH 2.800',
      path: '/hidrojatos-e-acessorios/powerbox-mamuth-2800',
      description: 'O Power Box MAMUTH 2800 Bar é um acessório que deve ser utilizado em conjunto com a pistola MTP 2.800 Bar Gatilho Duplo ou com a Pistola Rotativa Viper 40K,',
      image: powerBoxMamuth, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pistola Rotativa Viper 40k',
      path: '/hidrojatos-e-acessorios/pistola-rotativa-viper-40k',
      description: 'O sistema é projetado para isolar o circuito pneumático, garantindo que a pressão de água e a rotação da lança sejam acionadas somente quando ambos os gatilhos são pressionados simultaneamente, proporcionando um controle preciso e seguro.',
      image: pistolaRotativaViper40k, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pistola Pneumática 2G MTPT 2.800 Bar',
      path: '/hidrojatos-e-acessorios/pistola-Pneumatica-2g-mtpt-2800',
      description: 'Proporcionam maior robustez e durabilidade, garantindo que o equipamento suporte condições de trabalho exigentes sem comprometer a integridade estrutural.',
      image: pistolaPneumatica2G, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pistola Fluxo Fechado MTFF 1.200 Bar',
      path: '/hidrojatos-e-acessorios/pistola-fluxo-fechado-mtff-1200',
      description: 'Desenvolvido para suportar condições extremas, proporcionando durabilidade e longa vida útil ao equipamento.',
      image: pistolaFluxoFechadoMTFF, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pistola Fluxo Aberto MTFA 1.400 Bar',
      path: '/hidrojatos-e-acessorios/pistola-fluxo-aberto-mtfa-1400',
      description: 'Equipamentos de última geração para aplicações industriais exigentes.',
      image: pistolaFluxoAbertoMTFA, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pedal de Fluxo Aberto MTPA 1.400 Bar',
      description: 'O Pedal de Fluxo Aberto MTPA 1.400 Bar é indicado para trabalhos quando o operador de hidrojato precisa utilizar as duas mãos, ideais para executar limpeza em trocadores de calor ou tubulações em geral, esse acessório traz maior segurança e conforto visto que o operador possui total controle na liberação do fluxo de água nos pés.',
      image: pedalFluxoAbertoMTPA, 
      category: 'Categoria Principal'
    },
    {
      name: 'Malha de Segurança',
      description: 'Dispositivo de segurança utilizado em uniões de mangueiras e tubos com o objetivo de evitar o movimento brusco ou chicoteamento em caso de rompimento das conexões.',
      image: malhaSeguranca, 
      category: 'Categoria Principal'
    },
    {
      name: 'Lança e Tubo Inox',
      description: 'Conhecidas como Varetas ou Lanças, essas são utilizadas como condutoras de fluxo, ou como prolongadores para bicos e mangueiras. Podem ser fabricadas em qualquer comprimento.',
      image: lancaTuboinox, 
      category: 'Categoria Principal'
    },
    {
      name: 'Laço de Segurança',
      description: 'Dispositivo de segurança utilizado em uniões de mangueiras e tubos com o objetivo de evitar o movimento brusco ou chicoteamento em caso de rompimento das conexões.',
      image: lacoSeguranca, 
      category: 'Categoria Principal'
    },
    {
      name: 'Distorcedor de Mangueira UAP MT2800',
      description: 'O Distorcedor é um item de segurança que quando utilizado junto a mangueira elimina o esforço por torção do terminal, evitando assim a quebra prematura e posteriores acidentes.',
      image: distorcedorMangueiraUap, 
      category: 'Categoria Principal'
    },
    {
      name: 'Cabeçote Rotativo 3D Torrent NLB',
      description: 'O Cabeçote 3D Torrent NLB é uma ferramenta avançada projetada especificamente para a limpeza eficiente de tanques. Este dispositivo não apenas reduz drasticamente o tempo de limpeza, mas também proporciona total segurança na operação, eliminando a necessidade de um operador em espaços confinados, o que é essencial para minimizar riscos.',
      image: cabecoteRotativo3D, 
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