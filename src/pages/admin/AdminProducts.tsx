import { useState } from "react";
import { products } from "@/data/products";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

const AdminProducts = () => {
  const [search, setSearch] = useState("");
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold">Products</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="p-4 border-b border-border">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." className="w-full bg-muted rounded-lg pl-9 pr-4 py-2 text-sm outline-none" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-medium text-muted-foreground">Product</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Category</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Price</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Stock</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(product => (
                <tr key={product.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ background: product.images[0] }} />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{product.category}</td>
                  <td className="p-4">
                    {product.offerPrice ? (
                      <div>
                        <span className="font-medium">Rs. {product.offerPrice.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground line-through ml-1">Rs. {product.price.toLocaleString()}</span>
                      </div>
                    ) : (
                      <span>Rs. {product.price.toLocaleString()}</span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={product.stock < 20 ? "text-destructive font-medium" : ""}>{product.stock}</span>
                  </td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${product.stock > 0 ? "bg-accent/50 text-accent-foreground" : "bg-destructive/10 text-destructive"}`}>
                      {product.stock > 0 ? "Active" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
