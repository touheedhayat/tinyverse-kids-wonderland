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
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        {/* Top bar */}
        <div className="bg-primary text-primary-foreground text-xs py-1.5 text-center font-medium tracking-wide">
          ✨ Free Shipping on Orders Over Rs. 3,000 | Use Code WELCOME10 for 10% Off ✨
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link key={link.label} to={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:origin-right hover:after:scale-x-100 hover:after:origin-left">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/wishlist" className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">{wishlist.length}</span>
                )}
              </Link>
              <button onClick={() => setCartOpen(true)} className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </button>
              <Link to={user?.isLoggedIn ? "/account" : "/auth"} className="p-2 hover:bg-muted rounded-lg transition-colors">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border bg-card animate-fade-up">
            <div className="container mx-auto px-4 py-3">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search for products..." className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" autoFocus />
                <button type="submit" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Search</button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-up">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
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
