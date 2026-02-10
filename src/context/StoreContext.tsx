import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  user: User | null;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateCartQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartTotal: number;
  cartCount: number;
  login: (name: string, email: string) => void;
  logout: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("tinyverse-cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem("tinyverse-wishlist");
    return saved ? JSON.parse(saved) : [];
  });
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("tinyverse-user");
    return saved ? JSON.parse(saved) : null;
  });
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => { localStorage.setItem("tinyverse-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("tinyverse-wishlist", JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem("tinyverse-user", JSON.stringify(user)); }, [user]);

  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.size === size && i.color === color);
      if (existing) return prev.map(i => i.product.id === product.id && i.size === size && i.color === color ? { ...i, quantity: i.quantity + quantity } : i);
      return [...prev, { product, quantity, size, color }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart(prev => prev.filter(i => !(i.product.id === productId && i.size === size && i.color === color)));
  };

  const updateCartQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(productId, size, color);
    setCart(prev => prev.map(i => i.product.id === productId && i.size === size && i.color === color ? { ...i, quantity } : i));
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartTotal = cart.reduce((sum, i) => sum + (i.product.offerPrice || i.product.price) * i.quantity, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  const login = (name: string, email: string) => setUser({ name, email, isLoggedIn: true });
  const logout = () => { setUser(null); localStorage.removeItem("tinyverse-user"); };

  return (
    <StoreContext.Provider value={{ cart, wishlist, user, cartOpen, setCartOpen, addToCart, removeFromCart, updateCartQuantity, clearCart, toggleWishlist, isInWishlist, cartTotal, cartCount, login, logout }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};
