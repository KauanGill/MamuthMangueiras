import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplet, Wrench, Settings, Zap, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Servicos = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleServiceClick = () => {
    toast({
      title: "Serviço",
      description: "Redirecionando para a página de contato...",
    });
    setTimeout(() => navigate('/contato'), 1000);
  };

  const services = [
    {
      icon: Droplet,
      title: 'Hidrojateamento',
      description: 'Serviços especializados em hidrojateamento de alta pressão para limpeza e preparação de superfícies industriais, remoção de incrustações e desobstrução de tubulações.',
      benefits: [
        'Remoção eficiente de incrustações e oxidações',
        'Preservação da integridade das superfícies',
        'Operação segura e controlada',
        'Redução de tempo de parada',
        'Solução ecológica sem produtos químicos',
        'Equipe técnica certificada'
      ]
    },
    {
      icon: Wrench,
      title: 'Limpeza Industrial',
      description: 'Soluções completas de limpeza para ambientes industriais complexos, incluindo tanques, trocadores de calor, tubulações e equipamentos de grande porte.',
      benefits: [
        'Equipamentos de última geração',
        'Protocolos de segurança rigorosos',
        'Mínimo impacto nas operações',
        'Limpeza profunda e duradoura',
        'Equipe especializada e treinada',
        'Relatórios detalhados de serviço'
      ]
    },
    {
      icon: Settings,
      title: 'Suporte Técnico',
      description: 'Assistência técnica especializada, manutenção preventiva e corretiva de equipamentos, garantindo máxima disponibilidade e performance operacional.',
      benefits: [
        'Atendimento rápido e eficiente',
        'Técnicos certificados pelos fabricantes',
        'Peças originais em estoque',
        'Planos de manutenção personalizados',
        'Suporte remoto e presencial',
        'Garantia de serviço estendida'
      ]
    },
    {
      icon: Zap,
      title: 'Soluções Sob Medida',
      description: 'Desenvolvimento de projetos personalizados e soluções customizadas para desafios específicos, incluindo análise técnica, projeto, implementação e treinamento.',
      benefits: [
        'Análise detalhada das necessidades',
        'Projeto de engenharia dedicado',
        'Integração com sistemas existentes',
        'Implementação acompanhada',
        'Treinamento da equipe operacional',
        'Suporte contínuo pós-implementação'
      ]
    }
  ];

  const differentials = [
    {
      icon: CheckCircle,
      title: 'Experiência Comprovada',
      description: 'Mais de 20 anos executando projetos de alta complexidade em diversos segmentos industriais.'
    },
    {
      icon: Shield,
      title: 'Segurança em Primeiro Lugar',
      description: 'Protocolos rigorosos de segurança e equipe treinada conforme normas regulamentadoras.'
    },
    {
      icon: Clock,
      title: 'Disponibilidade Total',
      description: 'Atendimento 24/7 para emergências e suporte técnico sempre que você precisar.'
    },
    {
      icon: Award,
      title: 'Certificações Internacionais',
      description: 'Equipe certificada e processos validados por normas de qualidade internacionais.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Mamuth | Hidrojateamento e Limpeza Industrial</title>
        <meta name="description" content="Serviços especializados em hidrojateamento, limpeza industrial, suporte técnico e soluções sob medida. Qualidade e eficiência garantidas." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Soluções completas para manter suas operações funcionando com máxima eficiência
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Serviços Especializados"
            subtitle="Equipe técnica qualificada e equipamentos de última geração"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Por Que Escolher a Mamuth?"
            subtitle="Diferenciais que nos tornam referência no mercado"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF5101' }}>
                  <differential.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-dark-blue)' }}>
                  {differential.title}
                </h3>
                <p className="text-gray-600">{differential.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{ backgroundColor: '#FF5101' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de um Serviço Especializado?
            </h2>
            <p className="text-xl mb-8">
              Nossa equipe está pronta para atender sua necessidade com agilidade e qualidade
            </p>
            <button
              onClick={handleServiceClick}
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

export default Servicos;