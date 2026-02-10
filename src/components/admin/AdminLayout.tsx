import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Megaphone, Settings, ChevronLeft, Menu } from "lucide-react";
import Logo from "@/components/layout/Logo";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Products", icon: Package, href: "/admin/products" },
  { label: "Orders", icon: ShoppingCart, href: "/admin/orders" },
  { label: "Customers", icon: Users, href: "/admin/customers" },
  { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
  { label: "Marketing", icon: Megaphone, href: "/admin/marketing" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`hidden lg:flex flex-col border-r border-border bg-card transition-all ${collapsed ? "w-16" : "w-60"}`}>
        <div className="p-4 border-b border-border flex items-center justify-between">
          {!collapsed && <Logo size="sm" />}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 hover:bg-muted rounded-lg"><ChevronLeft className={`w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}`} /></button>
        </div>
        <nav className="flex-1 p-2 space-y-1">
          {navItems.map(({ label, icon: Icon, href }) => {
            const active = location.pathname === href;
            return (
              <Link key={href} to={href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                <Icon className="w-4 h-4 flex-shrink-0" />
                {!collapsed && <span>{label}</span>}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border">
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">{collapsed ? "🏠" : "← Back to Store"}</Link>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex-1 flex flex-col">
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border bg-card">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 hover:bg-muted rounded-lg"><Menu className="w-5 h-5" /></button>
          <Logo size="sm" />
          <div className="w-9" />
        </div>

        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-foreground/30" onClick={() => setMobileOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-60 bg-card p-4 space-y-1">
              <div className="mb-4 pb-3 border-b border-border"><Logo size="sm" /></div>
              {navItems.map(({ label, icon: Icon, href }) => (
                <Link key={href} to={href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${location.pathname === href ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
                  <Icon className="w-4 h-4" /><span>{label}</span>
                </Link>
              ))}
              <Link to="/" className="block mt-4 pt-3 border-t border-border text-xs text-muted-foreground">← Back to Store</Link>
            </div>
          </div>
        )}

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
