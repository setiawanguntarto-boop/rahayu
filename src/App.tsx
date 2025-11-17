import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import KenapaRahayu from "./pages/KenapaRahayu";
import TanyaRahayu from "./pages/TanyaRahayu";
import Kemitraan from "./pages/Kemitraan";
import ERPBroiler from "./pages/ERPBroiler";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import KebijakanPrivasi from "./pages/KebijakanPrivasi";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kenapa-rahayu" element={<KenapaRahayu />} />
            <Route path="/tanya-rahayu" element={<TanyaRahayu />} />
            <Route path="/kemitraan" element={<Kemitraan />} />
            <Route path="/erp-broiler" element={<ERPBroiler />} />
            <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
            <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
