import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist') || '[]'));
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists ? prev.filter((item) => item.id !== product.id) : [...prev, product];
    });
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQty = (productId, delta) => {
    setCart((prev) => prev.flatMap((item) => item.id === productId ? (item.quantity + delta > 0 ? [{ ...item, quantity: item.quantity + delta }] : []) : [item]));
  };

  const value = useMemo(() => ({ wishlist, cart, theme, setTheme, toggleWishlist, addToCart, updateQty }), [wishlist, cart, theme]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
