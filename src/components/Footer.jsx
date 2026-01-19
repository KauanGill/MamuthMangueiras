import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';
import { CONTACT_INFO } from '@/constants/contactInfo';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4 hover:opacity-80 transition-opacity duration-300">
              <Logo size="sm" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Peso pesado em alta pressão. Soluções completas em equipamentos industriais e hidrojateamento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_INFO.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{CONTACT_INFO.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.email.link}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{CONTACT_INFO.email.address}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.address.full}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mamuthmangueirasoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mamuthmangueirasoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://br.linkedin.com/company/mamuthmangueirasoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Mamuth. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;