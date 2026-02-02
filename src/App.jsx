import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
{/* Páginas padrões */}
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
{/* Lavadoras */}
import Typhoon500Trifasico from '@/pages/products/lavadoras/Typhoonjet500Trifasico';
import Typhoon500Gasolina from '@/pages/products/lavadoras/Typhoonjet500Gasolina';
import Typhoon350Trifasico from '@/pages/products/lavadoras/Typhoonjet350Trifasico';
import Typhoon200Trifasico from '@/pages/products/lavadoras/Typhoonjet200Trifasico';
import Typhoon200Gasolina from '@/pages/products/lavadoras/Typhoonjet200Gasolina';
import Typhoon170Monofasico from '@/pages/products/lavadoras/Typhoonjet170Monofasico';
import Typhoon50cvEletrica from '@/pages/products/lavadoras/Typhoonjet50cvEletrica';
import Typhoon50cvDiesel from '@/pages/products/lavadoras/Typhoonjet50cvDiesel';
import Typhoon350Gasolina from '@/pages/products/lavadoras/Typhoonjet350Gasolina';
import Typhoon170Trifasico from '@/pages/products/lavadoras/Typhoonjet170Trifasico';
{/* Vestimentas */}
import HydroShellUAP from '@/pages/products/vestimentas/HydroShellUap';
import HydroShellSAP from '@/pages/products/vestimentas/HydroShellSap';
import CapaMangueira from '@/pages/products/vestimentas/CapaMangueira';
import BotasProtecao40K from '@/pages/products/vestimentas/BotaProtecao40K';
{/* Mangueiras e conexões */}
import PoliamidaSAP1500 from '@/pages/products/mangueirasEConexoes/PoliamidaSap1500';
import PoliamidaUAP2800 from '@/pages/products/mangueirasEConexoes/PoliamidaUap2800';
import NiplesM24DKO1 from '@/pages/products/mangueirasEConexoes/NiplesM24DKO1';
import NiplesAdaptadorHP from '@/pages/products/mangueirasEConexoes/NiplesAdaptadorHP';
import MangueiraWaterblast from '@/pages/products/mangueirasEConexoes/MangueiraWaterblast';
import Mangueira10000PSI from '@/pages/products/mangueirasEConexoes/Mangueira10000Psi';
import LuvasDeUniao from '@/pages/products/mangueirasEConexoes/LuvasDeUniao';
import LuvasDeEmendaUAP from '@/pages/products/mangueirasEConexoes/LuvasDeEmendaUap';
import EngatesRapidos from '@/pages/products/mangueirasEConexoes/EngatesRapidos';
import DistribuidoresUAP from '@/pages/products/mangueirasEConexoes/DistribuidoresUAP';
import DistribuidoresFluxoSAP from '@/pages/products/mangueirasEConexoes/DistribuidorFluxoSAP';
{/* Bicos para hidrojatos */}
import PortaBicoSafira from '@/pages/products/bicoHidrojato/PortaBicoSafira';
import PortaBicoRetoELeque from '@/pages/products/bicoHidrojato/PortaBIcoRetoLeque';
import BicoRotativo600 from '@/pages/products/bicoHidrojato/BicoTurboRotativo600';
import BicoRotativo500 from '@/pages/products/bicoHidrojato/BicoTurboRotativo500';
import BicoSharkRadial from '@/pages/products/bicoHidrojato/BicoSharkRadial';
import BicoShark22K from '@/pages/products/bicoHidrojato/BicoSharkJet22K';
import BicoSafiraM10 from '@/pages/products/bicoHidrojato/BicoSafiraM10';
import BicoSafira from '@/pages/products/bicoHidrojato/BicoSafira';
import BicoRotativoTitan from '@/pages/products/bicoHidrojato/BicoRotativoTitan';
import BicoRotativoR from '@/pages/products/bicoHidrojato/BicoRotativoR';
import BicoRetoLeque from '@/pages/products/bicoHidrojato/BicoRetoLeque';
import BicoFixoFoguetinho from '@/pages/products/bicoHidrojato/BicoFixoFoguetinho';
import BicoFerret22K from '@/pages/products/bicoHidrojato/BicoFerret22K';
{/* Bombas de alta pressão*/}
import BombaMTI600 from '@/pages/products/bombasAltaPressao/BombaMti600';
import BombaMTI50FF from '@/pages/products/bombasAltaPressao/BombaMTI50FF';
import BombaMTI500 from '@/pages/products/bombasAltaPressao/BombaMTI500';
import BombaMTI350 from '@/pages/products/bombasAltaPressao/BombaMTI350';
import BombaMTI250 from '@/pages/products/bombasAltaPressao/BombaMTI250';
import BombaMTI200 from '@/pages/products/bombasAltaPressao/BombaMTI200';
{/*Peças para bombas de Hidrojato   */}
import ValvulaSuccaoUAP from '@/pages/products/pecasBombasHidrojato/ValvulaSuccaoUAP';
import ValvulaPressaoSAP from '@/pages/products/pecasBombasHidrojato/ValvulaPressaoSAP'; 
import ValvulaPressaoUAP from './pages/products/pecasBombasHidrojato/ValvulaPressaoUAP';
import SedeDuplaUAP from '@/pages/products/pecasBombasHidrojato/SedeDuplaUAP'; 
import SedeDupla from './pages/products/pecasBombasHidrojato/SedeDupla';
import PistaoMetalDuroUAP from '@/pages/products/pecasBombasHidrojato/PistaoMetalDuroUAP';
import PistaoMetalDuroSAP from '@/pages/products/pecasBombasHidrojato/PistaoMetalDuroSAP';
import KitVedacaoUAP from '@/pages/products/pecasBombasHidrojato/KitVedacaoUAP';
import KitVedacaoSAP from '@/pages/products/pecasBombasHidrojato/KitVedacaoSAP';
import IntermediariaUAP from '@/pages/products/pecasBombasHidrojato/IntermediariaUAP';
import IntermediariaSAP from '@/pages/products/pecasBombasHidrojato/IntermediariaSAP';
import CestoTampaoUAP from '@/pages/products/pecasBombasHidrojato/CestoTampaoUAP';
import CestoTampaoSAP from '@/pages/products/pecasBombasHidrojato/CestoTampaoSAP';
{/*Hidrojatos e Acessórios   */}
import TubeClean from '@/pages/products/hidrojatoAcessorios/TubecleanMamuth';
import PowerBox2800 from '@/pages/products/hidrojatoAcessorios/PowerBoxMamuth2800';
import PistolaRotativaViper40K from '@/pages/products/hidrojatoAcessorios/PistolaRotativaViper40k';
import PistolaPneumatica2G from '@/pages/products/hidrojatoAcessorios/PistolaPneumatica2G';
import PistolaFluxoFechado from '@/pages/products/hidrojatoAcessorios/PistolaFluxoFechado';
import PistolaFluxoAberto from '@/pages/products/hidrojatoAcessorios/PistolaFluxoAberto';
import PedalFluxoAberto from '@/pages/products/hidrojatoAcessorios/PedalFluxoAberto';

