import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import Farmers from "./pages/Farmers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import StartShopping from "./pages/StartShopping";
import BecomePartner from "./pages/BecomePartner";
import MyOrders from "./pages/MyOrders";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FreshVegetables from "./pages/categories/FreshVegetables";
import SeasonalFruits from "./pages/categories/SeasonalFruits";
import OrganicGrains from "./pages/categories/OrganicGrains";
import DairyProducts from "./pages/categories/DairyProducts";
import HerbsSpices from "./pages/categories/HerbsSpices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/start-shopping" element={<StartShopping />} />
            <Route path="/become-partner" element={<BecomePartner />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/categories/fresh-vegetables" element={<FreshVegetables />} />
            <Route path="/categories/seasonal-fruits" element={<SeasonalFruits />} />
            <Route path="/categories/organic-grains" element={<OrganicGrains />} />
            <Route path="/categories/dairy-products" element={<DairyProducts />} />
            <Route path="/categories/herbs-spices" element={<HerbsSpices />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;