import { CartProvider } from "./components/CartContext";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FlashSale from "./components/FlashSale";
import ProductGrid from "./components/ProductGrid";
import PromoBanner from "./components/PromoBanner";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-white font-sans text-zinc-900 antialiased">
        <TopBar />
        <Navbar />
        <CartDrawer />
        <main>
          <Hero />
          <Categories />
          <FlashSale />
          <ProductGrid />
          <PromoBanner />
          <Stats />
          <Testimonials />
          <FAQ />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
