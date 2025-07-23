import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Shield, Leaf, Clock, Users, Star } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get fresh produce delivered to your doorstep within 24 hours',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every product is carefully inspected for quality and freshness',
      color: 'text-green-600'
    },
    {
      icon: Leaf,
      title: 'Sustainable Farming',
      description: 'Supporting eco-friendly farming practices for a better future',
      color: 'text-emerald-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your queries',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Direct from Farmers',
      description: 'Connect directly with farmers and support local agriculture',
      color: 'text-orange-600'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Hand-picked premium produce from certified organic farms',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose FarmToMarket?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bridge the gap between farmers and consumers with innovative solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Experience Fresh?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
              Join thousands of satisfied customers who trust us for their daily fresh produce needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Shopping Now
              </button>
              <button className="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;