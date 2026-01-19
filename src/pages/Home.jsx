import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplet, Wrench, Settings, Zap, Shield, Award, Clock, Users } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import Logo from '@/components/Logo';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import bombaAltaPressao from "@/assets/images/bomba-alta-pressao-titulo.png";
import lavadoraAltaPressao from "@/assets/images/lavadora-alta-pressao.png";
import vestimentaProtecao from "@/assets/images/vestimenta-protecao.png";
import mangueiraConexao from "@/assets/images/mangueiras-conexoes.jpg";


const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/contato');
  };

  const handleProductClick = () => {
    toast({
      title: "Orçamento",
      description: "Redirecionando para a página de contato...",
    });
    setTimeout(() => navigate('/contato'), 1000);
  };

  const handleServiceClick = () => {
    toast({
      title: "Serviço",
      description: "Redirecionando para a página de contato...",
    });
    setTimeout(() => navigate('/contato'), 1000);
  };

  const products = [
    {
      name: 'Bombas de Alta Pressão',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do em eiusmod.',
      image: bombaAltaPressao,
      specs: ['Pressão até 3000 bar', 'Alta durabilidade', 'Manutenção facilitada']
    },
    {
      name: 'Lavadoras de Alta Pressão',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do em eiusmod.',
      image: lavadoraAltaPressao,
      specs: ['Tecnologia avançada', 'Economia de água', 'Resultados superiores']
    },
    {
      name: 'Vestimentas de Proteção',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do em eiusmod.',
      image: vestimentaProtecao,
      specs: ['Alta confiabilidade', 'Eficiência energética', 'Suporte técnico']
    },
    {
      name: 'Mangueiras e Conexões',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do em eiusmod.',
      image: mangueiraConexao,
      specs: ['Engenharia dedicada', 'Flexibilidade total', 'Garantia estendida']
    },
  ];

  const services = [
    {
      icon: Droplet,
      title: 'Hidrojateamento',
      description: 'Serviços especializados em hidrojateamento de alta pressão para limpeza industrial.',
      benefits: ['Remoção eficiente de incrustações', 'Segurança operacional', 'Preservação de superfícies']
    },
    {
      icon: Wrench,
      title: 'Limpeza Industrial',
      description: 'Soluções completas de limpeza para ambientes industriais complexos.',
      benefits: ['Equipamentos modernos', 'Equipe especializada', 'Protocolos de segurança']
    },
    {
      icon: Settings,
      title: 'Suporte Técnico',
      description: 'Assistência técnica especializada e manutenção preventiva.',
      benefits: ['Atendimento rápido', 'Técnicos certificados', 'Peças originais']
    },
    {
      icon: Zap,
      title: 'Soluções Sob Medida',
      description: 'Desenvolvimento de soluções personalizadas para desafios específicos.',
      benefits: ['Análise detalhada', 'Projetos exclusivos', 'Suporte contínuo']
    },
  ];

  const differentials = [
    { icon: Shield, title: 'Qualidade Garantida', description: 'Equipamentos certificados e testados' },
    { icon: Award, title: 'Experiência Comprovada', description: 'Mais de 20 anos no mercado' },
    { icon: Clock, title: 'Atendimento Ágil', description: 'Suporte técnico 24/7 disponível' },
    { icon: Users, title: 'Equipe Especializada', description: 'Profissionais altamente qualificados' },
  ];

  return (
    <>
      <Helmet>
        <title>Mamuth - Peso Pesado em Alta Pressão | Equipamentos Industriais</title>
        <meta name="description" content="Mamuth oferece soluções completas em equipamentos de alta pressão, hidrojateamento e limpeza industrial. Qualidade e eficiência para sua empresa." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://lightblue-fish-634065.hostingersite.com/wp-content/uploads/2025/12/Video-Mamuth-curto-banner.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              PESO PESADO EM ALTA PRESSÃO
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Com anos de experiência, somos especialistas em fornecer mangueiras robustas de alta pressão, ideais para aplicações na indústria pesada. Nossos produtos garantem segurança e eficiência em diversos setores, como naval e siderúrgico.
            </p>
            <CTAButton onClick={handleCTAClick}>
              Fale com Nossos Especialistas
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Institutional Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Logo size="lg" />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-dark-blue)' }}>
                Excelência em Soluções Industriais
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                A Mamuth é referência nacional em equipamentos de alta pressão e soluções para limpeza industrial. Com mais de duas décadas de experiência, oferecemos produtos e serviços que combinam tecnologia de ponta, eficiência operacional e suporte técnico especializado.
              </p>
              <p className="text-lg text-gray-600">
                Nossa missão é fornecer soluções completas que aumentem a produtividade e reduzam custos operacionais de nossos clientes, sempre com o compromisso de qualidade, segurança e sustentabilidade.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {differentials.map((diff, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <diff.icon className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--color-orange)' }} />
                  <h3 className="font-bold mb-2" style={{ color: 'var(--color-dark-blue)' }}>
                    {diff.title}
                  </h3>
                  <p className="text-sm text-gray-600">{diff.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="pb-20 pt-20" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5x1 md:text-5xl font-bold mb-4 text-white">
              Nossas Linhas de Produtos
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Equipamentos de alta qualidade para todas as suas necessidades industriais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onCTAClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Soluções completas para manter suas operações funcionando com máxima eficiência"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onCTAClick={handleServiceClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 text-white" style={{ backgroundColor: 'var(--color-orange)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Aumentar a Eficiência da Sua Operação?
            </h2>
            <p className="text-xl mb-8">
              Fale com nossos especialistas e descubra como a Mamuth pode transformar seus processos industriais
            </p>
            <CTAButton
              onClick={handleCTAClick}
              className="bg-white hover:bg-gray-100"
              style={{ color: 'var(--color-dark-blue)' }}
            >
              Entre em Contato Agora
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;