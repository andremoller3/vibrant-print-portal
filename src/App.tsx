
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
// Service pages
import BannersFaixasFachadas from "./pages/services/BannersFaixasFachadas";
import AdesivosRotulos from "./pages/services/AdesivosRotulos";
import AdesivacaoVeiculo from "./pages/services/AdesivacaoVeiculo";
import CartaoVisita from "./pages/services/CartaoVisita";
import Panfletos from "./pages/services/Panfletos";
import WindBanners from "./pages/services/WindBanners";
import PlacaPVC from "./pages/services/PlacaPVC";
import Cardapios from "./pages/services/Cardapios";
import CamisetasPersonalizadas from "./pages/services/CamisetasPersonalizadas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/servicos" element={<Services />} />
          {/* Service individual pages */}
          <Route path="/servicos/banners-faixas-fachadas" element={<BannersFaixasFachadas />} />
          <Route path="/servicos/adesivos-rotulos" element={<AdesivosRotulos />} />
          <Route path="/servicos/adesivacao-veiculo" element={<AdesivacaoVeiculo />} />
          <Route path="/servicos/cartao-visita" element={<CartaoVisita />} />
          <Route path="/servicos/panfletos" element={<Panfletos />} />
          <Route path="/servicos/wind-banners" element={<WindBanners />} />
          <Route path="/servicos/placa-pvc" element={<PlacaPVC />} />
          <Route path="/servicos/cardapios" element={<Cardapios />} />
          <Route path="/servicos/camisetas-personalizadas" element={<CamisetasPersonalizadas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
