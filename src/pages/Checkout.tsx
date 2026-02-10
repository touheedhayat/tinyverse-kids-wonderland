import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, CreditCard, Truck, Package } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, label: "Shipping", icon: Truck },
  { id: 2, label: "Payment", icon: CreditCard },
  { id: 3, label: "Confirmation", icon: Package },
];

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({ name: "", email: "", phone: "", address: "", city: "", zip: "" });
  const { toast } = useToast();
  const navigate = useNavigate();
  const shipping = cartTotal >= 3000 ? 0 : 250;

  const handlePlaceOrder = () => {
    setStep(3);
    clearCart();
    toast({ title: "Order Placed! 🎉", description: "Thank you for shopping with TinyVerse!" });
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-5xl mb-4">🛒</p>
          <h2 className="font-heading text-xl font-semibold mb-2">Your cart is empty</h2>
          <Link to="/products" className="text-primary hover:underline text-sm">Continue Shopping</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {steps.map(({ id, label, icon: Icon }) => (
            <div key={id} className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${step >= id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {step > id ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
              </div>
              <span className={`text-sm hidden sm:inline ${step >= id ? "font-medium" : "text-muted-foreground"}`}>{label}</span>
              {id < 3 && <div className={`w-12 h-0.5 ${step > id ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="shipping" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-heading text-xl font-bold mb-6">Shipping Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Full Name", type: "text", full: true },
                  { key: "email", label: "Email", type: "email" },
                  { key: "phone", label: "Phone", type: "tel" },
                  { key: "address", label: "Address", type: "text", full: true },
                  { key: "city", label: "City", type: "text" },
                  { key: "zip", label: "Zip Code", type: "text" },
                ].map(field => (
                  <div key={field.key} className={field.full ? "md:col-span-2" : ""}>
                    <label className="text-sm font-medium mb-1.5 block">{field.label}</label>
                    <input
                      type={field.type}
                      value={(shippingInfo as any)[field.key]}
                      onChange={e => setShippingInfo(prev => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                      required
                    />
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-heading font-semibold mt-6 hover:opacity-90 transition-opacity">
                Continue to Payment
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="font-heading text-xl font-bold mb-6">Payment Method</h2>
                <div className="space-y-3">
                  {["Cash on Delivery", "JazzCash", "EasyPaisa", "Credit/Debit Card"].map(method => (
                    <label key={method} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 cursor-pointer transition-colors">
                      <input type="radio" name="payment" defaultChecked={method === "Cash on Delivery"} className="accent-primary" />
                      <span className="text-sm font-medium">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Order summary */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-heading font-semibold mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  {cart.map(item => (
                    <div key={`${item.product.id}-${item.size}`} className="flex justify-between">
                      <span className="text-muted-foreground">{item.product.name} × {item.quantity}</span>
                      <span>Rs. {((item.product.offerPrice || item.product.price) * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `Rs. ${shipping}`}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-base pt-1">
                    <span>Total</span>
                    <span>Rs. {(cartTotal + shipping).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="px-6 py-3.5 rounded-lg border border-border font-medium hover:bg-muted transition-colors">Back</button>
                <button onClick={handlePlaceOrder} className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity">Place Order</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="confirmation" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 bg-card rounded-xl border border-border p-8">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-2">Order Confirmed! 🎉</h2>
              <p className="text-muted-foreground mb-1">Order #ORD-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
              <p className="text-sm text-muted-foreground mb-6">We'll send you a confirmation email shortly.</p>
              <Link to="/products" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Continue Shopping
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
