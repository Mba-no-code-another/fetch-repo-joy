import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Truck, Clock, Shield, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const StartShopping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary-glow/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Start Your Fresh Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of customers who trust us for the freshest, locally-sourced produce. Your healthy lifestyle starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="min-w-[200px]">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Browse Products
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Download App
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting fresh, local produce delivered to your door is easier than ever
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">1. Browse & Select</h3>
                  <p className="text-muted-foreground">
                    Browse our wide selection of fresh produce from local farmers. Filter by category, location, or dietary preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">2. Schedule Delivery</h3>
                  <p className="text-muted-foreground">
                    Choose your preferred delivery time. We offer same-day delivery for orders placed before 2 PM.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">3. Enjoy Fresh Produce</h3>
                  <p className="text-muted-foreground">
                    Receive your fresh produce at your doorstep, carefully packed and delivered with care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose FarmToMarket?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're more than just a delivery service - we're your partner in healthy living
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fresh & Healthy</h3>
                  <p className="text-muted-foreground">
                    All our produce is harvested at peak freshness and delivered within 24 hours of picking.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Support Local Farmers</h3>
                  <p className="text-muted-foreground">
                    Every purchase directly supports local farmers and sustainable farming practices in your community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Quality Guarantee</h3>
                  <p className="text-muted-foreground">
                    Not satisfied with your order? We offer a 100% satisfaction guarantee with easy returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Truck className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Same-day and next-day delivery options available. Free delivery on orders over $50.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    Schedule deliveries that work with your lifestyle. Weekly subscriptions available.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Seasonal Variety</h3>
                  <p className="text-muted-foreground">
                    Discover new seasonal produce and recipes to keep your meals exciting year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join over 10,000 satisfied customers who choose fresh, local produce every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="min-w-[200px]">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Start Shopping Now
                </Button>
              </Link>
              <Link to="/categories/fresh-vegetables">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  Browse Categories
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free delivery on your first order over $30 • No subscription required
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StartShopping;