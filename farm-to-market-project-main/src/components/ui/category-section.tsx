import React from 'react';
import { Card, CardContent } from './card';
import vegetablesIcon from '@/assets/vegetables-icon.jpg';
import fruitsIcon from '@/assets/fruits-icon.jpg';
import grainsIcon from '@/assets/grains-icon.jpg';

const categories = [
  {
    id: 1,
    name: 'Fresh Vegetables',
    description: 'Organic leafy greens, tomatoes, peppers, and seasonal vegetables',
    image: vegetablesIcon,
    productCount: 150
  },
  {
    id: 2,
    name: 'Seasonal Fruits',
    description: 'Tree-fresh apples, citrus, berries, and tropical fruits',
    image: fruitsIcon,
    productCount: 120
  },
  {
    id: 3,
    name: 'Grains & Pulses',
    description: 'Rice, wheat, lentils, and traditional grains',
    image: grainsIcon,
    productCount: 80
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fresh, locally-sourced produce directly from farmers in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer hover:shadow-medium transition-all duration-300 bg-card hover:bg-card/80 border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount}+ items
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                <div className="text-primary font-medium group-hover:text-primary/80 transition-colors">
                  Browse {category.name} →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;