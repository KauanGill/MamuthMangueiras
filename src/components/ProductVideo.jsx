import React from "react";

const ProductVideo = ({ videoSource }) => {
  if (!videoSource) return null;

  return (
    <section className="bg-white py-4 px-4 w-full flex justify-center">
      <div className="max-w-4xl w-full">
        <div 
          className="relative aspect-video rounded-[32px] overflow-hidden shadow-md"
          style={{ border: "6px solid #FF5101" }}
        >
          <h1 className="text-black font-bold text-center">O COMPONENTE ESTÁ CARREGANDO!</h1>
          <video 
            src={videoSource} 
            controls 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ProductVideo;