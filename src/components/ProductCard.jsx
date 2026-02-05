import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 1. Importe o useNavigate
import CTAButton from '@/components/CTAButton';

// 2. Adicione 'path' aqui nas props
const ProductCard = ({ image, name, description, specs, path, onCTAClick }) => {
  const navigate = useNavigate(); // 3. Inicialize o navigate

  // 4. Crie uma função para lidar com o clique
  const handleDetailsClick = () => {
    if (path) {
      navigate(path); // Se houver um caminho, ele navega
    } else if (onCTAClick) {
      onCTAClick(); // Se não houver caminho, ele faz a ação padrão (ex: abrir WhatsApp)
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
    >
      {/* 5. Dica: Envolva a imagem com um cursor pointer para indicar que é clicável */}
      <div className="h-48 overflow-hidden cursor-pointer" onClick={handleDetailsClick}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 
          className="text-xl font-bold mb-3 cursor-pointer" 
          style={{ color: 'var(--color-dark-blue)' }}
          onClick={handleDetailsClick} // Título também clicável
        >
          {name}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        {specs && (
          <ul className="mb-4 space-y-1">
            {specs.map((spec, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-start">
                <span className="mr-2" style={{ color: '#FF5101' }}>•</span>
                {spec}
              </li>
            ))}
          </ul>
        )}

        {/* 6. Altere o onClick do botão para a nossa nova função */}
        <CTAButton onClick={handleDetailsClick} className="w-full">
          {path ? "Ver Detalhes" : "Solicitar Orçamento"}
        </CTAButton>
      </div>
    </motion.div>
  );
};

export default ProductCard;