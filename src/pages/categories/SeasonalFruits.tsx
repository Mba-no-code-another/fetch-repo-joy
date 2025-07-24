import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Truck } from 'lucide-react';

const fruits = [
  {
    id: 1,
    name: 'Organic Apples',
    farmer: 'Orchard Valley',
    price: '$3.99/lb',
    location: 'Washington',
    rating: 4.9,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Crisp, sweet organic apples perfect for snacking or baking'
  },
  {
    id: 2,
    name: 'Fresh Strawberries',
    farmer: 'Berry Fields Farm',
    price: '$6.99/pint',
    location: 'California',
    rating: 4.8,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Juicy, locally-grown strawberries picked at peak ripeness'
  },
  {
    id: 3,
    name: 'Seasonal Peaches',
    farmer: 'Sunset Orchards',
    price: '$4.49/lb',
    location: 'Georgia',
    rating: 4.7,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Sweet, fuzzy peaches bursting with summer flavor'
  },
  {
    id: 4,
    name: 'Fresh Blueberries',
    farmer: 'Mountain Berry Co.',
    price: '$7.99/pint',
    location: 'Maine',
    rating: 4.9,
    image: '/placeholder.svg',
    inStock: false,
    description: 'Antioxidant-rich wild blueberries from mountain farms'
  }
];

const SeasonalFruits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Seasonal Fruits
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enjoy nature's sweetest offerings with our selection of seasonal fruits. From crisp apples to juicy berries, discover the perfect fruits for every season.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">All Fruits</Button>
                <Button variant="outline" size="sm">Berries</Button>
                <Button variant="outline" size="sm">Stone Fruits</Button>
                <Button variant="outline" size="sm">Citrus</Button>
                <Button variant="outline" size="sm">Organic Only</Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {fruits.length} products found
                </span>
                <select className="px-3 py-2 border border-input rounded-lg bg-background text-foreground">
                  <option>Sort by Price</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Season</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {fruits.map((fruit) => (
                <Card key={fruit.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={fruit.image} 
                        alt={fruit.name}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {!fruit.inStock && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Out of Season
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        Peak Season
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {fruit.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {fruit.description}
                      </p>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-muted-foreground ml-1">{fruit.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground ml-1">{fruit.location}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        by {fruit.farmer}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{fruit.price}</span>
                        <Button 
                          size="sm" 
                          disabled={!fruit.inStock}
                          className={fruit.inStock ? '' : 'opacity-50 cursor-not-allowed'}
                        >
                          {fruit.inStock ? 'Add to Cart' : 'Out of Season'}
                        </Button>
                      </div>

                      {fruit.inStock && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                          <Truck className="h-3 w-3" />
                          <span>Free delivery within 5 miles</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SeasonalFruits;