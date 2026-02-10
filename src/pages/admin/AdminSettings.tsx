import { useToast } from "@/hooks/use-toast";

const AdminSettings = () => {
  const { toast } = useToast();
  const handleSave = () => toast({ title: "Settings Saved ✨", description: "Your store settings have been updated." });

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="font-heading text-2xl font-bold">Settings</h1>

      <div className="bg-card rounded-xl border border-border p-6 space-y-5">
        <h3 className="font-heading font-semibold">Store Information</h3>
        {[{ label: "Store Name", value: "TinyVerse" }, { label: "Email", value: "hello@tinyverse.pk" }, { label: "Phone", value: "+92 300 1234567" }, { label: "Address", value: "Lahore, Pakistan" }].map(f => (
          <div key={f.label}>
            <label className="text-sm font-medium mb-1.5 block">{f.label}</label>
            <input type="text" defaultValue={f.value} className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border p-6 space-y-5">
        <h3 className="font-heading font-semibold">Tax & Shipping</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Tax Rate (%)</label>
            <input type="number" defaultValue="0" className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Free Shipping Threshold</label>
            <input type="number" defaultValue="3000" className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Flat Shipping Rate</label>
            <input type="number" defaultValue="250" className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Currency</label>
            <input type="text" defaultValue="PKR" className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 space-y-5">
        <h3 className="font-heading font-semibold">Payment Methods</h3>
        {["Cash on Delivery", "JazzCash", "EasyPaisa", "Credit/Debit Card"].map(method => (
          <label key={method} className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="accent-primary w-4 h-4" />
            <span className="text-sm">{method}</span>
          </label>
        ))}
      </div>

      <button onClick={handleSave} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">
        Save Settings
      </button>
    </div>
  );
};

export default AdminSettings;
