import React from 'react';
import { Button } from './button';
import { ArrowRight, Leaf } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-medium">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 mx-auto">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Experience Farm-Fresh Goodness?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose fresh, direct-from-farm produce. 
            Start your journey towards healthier eating today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Shopping Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Become a Farmer Partner
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">24hrs</div>
                <div className="text-sm text-muted-foreground">Harvest to Pickup</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Organic</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Delivery Fees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;