import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Heart, User, Search, Menu, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import Logo from "./Logo";
import CartDrawer from "@/components/cart/CartDrawer";

const Header = () => {
  const { cartCount, wishlist, user, cartOpen, setCartOpen } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Boys", href: "/products?gender=boys" },
    { label: "Girls", href: "/products?gender=girls" },
    { label: "Newborn", href: "/products?category=newborn" },
    { label: "Sale", href: "/products?sale=true" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        {/* Top bar */}
        <div className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground text-xs py-2 text-center font-medium tracking-wide">
          ✨ Free Shipping on Orders Over Rs. 3,000 | Use Code <span className="font-bold">WELCOME10</span> for 10% Off ✨
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[68px]">
            {/* Mobile menu */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2.5 hover:bg-muted rounded-xl transition-colors">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    link.label === "Sale"
                      ? "text-destructive hover:bg-destructive/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2.5 hover:bg-muted rounded-xl transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/wishlist" className="p-2.5 hover:bg-muted rounded-xl transition-colors relative">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">{wishlist.length}</span>
                )}
              </Link>
              <button onClick={() => setCartOpen(true)} className="p-2.5 hover:bg-muted rounded-xl transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">{cartCount}</span>
                )}
              </button>
              <Link to={user?.isLoggedIn ? "/account" : "/auth"} className="p-2.5 hover:bg-muted rounded-xl transition-colors">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border/50 bg-card/95 backdrop-blur-xl animate-fade-up">
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSearch} className="flex gap-3">
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search for products..." className="flex-1 bg-muted rounded-xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 border border-border/50" autoFocus />
                <button type="submit" className="bg-primary text-primary-foreground px-7 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">Search</button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl animate-fade-up">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                    link.label === "Sale" ? "text-destructive hover:bg-destructive/10 font-semibold" : "hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
