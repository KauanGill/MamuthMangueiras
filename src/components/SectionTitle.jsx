import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-dark-blue)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-gray)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;