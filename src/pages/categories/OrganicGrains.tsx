import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Truck } from 'lucide-react';

const grains = [
  {
    id: 1,
    name: 'Organic Basmati Rice',
    farmer: 'Punjab Golden Fields',
    price: '₹80/kg',
    location: 'Punjab, India',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Premium organic basmati rice with authentic aroma and long grains'
  },
  {
    id: 2,
    name: 'Whole Wheat Atta',
    farmer: 'Haryana Grain Co-op',
    price: '₹45/kg',
    location: 'Haryana, India',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Stone-ground whole wheat flour perfect for rotis and parathas'
  },
  {
    id: 3,
    name: 'Yellow Moong Dal',
    farmer: 'Rajasthan Pulses',
    price: '₹90/kg',
    location: 'Rajasthan, India',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'High-quality yellow moong dal, protein-rich and easy to cook'
  },
  {
    id: 4,
    name: 'Organic Bajra (Pearl Millet)',
    farmer: 'Gujarat Millets Farm',
    price: '₹50/kg',
    location: 'Gujarat, India',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1594736797933-d0400bcc2cda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Nutritious bajra flour, perfect for healthy Indian breads'
  },
  {
    id: 5,
    name: 'Jowar Flour (Sorghum)',
    farmer: 'Maharashtra Grains',
    price: '₹35/500g',
    location: 'Maharashtra, India',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Gluten-free jowar flour, ideal for traditional Indian flatbreads'
  },
  {
    id: 6,
    name: 'Chana Dal (Split Chickpeas)',
    farmer: 'Madhya Pradesh Legumes',
    price: '₹85/kg',
    location: 'Madhya Pradesh, India',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1610564558732-a36c988cc01e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: false,
    description: 'Premium chana dal, essential for Indian cooking and high in protein'
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
              Discover wholesome, organic grains and pulses that form the foundation of Indian cuisine. From premium basmati rice to traditional millets, all grown with care.
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