import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Fresh Vegetables',
      description: 'Farm-fresh vegetables delivered daily',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3',
      itemCount: '150+ items'
    },
    {
      id: 2,
      name: 'Seasonal Fruits',
      description: 'Sweet and juicy fruits picked at peak ripeness',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3',
      itemCount: '80+ items'
    },
    {
      id: 3,
      name: 'Organic Grains',
      description: 'Wholesome grains and cereals from certified farms',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3',
      itemCount: '45+ items'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fresh produce from local farmers organized by category for easy shopping
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{category.itemCount}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Explore Category
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;