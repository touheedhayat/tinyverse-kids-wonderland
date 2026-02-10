import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ArrowLeft } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CartPage = () => {
  const { cart, cartTotal, updateCartQuantity, removeFromCart, clearCart } = useStore();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const { toast } = useToast();

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "WELCOME10") {
      setDiscount(cartTotal * 0.1);
      toast({ title: "Coupon Applied! 🎉", description: "10% discount has been applied." });
    } else if (couponCode.toUpperCase() === "WINTER500") {
      setDiscount(500);
      toast({ title: "Coupon Applied! 🎉", description: "Rs. 500 discount has been applied." });
    } else {
      toast({ title: "Invalid Coupon", description: "Please enter a valid coupon code.", variant: "destructive" });
    }
  };

  const shipping = cartTotal >= 3000 ? 0 : 250;
  const finalTotal = cartTotal - discount + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/products" className="p-2 hover:bg-muted rounded-lg"><ArrowLeft className="w-5 h-5" /></Link>
          <h1 className="font-heading text-2xl md:text-3xl font-bold">Shopping Bag ({cart.length})</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🛍️</p>
            <h2 className="font-heading text-xl font-semibold mb-2">Your bag is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet</p>
            <Link to="/products" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">Start Shopping</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-24 h-28 rounded-lg flex-shrink-0 flex items-center justify-center text-xl font-heading font-bold text-foreground/10" style={{ background: item.product.images[0] }}>
                    {item.product.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-heading font-semibold hover:text-primary transition-colors">{item.product.name}</Link>
                        <p className="text-sm text-muted-foreground mt-0.5">{item.size} / {item.color}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id, item.size, item.color)} className="p-1.5 text-destructive hover:bg-destructive/10 rounded transition-colors h-fit">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-lg">
                        <button onClick={() => updateCartQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="p-2 hover:bg-muted transition-colors"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="p-2 hover:bg-muted transition-colors"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <span className="font-semibold">Rs. {((item.product.offerPrice || item.product.price) * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-card rounded-xl border border-border p-6 h-fit sticky top-24">
              <h3 className="font-heading font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>Rs. {cartTotal.toLocaleString()}</span></div>
                {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>-Rs. {discount.toLocaleString()}</span></div>}
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "FREE" : `Rs. ${shipping}`}</span></div>
                <div className="border-t border-border pt-3 flex justify-between font-semibold text-base">
                  <span>Total</span><span>Rs. {finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Coupon */}
              <div className="mt-4">
                <div className="flex gap-2">
                  <input type="text" value={couponCode} onChange={e => setCouponCode(e.target.value)} placeholder="Coupon code" className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm outline-none" />
                  <button onClick={handleApplyCoupon} className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors">Apply</button>
                </div>
              </div>

              <Link to="/checkout" className="block w-full bg-primary text-primary-foreground text-center py-3.5 rounded-lg font-heading font-semibold mt-5 hover:opacity-90 transition-opacity">
                Proceed to Checkout
              </Link>
              {shipping > 0 && <p className="text-xs text-muted-foreground text-center mt-2">Add Rs. {(3000 - cartTotal).toLocaleString()} more for free shipping</p>}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
