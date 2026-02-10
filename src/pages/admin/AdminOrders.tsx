import { useState } from "react";
import { orders } from "@/data/products";
import { Search, Eye } from "lucide-react";

const statusColors: Record<string, string> = {
  pending: "bg-muted text-muted-foreground",
  processing: "bg-secondary/50 text-secondary-foreground",
  shipped: "bg-baby-blue/30 text-foreground",
  delivered: "bg-accent/50 text-accent-foreground",
  cancelled: "bg-destructive/10 text-destructive",
};

const AdminOrders = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const filtered = orders.filter(o => (filter === "all" || o.status === filter) && (o.id.toLowerCase().includes(search.toLowerCase()) || o.customerName.toLowerCase().includes(search.toLowerCase())));
  const statuses = ["all", "pending", "processing", "shipped", "delivered", "cancelled"];

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold">Orders</h1>

      <div className="flex flex-wrap gap-2">
        {statuses.map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${filter === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            {s} {s !== "all" && `(${orders.filter(o => o.status === s).length})`}
          </button>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="p-4 border-b border-border">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search orders..." className="w-full bg-muted rounded-lg pl-9 pr-4 py-2 text-sm outline-none" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-medium text-muted-foreground">Order ID</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Customer</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Total</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(order => (
                <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">{order.customerName}</td>
                  <td className="p-4 text-muted-foreground">{order.date}</td>
                  <td className="p-4">Rs. {order.total.toLocaleString()}</td>
                  <td className="p-4"><span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[order.status]}`}>{order.status}</span></td>
                  <td className="p-4 text-right"><button className="p-2 hover:bg-muted rounded-lg"><Eye className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
