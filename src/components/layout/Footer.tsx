import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="h-1 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40" />
      
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Logo size="md" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adorable, premium-quality clothing for your little stars. Designed with love for newborns to 5-year-olds.
            </p>
            <div className="flex gap-2.5">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {[["Shop All", "/products"], ["Boys", "/products?gender=boys"], ["Girls", "/products?gender=girls"], ["Newborn", "/products?category=newborn"], ["Sale", "/products?sale=true"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-base">Help</h4>
            <ul className="space-y-3">
              {["Shipping & Returns", "Size Guide", "FAQs", "Contact Us", "Privacy Policy"].map(label => (
                <li key={label}><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-base">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                hello@tinyverse.pk
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +92 300 1234567
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            © 2026 TinyVerse. Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Pakistan
          </p>
          <div className="flex gap-3 text-xs text-muted-foreground">
            {["Visa", "Mastercard", "JazzCash", "EasyPaisa"].map(name => (
              <span key={name} className="px-3 py-1.5 bg-muted rounded-lg font-medium">💳 {name}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
