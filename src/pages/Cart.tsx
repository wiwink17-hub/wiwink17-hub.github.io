import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Discover our beautiful collection and find your perfect piece
          </p>
          <Link to="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-12 animate-fade-in">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 bg-card border border-border rounded-sm animate-fade-in"
              >
                <div className="w-32 h-32 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.color} / {item.size}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center border border-border hover:bg-muted transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center border border-border hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card border border-border rounded-sm p-6 sticky top-28 animate-fade-in-up">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {subtotal > 0 && subtotal < 200 && (
                  <p className="text-xs text-accent">
                    Add ${(200 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full mb-4">
                Proceed to Checkout
              </Button>
              <Link to="/shop">
                <Button variant="outline" size="lg" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
