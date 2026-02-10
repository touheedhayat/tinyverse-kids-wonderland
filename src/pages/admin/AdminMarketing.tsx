import { banners, coupons } from "@/data/products";
import { Plus, Edit, Trash2 } from "lucide-react";

const AdminMarketing = () => {
  return (
    <div className="space-y-8">
      <h1 className="font-heading text-2xl font-bold">Marketing</h1>

      {/* Banners */}
      <div className="bg-card rounded-xl border border-border p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold">Homepage Banners</h3>
          <button className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 hover:opacity-90"><Plus className="w-3.5 h-3.5" /> Add Banner</button>
        </div>
        <div className="space-y-3">
          {banners.map(banner => (
            <div key={banner.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-16 h-10 rounded-md" style={{ background: banner.gradient }} />
                <div>
                  <p className="text-sm font-medium">{banner.title}</p>
                  <p className="text-xs text-muted-foreground">{banner.subtitle.slice(0, 50)}...</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${banner.active ? "bg-accent/50 text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{banner.active ? "Active" : "Inactive"}</span>
                <button className="p-1.5 hover:bg-muted rounded"><Edit className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 hover:bg-destructive/10 text-destructive rounded"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coupons */}
      <div className="bg-card rounded-xl border border-border p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold">Coupons</h3>
          <button className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 hover:opacity-90"><Plus className="w-3.5 h-3.5" /> Create Coupon</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border">
              <th className="text-left p-3 font-medium text-muted-foreground">Code</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Type</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Value</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Min Order</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Usage</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
            </tr></thead>
            <tbody>
              {coupons.map(coupon => (
                <tr key={coupon.id} className="border-b border-border last:border-0">
                  <td className="p-3 font-mono font-medium">{coupon.code}</td>
                  <td className="p-3 capitalize text-muted-foreground">{coupon.type}</td>
                  <td className="p-3">{coupon.type === "percentage" ? `${coupon.value}%` : `Rs. ${coupon.value}`}</td>
                  <td className="p-3">Rs. {coupon.minOrder.toLocaleString()}</td>
                  <td className="p-3">{coupon.usageCount} uses</td>
                  <td className="p-3"><span className={`text-xs px-2 py-0.5 rounded-full ${coupon.active ? "bg-accent/50 text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{coupon.active ? "Active" : "Expired"}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminMarketing;
