import React from 'react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate('/signin', { state: { from: '/cart' } });
      return;
    }
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Add some fresh products to your cart to get started!
                </p>
                <Button onClick={() => navigate('/products')}>
                  Start Shopping
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">{getTotalItems()} items in your cart</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">by {item.farmer}</p>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <p className="text-lg font-bold text-primary mt-1">{item.priceText}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({getTotalItems()} items)</span>
                    <span className="font-medium">₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button onClick={handleCheckout} className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Payment: Cash on Delivery (COD)</p>
                    <p>Choose pickup or delivery at checkout</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;