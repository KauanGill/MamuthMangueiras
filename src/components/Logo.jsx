import React from 'react';
import imgLogo from "@/assets/icons/img-header.jpg";
const Logo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-10',      // 40px
    md: 'h-[60px]',  // 60px
    lg: 'h-[100px]', // 100px
  };

  return (
    <img
      src="https://horizons-cdn.hostinger.com/6ad4ee89-979b-44b1-a2d4-f4e67081681a/586963316ea14914d5954d0eda4ba7a5.png"
      alt="Mamuth"
      className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain transition-all duration-300 drop-shadow-md ${className}`}
    />
  );
};

export default Logo;