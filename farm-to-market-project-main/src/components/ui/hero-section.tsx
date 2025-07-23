import React from 'react';
import { Button } from './button';
import { ArrowRight, Leaf, Users, Package } from 'lucide-react';
import heroImage from '@/assets/hero-farm.jpg';

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Rural Farm Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Connecting 
              <span className="text-primary block">Farmers</span>
              <span className="text-earth-brown">Directly to You</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Fresh farm produce delivered through direct pickup at collection centers. 
              Support local farmers while getting the freshest ingredients for your table.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="group">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Farmers
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">250+</div>
                <div className="text-sm text-muted-foreground">Farmers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;