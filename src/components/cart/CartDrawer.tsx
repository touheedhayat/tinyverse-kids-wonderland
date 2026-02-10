import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const CartDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { cart, cartTotal, updateCartQuantity, removeFromCart } = useStore();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-lg">Shopping Bag ({cart.length})</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <span className="text-3xl">🛍️</span>
            </div>
            <p className="text-muted-foreground">Your bag is empty</p>
            <button onClick={onClose} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-16 h-20 rounded-md flex-shrink-0 flex items-center justify-center text-xs font-medium text-muted-foreground" style={{ background: item.product.images[0] }}>
                    {item.product.name.slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.size} / {item.color}</p>
                    <p className="text-sm font-semibold mt-1">Rs. {(item.product.offerPrice || item.product.price).toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateCartQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeFromCart(item.product.id, item.size, item.color)} className="ml-auto p-1.5 text-destructive hover:bg-destructive/10 rounded transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-semibold">Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <Link to="/checkout" onClick={onClose} className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Checkout
              </Link>
              <button onClick={onClose} className="block w-full text-center py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
