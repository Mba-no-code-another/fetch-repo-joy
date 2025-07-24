import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Truck, Snowflake } from 'lucide-react';

const dairyProducts = [
  {
    id: 1,
    name: 'Fresh Whole Milk',
    farmer: 'Sunrise Dairy Farm',
    price: '$4.99/gallon',
    location: 'Vermont',
    rating: 4.9,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Farm-fresh whole milk from grass-fed cows, delivered daily',
    cold: true
  },
  {
    id: 2,
    name: 'Artisan Cheddar Cheese',
    farmer: 'Mountain View Creamery',
    price: '$12.99/lb',
    location: 'Wisconsin',
    rating: 4.8,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Aged cheddar cheese made with traditional methods',
    cold: true
  },
  {
    id: 3,
    name: 'Organic Greek Yogurt',
    farmer: 'Pure Valley Dairy',
    price: '$6.49/32oz',
    location: 'New York',
    rating: 4.7,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Thick, creamy Greek yogurt made from organic milk',
    cold: true
  },
  {
    id: 4,
    name: 'Farm Butter',
    farmer: 'Golden Meadow Farm',
    price: '$8.99/lb',
    location: 'Pennsylvania',
    rating: 4.6,
    image: '/placeholder.svg',
    inStock: false,
    description: 'Rich, creamy butter churned from fresh cream',
    cold: true
  }
];

const DairyProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fresh Dairy Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the pure taste of farm-fresh dairy products. From creamy milk to artisan cheeses, all sourced from local farms that prioritize animal welfare and quality.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-4 bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 text-blue-700 dark:text-blue-300">
              <Snowflake className="h-5 w-5" />
              <span className="text-sm font-medium">
                All dairy products require refrigerated delivery • Available for same-day delivery within 10 miles
              </span>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">All Dairy</Button>
                <Button variant="outline" size="sm">Milk</Button>
                <Button variant="outline" size="sm">Cheese</Button>
                <Button variant="outline" size="sm">Yogurt</Button>
                <Button variant="outline" size="sm">Organic Only</Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {dairyProducts.length} products found
                </span>
                <select className="px-3 py-2 border border-input rounded-lg bg-background text-foreground">
                  <option>Sort by Price</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Fat Content</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dairyProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.inStock && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Out of Stock
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                        <Snowflake className="h-3 w-3" />
                        Cold Chain
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground ml-1">{product.location}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        by {product.farmer}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <Button 
                          size="sm" 
                          disabled={!product.inStock}
                          className={product.inStock ? '' : 'opacity-50 cursor-not-allowed'}
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </div>

                      {product.inStock && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-blue-600">
                          <Truck className="h-3 w-3" />
                          <span>Refrigerated delivery available</span>
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

export default DairyProducts;