import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Páginas padrões */}
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
            {/* Lavadoras */}
            <Route path="/lavadoras/typhoon-jet-500-trifasico" element={<Typhoon500Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-500-gasolina" element={<Typhoon500Gasolina />} />
            <Route path="/lavadoras/typhoon-jet-350-trifasico" element={<Typhoon350Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-200-trifasico" element={<Typhoon200Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-200-gasolina" element={<Typhoon200Gasolina />} />
            <Route path="/lavadoras/typhoon-jet-170-monofasico" element={<Typhoon170Monofasico />} />
            <Route path="/lavadoras/typhoon-jet-50cv-eletrica" element={<Typhoon50cvEletrica />} />
            <Route path="/lavadoras/typhoon-jet-50cv-diesel" element={<Typhoon50cvDiesel />} />
            <Route path="/lavadoras/typhoon-jet-350-gasolina" element={<Typhoon350Gasolina/>}/>
            <Route path="/lavadoras/typhoon-jet-170-trifasico" element={<Typhoon170Trifasico />} />
            {/* Vestimentas */}
            <Route path="/vestimentas/hydro-shell-uap" element={<HydroShellUAP/>}/>
            <Route path="/vestimentas/hydro-shell-sap" element={<HydroShellSAP/>}/>
            <Route path="/vestimentas/capa-de-mangueira" element={<CapaMangueira/>}/>
            <Route path="/vestimentas/bota-de-protecao-40k" element={<BotasProtecao40K/>}/>
            {/* Mangueiras e conexões */}
            <Route path="/mangueiras-conexoes/poliamida-sap-1500bar" element={<PoliamidaSAP1500/>}/>
            <Route path="/mangueiras-conexoes/poliamida-uap-2800bar" element={<PoliamidaUAP2800/>}/>
            <Route path="/mangueiras-conexoes/niples-m24dko1" element={<NiplesM24DKO1/>}/>
            <Route path="/mangueiras-conexoes/niples-adaptador-hp-9-16" element={<NiplesAdaptadorHP/>}/>
            <Route path="/mangueiras-conexoes/mangueira-waterblast" element={<MangueiraWaterblast/>}/>
            <Route path="/mangueiras-conexoes/mangueira-ate-10000psi" element={<Mangueira10000PSI/>}/>
            <Route path="/mangueiras-conexoes/luvas-de-uniao" element={<LuvasDeUniao/>}/>
            <Route path="/mangueiras-conexoes/luvas-de-emenda-uap" element={<LuvasDeEmendaUAP/>}/>
            <Route path="/mangueiras-conexoes/engates-rapidos" element={<EngatesRapidos/>}/>
            <Route path="/mangueiras-conexoes/distribuidores-uap-y-t-90°" element={<DistribuidoresUAP/>}/>
            <Route path="/mangueiras-conexoes/distribuidores-fluxo-sap" element={<DistribuidoresFluxoSAP/>}/>
            {/* Bicos para hidrojatos */}
            <Route path="/bicos-hidrojatos/porta-bico-safira" element={<PortaBicoSafira/>}/>
            <Route path="/bicos-hidrojatos/porta-bico-reto-e-leque" element={<PortaBicoRetoELeque/>}/>
            <Route path="/bicos-hidrojatos/bico-turbo-rotativo-600" element={<BicoRotativo600/>}/>
            <Route path="/bicos-hidrojatos/bico-turbo-rotativo-500" element={<BicoRotativo500/>}/>
            <Route path="/bicos-hidrojatos/bico-shark-radial-40k" element={<BicoSharkRadial/>}/>
            <Route path="/bicos-hidrojatos/bico-shark-jet-22k" element={<BicoShark22K/>}/>
            <Route path="/bicos-hidrojatos/bico-safira-m10" element={<BicoSafiraM10/>}/>
            <Route path="/bicos-hidrojatos/bico-safira" element={<BicoSafira/>}/>
            <Route path="/bicos-hidrojatos/bico-rotativo-titan" element={<BicoRotativoTitan/>}/>
            <Route path="/bicos-hidrojatos/bico-rotativo-r" element={<BicoRotativoR/>}/>
            <Route path="/bicos-hidrojatos/bico-reto-e-leque" element={<BicoRetoLeque/>}/>
            <Route path="/bicos-hidrojatos/bico-fixo-foguetinho" element={<BicoFixoFoguetinho/>}/>
            <Route path="/bicos-hidrojatos/bico-ferret-22k" element={<BicoFerret22K/>}/>
            {/* Bombas de alta pressão*/}
            <Route path="/bombas-de-alta-pressao/bomba-mti-600" element={<BombaMTI600/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-50ff" element={<BombaMTI50FF/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-500" element={<BombaMTI500/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-350" element={<BombaMTI350/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-250" element={<BombaMTI250/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-200" element={<BombaMTI200/>}/>
            {/*Peças para bombas de Hidrojato   */}
            <Route path="/pecas-para-bombas-de-hidrojatos/valvula-de-succao-uap" element={<ValvulaSuccaoUAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/valvula-de-pressao-sap" element={<ValvulaPressaoSAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/valvula-de-pressao-uap" element={<ValvulaPressaoUAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/sede-dupla-uap" element={<SedeDuplaUAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/sede-dupla" element={<SedeDupla/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/pistao-de-metal-duro-uap" element={<PistaoMetalDuroUAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/pistao-de-metal-duro-sap" element={<PistaoMetalDuroSAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/kit-de-vedacao-uap" element={<KitVedacaoUAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/kit-de-vedacao-sap" element={<KitVedacaoSAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/intermediaria-uap" element={<IntermediariaUAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/intermediaria-sap" element={<IntermediariaSAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/cesto-tampao-uap" element={<CestoTampaoUAP/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/cesto-tampao-sap" element={<CestoTampaoSAP/>}/>
            {/*Hidrojatos e Acessórios   */}
            <Route path="/hidrojatos-e-acessorios/tubeclean-mamuth" element={<TubeClean/>}/>
            <Route path="/hidrojatos-e-acessorios/powerbox-mamuth-2800" element={<PowerBox2800/>}/>
            <Route path="/hidrojatos-e-acessorios/pistola-rotativa-viper-40k" element={<PistolaRotativaViper40K/>}/>
            <Route path="/hidrojatos-e-acessorios/pistola-pneumatica-2g-mtpt-2800" element={<PistolaPneumatica2G/>}/>
            <Route path="/hidrojatos-e-acessorios/pistola-fluxo-fechado-mtff-1200" element={<PistolaFluxoFechado/>}/>
            <Route path="/hidrojatos-e-acessorios/pistola-fluxo-aberto-mtfa-1400" element={<PistolaFluxoAberto/>}/>
            <Route path="/hidrojatos-e-acessorios/pedal-fluxo-aberto-mtpa-1400" element={<PedalFluxoAberto/>}/>
          </Routes>
        </main> 
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;