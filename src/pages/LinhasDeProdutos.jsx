import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

// Imports de Imagens
import lavadoraAltaPressao from "@/assets/images/lavadora-alta-pressao.png";
import vestimentaProtecao from "@/assets/images/vestimenta-protecao.png";
import mangueiraConexao from "@/assets/images/mangueiras-conexoes.jpg";
import bicoHidrojato from "@/assets/images/bicos-hidrojatos.png";
import bombaAltaPressao from "@/assets/images/bombas-altapressao.png";
import pecasBomba from "@/assets/images/pecas-para-bomba.png";
import acessoriosHidro from "@/assets/images/hidro-acessorios.jpg";
import acessoriosLavadora from "@/assets/images/acessorios-lavadora.png";

const LinhasDeProdutos = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Função de clique atualizada para tratar rotas internas e externas
  const handleProductClick = (path) => {
    if (path) {
      navigate(path);
      // Rola para o topo da página ao navegar
      window.scrollTo(0, 0);
    } else {
      toast({
        title: "Orçamento",
        description: "Redirecionando para a página de contato...",
      });
      setTimeout(() => navigate('/contato'), 1000);
    }
  };

  const products = [
    {
      name: 'Lavadoras de Alta Pressão',
      path: '/lavadoras', // LINK PARA SUA NOVA PÁGINA
      description: 'Equipamentos robustos projetados para operações industriais de alta exigência, com tecnologia de ponta e máxima eficiência.',
      image: lavadoraAltaPressao,
      specs: [
        'Pressão de até 3000 bar',
        'Vazão variável conforme aplicação',
        'Construção em aço inoxidável',
        'Sistema de proteção contra sobrecarga',
        'Manutenção facilitada'
      ]
    },
    {
      name: 'Vestimentas de Proteção',
      path: '/vestimentas',
      description: 'Soluções completas para limpeza de alta pressão, ideais para remoção de incrustações e contaminantes.',
      image: vestimentaProtecao,
      specs: [
        'Tecnologia de jato de água',
        'Economia de até 70% de água',
        'Remoção eficiente de resíduos',
        'Operação segura e controlada',
        'Adaptável a diferentes superfícies'
      ]
    },
    {
      name: 'Mangueiras e Conexões',
      path: '/mangueiras-conexoes',
      description: 'Linha completa de equipamentos hidráulicos de precisão para diversas aplicações industriais.',
      image: mangueiraConexao,
      specs: [
        'Alta confiabilidade operacional',
        'Eficiência energética superior',
        'Controle de precisão',
        'Baixa necessidade de manutenção',
        'Suporte técnico especializado'
      ]
    },
    {
      name: 'Bicos para Hidrojato',
      path: '/bicos-hidrojatos',
      description: 'Projetos personalizados desenvolvidos especificamente para atender necessidades únicas de cada cliente.',
      image: bicoHidrojato,
      specs: [
        'Engenharia dedicada ao projeto',
        'Flexibilidade total de configuração',
        'Integração com sistemas existentes',
        'Testes e validação completos',
        'Garantia estendida'
      ]
    },
    {
      name: 'Bombas de Alta Pressão',
      path: '/bombas-alta-pressao',
      description: 'Peças originais e de alta qualidade para manutenção e prolongamento da vida útil dos equipamentos.',
      image: bombaAltaPressao,
      specs: [
        'Peças originais certificadas',
        'Estoque disponível',
        'Entrega rápida',
        'Compatibilidade garantida',
        'Suporte técnico incluído'
      ]
    },
    {
      name: 'Peças para Bombas de Hidrojato',
      path: '/pecas-bombas',
      description: 'Ampla variedade de acessórios e componentes para complementar e otimizar suas operações.',
      image: pecasBomba,
      specs: [
        'Mangueiras de alta pressão',
        'Bicos e pistolas especializadas',
        'Conexões e adaptadores',
        'Válvulas de controle',
        'Sistemas de filtragem'
      ]
    },
    {
      name: 'Hidrojato/Acessórios',
      path: '/hidrojato-acessorios',
      description: 'Ampla variedade de acessórios e componentes para complementar e otimizar suas operações industriais.',
      image: acessoriosHidro,
      specs: [
        'Mangueiras de alta pressão',
        'Bicos e pistolas especializadas',
        'Conexões e adaptadores',
        'Válvulas de controle',
        'Sistemas de filtragem'
      ]
    },
    {
      name: 'Acessórios para Lavadoras de Alta Pressão',
      path: '/acessorios-lavadoras',
      description: 'Ampla variedade de acessórios e componentes para complementar e otimizar suas operações industriais.',
      image: acessoriosLavadora,
      specs: [
        'Mangueiras de alta pressão',
        'Bicos e pistolas especializadas',
        'Conexões e adaptadores',
        'Válvulas de controle',
        'Sistemas de filtragem'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Linhas de Produtos - Mamuth | Equipamentos de Alta Pressão</title>
        <meta name="description" content="Conheça nossa completa linha de produtos: bombas de alta pressão, sistemas de limpeza industrial e soluções customizadas." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Linhas de Produtos</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Soluções completas em equipamentos de alta pressão e sistemas industriais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossos Produtos"
            subtitle="Equipamentos de alta qualidade para todas as suas necessidades industriais"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                // Passamos o path do produto para a função de clique
                onCTAClick={() => handleProductClick(product.path)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{ backgroundColor: 'var(--color-orange)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de uma Solução Específica?
            </h2>
            <p className="text-xl mb-8">
              Nossa equipe técnica está pronta para desenvolver a solução perfeita para sua operação
            </p>
            <button
              onClick={() => handleProductClick()}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ color: 'var(--color-dark-blue)' }}
            >
              Solicite um Orçamento
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LinhasDeProdutos;