import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adorable, premium-quality clothing for your little stars. Designed with love for newborns to 5-year-olds.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[["Shop All", "/products"], ["Boys", "/products?gender=boys"], ["Girls", "/products?gender=girls"], ["Newborn", "/products?category=newborn"], ["Sale", "/products?sale=true"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Help</h4>
            <ul className="space-y-2.5">
              {["Shipping & Returns", "Size Guide", "FAQs", "Contact Us", "Privacy Policy"].map(label => (
                <li key={label}><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><Mail className="w-4 h-4 text-primary" /> hello@tinyverse.pk</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="w-4 h-4 text-primary" /> +92 300 1234567</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="w-4 h-4 text-primary mt-0.5" /> Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 TinyVerse. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="px-2 py-1 bg-muted rounded">💳 Visa</span>
            <span className="px-2 py-1 bg-muted rounded">💳 Mastercard</span>
            <span className="px-2 py-1 bg-muted rounded">💳 JazzCash</span>
            <span className="px-2 py-1 bg-muted rounded">💳 EasyPaisa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
