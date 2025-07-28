import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Truck } from 'lucide-react';

const vegetables = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    farmer: 'Nashik Fresh Farms',
    price: '₹30/kg',
    location: 'Maharashtra, India',
    rating: 4.8,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Fresh, vine-ripened organic tomatoes perfect for Indian cooking'
  },
  {
    id: 2,
    name: 'Fresh Spinach (Palak)',
    farmer: 'Green Fields Co-op',
    price: '₹15/250g',
    location: 'Punjab, India',
    rating: 4.9,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Crisp, nutrient-rich spinach leaves perfect for palak dishes'
  },
  {
    id: 3,
    name: 'Bell Peppers (Shimla Mirch)',
    farmer: 'Valley Vegetables',
    price: '₹35/250g',
    location: 'Himachal Pradesh, India',
    rating: 4.7,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Colorful mix of red, yellow, and green bell peppers from Shimla'
  },
  {
    id: 4,
    name: 'Organic Carrots (Gajar)',
    farmer: 'Punjab Organic Farms',
    price: '₹25/kg',
    location: 'Punjab, India',
    rating: 4.6,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Sweet, crunchy organic carrots grown in fertile Punjab soil'
  },
  {
    id: 5,
    name: 'Brinjal (Baingan)',
    farmer: 'South Indian Farms',
    price: '₹20/500g',
    location: 'Karnataka, India',
    rating: 4.5,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Fresh purple brinjals perfect for bhartha and curries'
  },
  {
    id: 6,
    name: 'Cauliflower (Gobi)',
    farmer: 'North Plains Collective',
    price: '₹25/piece',
    location: 'Haryana, India',
    rating: 4.7,
    image: '/placeholder.svg',
    inStock: false,
    description: 'Fresh, white cauliflower heads perfect for gobi dishes'
  }
];

const FreshVegetables = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-green-500/10 to-green-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fresh Vegetables
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the freshest vegetables from trusted farmers across India. From leafy greens to seasonal vegetables, we have everything you need for authentic Indian cooking.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">All Vegetables</Button>
                <Button variant="outline" size="sm">Leafy Greens</Button>
                <Button variant="outline" size="sm">Root Vegetables</Button>
                <Button variant="outline" size="sm">Organic Only</Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {vegetables.length} products found
                </span>
                <select className="px-3 py-2 border border-input rounded-lg bg-background text-foreground">
                  <option>Sort by Price</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Distance</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {vegetables.map((vegetable) => (
                <Card key={vegetable.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={vegetable.image} 
                        alt={vegetable.name}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {!vegetable.inStock && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Out of Stock
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        Fresh Today
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {vegetable.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {vegetable.description}
                      </p>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-muted-foreground ml-1">{vegetable.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground ml-1">{vegetable.location}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        by {vegetable.farmer}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{vegetable.price}</span>
                        <Button 
                          size="sm" 
                          disabled={!vegetable.inStock}
                          className={vegetable.inStock ? '' : 'opacity-50 cursor-not-allowed'}
                        >
                          {vegetable.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </div>

                      {vegetable.inStock && (
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

export default FreshVegetables;