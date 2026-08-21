import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StoreProvider } from './contexts/StoreContext';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import GuidePage from './pages/GuidePage';
import ChakraPage from './pages/ChakraPage';
import ZodiacPage from './pages/ZodiacPage';
import NumerologyPage from './pages/NumerologyPage';
import CrystalPage from './pages/CrystalPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <StoreProvider>
      {loading && <LoadingScreen />}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop-by-crystal" element={<CrystalPage />} />
          <Route path="/shop-by-chakra" element={<ChakraPage />} />
          <Route path="/shop-by-zodiac" element={<ZodiacPage />} />
          <Route path="/shop-by-numerology" element={<NumerologyPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </StoreProvider>
  );
}

export default App;
