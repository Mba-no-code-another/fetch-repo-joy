import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Truck } from 'lucide-react';

const grains = [
  {
    id: 1,
    name: 'Organic Brown Rice',
    farmer: 'Golden Fields Farm',
    price: '$5.99/5lb',
    location: 'Arkansas',
    rating: 4.8,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Nutrient-rich brown rice grown using sustainable farming methods'
  },
  {
    id: 2,
    name: 'Ancient Quinoa',
    farmer: 'Mountain Harvest Co.',
    price: '$8.99/2lb',
    location: 'Colorado',
    rating: 4.9,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Premium quinoa variety packed with protein and minerals'
  },
  {
    id: 3,
    name: 'Organic Wheat Flour',
    farmer: 'Prairie Wind Farm',
    price: '$4.49/5lb',
    location: 'Kansas',
    rating: 4.7,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Stone-ground whole wheat flour from heritage wheat varieties'
  },
  {
    id: 4,
    name: 'Red Lentils',
    farmer: 'Valley Legumes',
    price: '$6.99/2lb',
    location: 'Montana',
    rating: 4.6,
    image: '/placeholder.svg',
    inStock: false,
    description: 'High-protein red lentils perfect for soups and curries'
  }
];

const OrganicGrains = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-amber-500/10 to-yellow-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Organic Grains & Pulses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover wholesome, organic grains and pulses that form the foundation of healthy meals. From ancient grains to traditional staples, all grown with care.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">All Grains</Button>
                <Button variant="outline" size="sm">Rice</Button>
                <Button variant="outline" size="sm">Wheat</Button>
                <Button variant="outline" size="sm">Legumes</Button>
                <Button variant="outline" size="sm">Ancient Grains</Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {grains.length} products found
                </span>
                <select className="px-3 py-2 border border-input rounded-lg bg-background text-foreground">
                  <option>Sort by Price</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Protein Content</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {grains.map((grain) => (
                <Card key={grain.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={grain.image} 
                        alt={grain.name}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {!grain.inStock && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Out of Stock
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        Organic
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {grain.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {grain.description}
                      </p>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-muted-foreground ml-1">{grain.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground ml-1">{grain.location}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        by {grain.farmer}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{grain.price}</span>
                        <Button 
                          size="sm" 
                          disabled={!grain.inStock}
                          className={grain.inStock ? '' : 'opacity-50 cursor-not-allowed'}
                        >
                          {grain.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </div>

                      {grain.inStock && (
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

export default OrganicGrains;