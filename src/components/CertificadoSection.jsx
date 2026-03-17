import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import seloParker from "@/assets/images/selo-certificado-parker.png";
import imagemCertificado from "@/assets/images/certificado_mamuth.jpg";
import seloFalch from "@/assets/images/logo_falch_certificado.png"

export default function CertificacoesSection() {
  const [open, setOpen] = useState(false);

  return (
   <section
  className="py-16 text-white relative"
  style={{ backgroundColor: "var(--color-dark-blue)" }}
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

      {/* COLUNA 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-4">
          <img
            src={seloParker}
            alt="Certificação Parker"
            className="w-20 md:w-28 mx-auto"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Mangueira Polyflex
        </h2>

        <p className="text-base md:text-lg text-gray-300 mb-3">
          Certificado de Montador e Distribuidor
        </p>

        <p className="text-sm md:text-base font-semibold text-[#FF5101] mb-6">
          Mamuth Mangueiras e Conexões <br className="hidden md:block" />
          Vila Maria – São Paulo
        </p>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full
          bg-[#FF5101] hover:bg-[#e54800] transition
          text-white text-sm font-semibold"
        >
          CONFIRA
        </button>
      </motion.div>

      {/* COLUNA 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-4">
          <img
            src={seloFalch}
            alt="Certificação Falch"
            className="w-20 md:w-28 mx-auto"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Máquinas de Hidrojato
        </h2>

        <p className="text-base md:text-lg text-gray-300 mb-3">
          Certificado de Montador e Distribuidor
        </p>

        <p className="text-sm md:text-base font-semibold text-[#FF5101] mb-6">
          Mamuth Mangueiras e Conexões <br className="hidden md:block" />
          Vila Maria – São Paulo
        </p>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full
          bg-[#FF5101] hover:bg-[#e54800] transition
          text-white text-sm font-semibold"
        >
          CONFIRA
        </button>
      </motion.div>

    </div>
  </div>

  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        onClick={() => setOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-xl p-4 max-w-3xl w-full mx-4"
        >
          {/* Botão fechar */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-700 hover:text-black"
          >
            <X size={26} />
          </button>

          {/* IMAGEM DO CERTIFICADO */}
          <img
            src={imagemCertificado}
            alt="Certificado"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>
  );
}