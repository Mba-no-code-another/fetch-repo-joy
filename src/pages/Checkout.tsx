import React, { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { MapPin, Package } from 'lucide-react';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  const pickupLocations = [
    'Delhi NCR - Pickup Center A, Sector 18, Noida',
    'Mumbai - Pickup Center B, Andheri West',
    'Pune - Pickup Center C, Koregaon Park',
    'Bangalore - Pickup Center D, Indiranagar'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: 'Error',
        description: 'Please sign in to place an order.',
        variant: 'destructive',
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: 'Error',
        description: 'Your cart is empty.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.name || !formData.phone) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    if (deliveryType === 'delivery' && (!formData.address || !formData.city || !formData.state || !formData.zip)) {
      toast({
        title: 'Error',
        description: 'Please fill in all delivery address fields.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        user_id: user.id,
        total_amount: getTotalPrice(),
        status: 'pending',
        payment_method: 'cod',
        delivery_type: deliveryType,
        delivery_address: deliveryType === 'delivery' ? {
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip
        } : {
          name: formData.name,
          phone: formData.phone,
          pickup_location: pickupLocations[0] // Default to first location
        },
        items: items.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          farmer: item.farmer
        })),
        notes: formData.notes,
        order_date: new Date().toISOString()
      };

      const { error } = await supabase
        .from('orders')
        .insert([orderData]);

      if (error) {
        console.error('Error creating order:', error);
        toast({
          title: 'Error',
          description: 'Failed to place order. Please try again.',
          variant: 'destructive',
        });
        return;
      }

      clearCart();
      toast({
        title: 'Order Placed Successfully!',
        description: `Your order has been placed. You will pay ₹${getTotalPrice().toFixed(2)} on ${deliveryType === 'pickup' ? 'pickup' : 'delivery'}.`,
      });
      
      navigate('/my-orders');
    } catch (error) {
      console.error('Error placing order:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
            <p className="text-muted-foreground">Complete your order</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={deliveryType} onValueChange={(value) => setDeliveryType(value as 'pickup' | 'delivery')}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <Package className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium">Self Pickup</div>
                              <div className="text-sm text-muted-foreground">Pick up from nearest location - Free</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium">Home Delivery</div>
                              <div className="text-sm text-muted-foreground">Delivered to your doorstep</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Pickup Location or Delivery Address */}
                {deliveryType === 'pickup' ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Pickup Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pickupLocations.map((location, index) => (
                          <div key={index} className="p-3 border rounded-lg bg-muted/50">
                            <div className="font-medium">{location}</div>
                            <div className="text-sm text-muted-foreground">Open: 9:00 AM - 7:00 PM</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required={deliveryType === 'delivery'}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required={deliveryType === 'delivery'}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required={deliveryType === 'delivery'}
                          />
                        </div>
                        <div>
                          <Label htmlFor="zip">ZIP Code *</Label>
                          <Input
                            id="zip"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            required={deliveryType === 'delivery'}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Order Notes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Notes (Optional)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      name="notes"
                      placeholder="Any special instructions for your order..."
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name} × {item.quantity}</span>
                          <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery</span>
                        <span>{deliveryType === 'pickup' ? 'Free' : 'Free'}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>₹{getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={loading}
                      >
                        {loading ? 'Placing Order...' : 'Place Order (COD)'}
                      </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      <p>Cash on Delivery</p>
                      <p>Pay when you receive your order</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;