import { products, orders, customers } from "@/data/products";
import { Package, ShoppingCart, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Mon", sales: 4200 }, { name: "Tue", sales: 3800 }, { name: "Wed", sales: 5100 },
  { name: "Thu", sales: 4600 }, { name: "Fri", sales: 6200 }, { name: "Sat", sales: 7800 }, { name: "Sun", sales: 5400 },
];

const stats = [
  { label: "Total Revenue", value: "Rs. 48,500", icon: TrendingUp, color: "bg-primary/10 text-primary" },
  { label: "Orders", value: orders.length.toString(), icon: ShoppingCart, color: "bg-secondary/50 text-secondary-foreground" },
  { label: "Products", value: products.length.toString(), icon: Package, color: "bg-accent/50 text-accent-foreground" },
  { label: "Customers", value: customers.length.toString(), icon: Users, color: "bg-muted text-muted-foreground" },
];

const AdminDashboard = () => {
  const lowStock = products.filter(p => p.stock < 20);

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-card rounded-xl border border-border p-5">
            <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-3`}><Icon className="w-5 h-5" /></div>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-heading font-semibold mb-4">Weekly Sales</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" fontSize={12} stroke="hsl(var(--muted-foreground))" />
              <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
              <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {orders.slice(0, 4).map(order => (
              <div key={order.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium">{order.id}</p>
                  <p className="text-xs text-muted-foreground">{order.customerName}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Rs. {order.total.toLocaleString()}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${order.status === "delivered" ? "bg-accent/50 text-accent-foreground" : order.status === "shipped" ? "bg-secondary/50 text-secondary-foreground" : order.status === "cancelled" ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-destructive" /> Low Stock Alerts
          </h3>
          <div className="space-y-3">
            {lowStock.map(product => (
              <div key={product.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <p className="text-sm font-medium">{product.name}</p>
                <span className="text-xs font-medium text-destructive">{product.stock} left</span>
              </div>
            ))}
            {lowStock.length === 0 && <p className="text-sm text-muted-foreground">All products are well stocked!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
