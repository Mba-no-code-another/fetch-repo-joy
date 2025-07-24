import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - For Customers */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Fresh Produce at Your Fingertips
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Download our app and get access to the freshest farm produce delivered straight to your door. Join thousands of happy customers today.
              </p>
              <div className="space-y-4">
                <Link to="/start-shopping">
                  <Button size="lg" className="w-full lg:w-auto bg-primary hover:bg-primary/90">
                    Start Shopping
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>500+ Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Same Day Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - For Partners */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mb-6">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Partner with Us
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Are you a farmer or supplier? Join our platform and reach thousands of customers looking for fresh, quality produce.
              </p>
              <div className="space-y-4">
                <Link to="/become-partner">
                  <Button size="lg" variant="outline" className="w-full lg:w-auto border-2 hover:bg-secondary/10">
                    Become a Partner
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Easy Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Higher Profits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Newsletter Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Stay Updated with Fresh Deals
            </h4>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and never miss out on seasonal offers and new arrivals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;