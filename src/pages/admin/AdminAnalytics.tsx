import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { products } from "@/data/products";

const monthlyData = [
  { name: "Sep", revenue: 32000 }, { name: "Oct", revenue: 45000 }, { name: "Nov", revenue: 52000 },
  { name: "Dec", revenue: 78000 }, { name: "Jan", revenue: 48000 }, { name: "Feb", revenue: 41000 },
];

const categoryData = [
  { name: "Rompers", value: 35 }, { name: "Dresses", value: 25 }, { name: "Tops", value: 20 },
  { name: "Bottoms", value: 12 }, { name: "Sleepwear", value: 8 },
];

const COLORS = ["hsl(346, 65%, 60%)", "hsl(270, 40%, 75%)", "hsl(160, 40%, 65%)", "hsl(200, 65%, 70%)", "hsl(20, 80%, 75%)"];

const AdminAnalytics = () => {
  const topProducts = [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 5);

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold">Analytics</h1>

      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-heading font-semibold mb-4">Revenue Trend</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" fontSize={12} stroke="hsl(var(--muted-foreground))" />
              <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold mb-4">Sales by Category</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} fontSize={11}>
                  {categoryData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold mb-4">Top Products</h3>
          <div className="space-y-3">
            {topProducts.map((p, i) => (
              <div key={p.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-muted-foreground w-5">#{i + 1}</span>
                  <span className="text-sm font-medium">{p.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{p.reviewCount} sales</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
