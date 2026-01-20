import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Sobre from '@/pages/Sobre';
import LinhasDeProdutos from '@/pages/LinhasDeProdutos';
import Representacoes from '@/pages/Representacoes';
import Servicos from '@/pages/Servicos';
import Noticias from '@/pages/Noticias';
import NoticiaDetalhe from '@/pages/NoticiaDetalhe';
import Contato from '@/pages/Contato';
import Lavadoras from '@/pages/products/Lavadoras';
import Vestimentas from '@/pages/products/Vestimentas';
import MangueirasConexoes from '@/pages/products/MangueirasConexoes';
import BicosHidrojatos from '@/pages/products/BicosHidrojatos';
import BombasAltaPressao from '@/pages/products/BombasAltaPressao';
import PecasBombas from '@/pages/products/PecasBombas';
import HidroAcessorios from '@/pages/products/HidroAcessorios';
import AcessoriosLavadora from '@/pages/products/AcessoriosLavadora';
import Typhoon500Trifasico from '@/pages/products/lavadoras/Typhoonjet500Trifasico';
import Typhoon500Gasolina from '@/pages/products/lavadoras/Typhoonjet500Gasolina';
import Typhoon350Trifasico from '@/pages/products/lavadoras/Typhoonjet350Trifasico';
import Typhoon200Trifasico from '@/pages/products/lavadoras/Typhoonjet200Trifasico';
import Typhoon200Gasolina from '@/pages/products/lavadoras/Typhoonjet200Gasolina';
import Typhoon170Monofasico from '@/pages/products/lavadoras/Typhoonjet170Monofasico';
import Typhoon50cvEletrica from '@/pages/products/lavadoras/TyphoonJet50cvEletrica';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<LinhasDeProdutos />} />
            <Route path="/representacoes" element={<Representacoes />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/lavadoras" element={<Lavadoras />} />
            <Route path="/vestimentas" element={<Vestimentas />} />
            <Route path="/mangueiras-conexoes" element={<MangueirasConexoes />} />
            <Route path="/bicos-hidrojatos" element={<BicosHidrojatos />} />
            <Route path="/bombas-alta-pressao" element={<BombasAltaPressao />} />
            <Route path="/pecas-bombas" element={<PecasBombas />} />
            <Route path="/hidrojato-acessorios" element={<HidroAcessorios />} />
            <Route path="/acessorios-lavadoras" element={<AcessoriosLavadora />} />
            <Route path="/lavadoras/typhoon-jet-500-trifasico" element={<Typhoon500Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-500-gasolina" element={<Typhoon500Gasolina />} />
            <Route path="/lavadoras/typhoon-jet-350-trifasico" element={<Typhoon350Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-200-trifasico" element={<Typhoon200Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-200-gasolina" element={<Typhoon200Gasolina />} />
            <Route path="/lavadoras/typhoon-jet-170-monofasico" element={<Typhoon170Monofasico />} />
            <Route path="/lavadoras/typhoon-jet-50cv-eletrica" element={<Typhoon50cvEletrica />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;