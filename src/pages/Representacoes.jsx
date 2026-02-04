import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, Globe, Award, TrendingUp } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { useToast } from '@/components/ui/use-toast';

const Representacoes = () => {
  const { toast } = useToast();

  const handleLearnMore = (brandName) => {
    toast({
      title: "Informações",
      description: `Em breve mais detalhes sobre ${brandName} estarão disponíveis.`,
    });
  };

  const brands = [
    {
      icon: Building2,
      name: 'International Pump Systems',
      description: 'Líder mundial em bombas de alta pressão com tecnologia de ponta. Parceria estabelecida desde 2010, trazendo as mais avançadas soluções em sistemas de bombeamento para o mercado brasileiro.',
      specialties: ['Bombas industriais', 'Sistemas de alta pressão', 'Automação']
    },
    {
      icon: Globe,
      name: 'HydroTech Solutions',
      description: 'Especialista em sistemas de hidrojateamento e limpeza industrial. Inovação constante em tecnologias de limpeza sustentável e eficiente, com presença em mais de 40 países.',
      specialties: ['Hidrojateamento', 'Limpeza industrial', 'Tecnologia verde']
    },
    {
      icon: Award,
      name: 'PressureMax Equipment',
      description: 'Fabricante premium de equipamentos de pressão com certificações internacionais. Reconhecida pela durabilidade excepcional e performance superior de seus produtos.',
      specialties: ['Equipamentos de pressão', 'Certificações ISO', 'Qualidade premium']
    },
    {
      icon: TrendingUp,
      name: 'CleanForce Industrial',
      description: 'Referência em soluções de limpeza industrial e manutenção preventiva. Tecnologia proprietária que reduz custos operacionais e aumenta a eficiência dos processos.',
      specialties: ['Limpeza pesada', 'Manutenção preventiva', 'Eficiência operacional']
    },
    {
      icon: Building2,
      name: 'TechFlow Systems',
      description: 'Inovação em sistemas hidráulicos e controle de fluxo. Líder em desenvolvimento de soluções customizadas para indústrias de alta exigência técnica.',
      specialties: ['Sistemas hidráulicos', 'Controle de fluxo', 'Soluções customizadas']
    },
    {
      icon: Globe,
      name: 'RoboClean Pro',
      description: 'Tecnologia robótica aplicada à limpeza industrial. Pioneira em automação de processos de limpeza e manutenção, aumentando segurança e produtividade.',
      specialties: ['Robótica industrial', 'Automação', 'Segurança operacional']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Representações - Mamuth | Parcerias Internacionais de Qualidade</title>
        <meta name="description" content="Conheça nossas representações e parcerias com marcas líderes mundiais em equipamentos industriais e sistemas de alta pressão." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Representações</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Parcerias estratégicas com as marcas mais respeitadas do mercado mundial
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              A Mamuth orgulha-se de representar marcas líderes mundiais em equipamentos industriais e sistemas de alta pressão. 
              Nossas parcerias estratégicas garantem acesso às tecnologias mais avançadas, produtos de qualidade superior e suporte 
              técnico especializado para nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Marcas Representadas"
            subtitle="Selecionamos cuidadosamente cada parceiro para oferecer o melhor ao mercado brasileiro"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FF5101' }}>
                  <brand.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  {brand.name}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{brand.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-dark-blue)' }}>
                    Especialidades:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: '#FF5101' }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => handleLearnMore(brand.name)}
                  className="font-semibold hover:underline inline-flex items-center"
                  style={{ color: '#FF5101' }}
                >
                  Saiba Mais →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Por Que Nossas Representações
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Vantagens de trabalhar com parceiros globais através da Mamuth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Tecnologia de Ponta',
                description: 'Acesso às mais recentes inovações do mercado internacional'
              },
              {
                title: 'Suporte Local',
                description: 'Assistência técnica especializada em território nacional'
              },
              {
                title: 'Peças Originais',
                description: 'Garantia de qualidade com componentes certificados'
              },
              {
                title: 'Melhor Custo-Benefício',
                description: 'Preços competitivos com qualidade internacional'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Representacoes;