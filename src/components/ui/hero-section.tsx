import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Users, ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Connect{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Farmers
            </span>
            {' '}to{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Markets
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between fresh farm produce and consumers with our innovative marketplace platform
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Fresh Produce</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Direct from Farmers</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <ShoppingCart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Easy Ordering</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300">
              Become a Partner
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Registered Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;