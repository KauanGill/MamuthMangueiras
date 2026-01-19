import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/constants/contactInfo';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    howYouKnew: '',
    howYouKnewOther: ''
  });

  const [errors, setErrors] = useState({});

  const subjects = [
    'Orçamento de Produto',
    'Orçamento de Serviço',
    'Suporte Técnico',
    'Informações Gerais',
    'Parcerias',
    'Outros'
  ];

  const knowledgeSources = [
    'Google',
    'Indicação',
    'Já Sou Cliente',
    'Outros'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!formData.assunto) {
      newErrors.assunto = 'Selecione um assunto';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Form Submitted:', formData);
      
      toast({
        title: "Mensagem Enviada!",
        description: "Obrigado pelo contato. Nossa equipe responderá em breve.",
      });

      // Clear form
      setFormData({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
        howYouKnew: '',
        howYouKnewOther: ''
      });
    } else {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      content: CONTACT_INFO.phone.display,
      link: CONTACT_INFO.phone.whatsapp
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: CONTACT_INFO.email.address,
      link: CONTACT_INFO.email.link
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: CONTACT_INFO.address.full,
      link: null
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Seg - Sex: 8h às 18h',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - Mamuth | Fale Conosco</title>
        <meta name="description" content="Entre em contato com a Mamuth. Estamos prontos para atender suas necessidades em equipamentos industriais e soluções de alta pressão." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Estamos prontos para atender suas necessidades e responder suas dúvidas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-dark-blue)' }}>
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-900 ${
                      errors.nome ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-900"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-900 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-900 ${
                        errors.telefone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-900 ${
                      errors.assunto ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione um assunto</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto}</p>}
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none bg-white text-gray-900 ${
                      errors.mensagem ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                  {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>}
                </div>

                <div>
                  <label htmlFor="howYouKnew" className="block text-sm font-medium text-gray-700 mb-1">
                    Aonde conheceu a Mamuth?
                  </label>
                  <select
                    id="howYouKnew"
                    name="howYouKnew"
                    value={formData.howYouKnew}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-900"
                  >
                    <option value="">Selecione uma opção (Opcional)</option>
                    {knowledgeSources.map((source, index) => (
                      <option key={index} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                </div>

                <AnimatePresence>
                  {formData.howYouKnew === 'Outros' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <label htmlFor="howYouKnewOther" className="block text-sm font-medium text-gray-700 mb-1">
                        Como nos conheceu?
                      </label>
                      <input
                        type="text"
                        id="howYouKnewOther"
                        name="howYouKnewOther"
                        value={formData.howYouKnewOther}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-900"
                        placeholder="Por favor, especifique"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded-lg transition-all hover:shadow-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-orange)' }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-dark-blue)' }}>
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-orange)' }}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: 'var(--color-dark-blue)' }}>
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            style={{ color: 'var(--color-orange)' }}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src={CONTACT_INFO.address.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Localização Mamuth"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;