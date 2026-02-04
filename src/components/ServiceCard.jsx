import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';

const ServiceCard = ({ icon: Icon, title, description, benefits, onCTAClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col"
    >
      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FF5101' }}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-dark-blue)' }}>
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {benefits && (
        <ul className="mb-4 space-y-2 flex-grow">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="mr-2 mt-0.5" style={{ color: '#FF5101' }}>✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      )}
      <CTAButton onClick={onCTAClick} className="w-full">
        Solicitar Serviço
      </CTAButton>
    </motion.div>
  );
};

export default ServiceCard;