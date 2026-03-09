import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNoticiasOpen, setIsNoticiasOpen] = useState(false);
  const [isNoticiasMobileOpen, setIsNoticiasMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Representações', path: '/representacoes' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <Logo size="md" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navLinks.map((link) => {

              if (link.name === 'Notícias') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setIsNoticiasOpen(true)}
                    onMouseLeave={() => setIsNoticiasOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-2 text-sm font-medium flex items-center gap-1 transition-all ${
                        isActive(link.path)
                          ? 'text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={isActive(link.path) ? { backgroundColor: '#FE5100' } : {}}
                    >
                      Notícias
                      <ChevronDown size={16} />
                    </Link>

                    <AnimatePresence>
                      {isNoticiasOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 bg-white shadow-xl border border-[#FE5100]"
                        >
                          <button
                            className="block w-40 whitespace-nowrap text-left px-4 py-2 text-sm font-medium
                            text-gray-700 transition-all
                            hover:text-white hover:bg-[#FE5100]"
                          >
                            Materiais Ricos
                          </button>

                          <button
                            className="block w-40 whitespace-nowrap text-left px-4 py-2 text-sm font-medium
                            text-gray-700 transition-all
                            hover:text-white hover:bg-[#FE5100]"
                          >
                            Artigos
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={isActive(link.path) ? { backgroundColor: '#FE5100' } : {}}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {

                if (link.name === 'Notícias') {
                  return (
                    <div key={link.path}>
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                      >
                        Notícias
                      </Link>

                      <button
                        onClick={() => setIsNoticiasMobileOpen(!isNoticiasMobileOpen)}
                        className="text-left px-6 py-2 text-sm text-gray-600"
                      >
                        ▼ Submenu
                      </button>

                      <AnimatePresence>
                        {isNoticiasMobileOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-8 mt-2 space-y-1 border-l-2 border-[#FE5100]"
                          >
                            <button className="block w-40 whitespace-nowrap text-left py-2 text-sm text-gray-600 hover:text-white hover:bg-[#FE5100] transition-all px-3">
                              Materiais Ricos
                            </button>

                            <button className="block w-40 whitespace-nowrap text-left py-2 text-sm text-gray-600 hover:text-white hover:bg-[#FE5100] transition-all px-3">
                              Artigos
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-all ${
                      isActive(link.path)
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={isActive(link.path) ? { backgroundColor: '#FE5100' } : {}}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;