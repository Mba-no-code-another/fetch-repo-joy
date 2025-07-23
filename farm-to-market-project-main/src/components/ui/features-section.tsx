import React from 'react';
import { Card, CardContent } from './card';
import { MapPin, Clock, Shield, Heart, Star, Truck } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Direct Pickup',
    description: 'Collect your fresh produce at convenient pickup centers near you.'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Fresh Daily',
    description: 'Products harvested within 24 hours for maximum freshness and nutrition.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Verified Farmers',
    description: 'All farmers are verified and follow sustainable farming practices.'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Support Local',
    description: 'Support rural communities and local farmers directly.'
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: 'Quality Assured',
    description: 'Premium quality produce with transparent pricing.'
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'No Delivery Hassle',
    description: 'Simple pickup model eliminates delivery complications.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose FarmConnect?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A revolutionary platform that bridges the gap between rural farmers and urban consumers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;