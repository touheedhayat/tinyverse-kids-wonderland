import { customers } from "@/data/products";
import { Search } from "lucide-react";
import { useState } from "react";

const AdminCustomers = () => {
  const [search, setSearch] = useState("");
  const filtered = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold">Customers</h1>
      <div className="bg-card rounded-xl border border-border">
        <div className="p-4 border-b border-border">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search customers..." className="w-full bg-muted rounded-lg pl-9 pr-4 py-2 text-sm outline-none" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border">
              <th className="text-left p-4 font-medium text-muted-foreground">Customer</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Orders</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Total Spent</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Tags</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Joined</th>
            </tr></thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="p-4">
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.email}</p>
                    </div>
                  </td>
                  <td className="p-4">{c.orders}</td>
                  <td className="p-4">Rs. {c.totalSpent.toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex gap-1">{c.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{tag}</span>
                    ))}</div>
                  </td>
                  <td className="p-4 text-muted-foreground">{c.joinedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
