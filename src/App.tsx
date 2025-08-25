import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhyChooseUs from "./pages/why-choose-us";
import ProductsServices from "./pages/ProductsServices";
import Affiliations from "./pages/Affiliations";
import TeamMembers from "./pages/TeamMembers";
import Projects from "./pages/Projects";
import ModularTheatreSystems from "./pages/products/ModularTheatreSystems";
import ColoredGlassPanels from "./pages/products/ColoredGlassPanels";
import GIPowderCoating from "./pages/products/GIPowderCoating";
import Customization from "./pages/products/Customization";
import SealingGaskets from "./pages/products/SealingGaskets";
import WallProtection from "./pages/products/WallProtection";
import HermeticLights from "./pages/products/HermeticLights";
import AntiMicrobialFlooring from "./pages/products/AntiMicrobialFlooring";
import ConnectPanels from "./pages/products/ConnectPanels";
import AirIntakeCorners from "./pages/products/AirIntakeCorners";
import AutoManualDoors from "./pages/products/AutoManualDoors";
import ORSurgicalControlPanel from "./pages/products/ORSurgicalControlPanel";
import PassThroughWindows from "./pages/products/PassThroughWindows";
import LEDXRayViewer from "./pages/products/LEDXRayViewer";
import OperationTheaterCabinets from "./pages/products/OperationTheaterCabinets";
import ScrubSystem from "./pages/products/ScrubSystem";
import MedicalGasPipelineSystem from "./pages/products/MedicalGasPipelineSystem";
import LocateUs from "./pages/LocateUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/products-services" element={<ProductsServices />} />
          <Route path="/affiliations" element={<Affiliations />} />
          <Route path="/team-members" element={<TeamMembers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products/modular-theatre-systems" element={<ModularTheatreSystems />} />
          <Route path="/products/colored-glass-panels" element={<ColoredGlassPanels />} />
          <Route path="/products/gi-powder-coating" element={<GIPowderCoating />} />
          <Route path="/products/customization" element={<Customization />} />
          <Route path="/products/sealing-gaskets" element={<SealingGaskets />} />
          <Route path="/products/wall-protection" element={<WallProtection />} />
          <Route path="/products/hermetic-lights" element={<HermeticLights />} />
          <Route path="/products/anti-microbial-flooring" element={<AntiMicrobialFlooring />} />
          <Route path="/products/connect-panels" element={<ConnectPanels />} />
          <Route path="/products/air-intake-corners" element={<AirIntakeCorners />} />
          <Route path="/products/auto-manual-doors" element={<AutoManualDoors />} />
          <Route path="/products/or-surgical-control-panel" element={<ORSurgicalControlPanel />} />
          <Route path="/products/pass-through-windows" element={<PassThroughWindows />} />
          <Route path="/products/led-x-ray-viewer" element={<LEDXRayViewer />} />
          <Route path="/products/operation-theatre-cabinets" element={<OperationTheaterCabinets />} />
          <Route path="/products/scrub-system" element={<ScrubSystem />} />
          <Route path="/products/medical-gas-pipeline-system" element={<MedicalGasPipelineSystem />} />
          <Route path="/locate-us" element={<LocateUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
