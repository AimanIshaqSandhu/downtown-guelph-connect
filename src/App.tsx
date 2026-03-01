import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import HomePage from "@/pages/HomePage";
import ConstructionPage from "@/pages/ConstructionPage";
import DirectoryPage from "@/pages/DirectoryPage";
import ParkingPage from "@/pages/ParkingPage";
import BingoPage from "@/pages/BingoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MobileLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/parking" element={<ParkingPage />} />
            <Route path="/bingo" element={<BingoPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
