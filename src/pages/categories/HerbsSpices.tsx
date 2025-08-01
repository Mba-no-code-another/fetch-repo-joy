import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Truck, Leaf } from 'lucide-react';

const herbs = [
  {
    id: 1,
    name: 'Fresh Coriander (Dhania)',
    farmer: 'Mumbai Herb Gardens',
    price: '₹10/100g',
    location: 'Maharashtra, India',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Fresh coriander leaves perfect for garnishing Indian dishes',
    type: 'Fresh Herb'
  },
  {
    id: 2,
    name: 'Fresh Mint (Pudina)',
    farmer: 'Punjab Green Farms',
    price: '₹15/100g',
    location: 'Punjab, India',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1628776098-6b63f01d2e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Aromatic mint leaves ideal for chutneys and beverages',
    type: 'Fresh Herb'
  },
  {
    id: 3,
    name: 'Turmeric Powder (Haldi)',
    farmer: 'Kerala Spice Co-op',
    price: '₹30/100g',
    location: 'Kerala, India',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Pure turmeric powder with high curcumin content',
    type: 'Spice'
  },
  {
    id: 4,
    name: 'Red Chili Powder (Lal Mirch)',
    farmer: 'Andhra Spice Collective',
    price: '₹35/100g',
    location: 'Andhra Pradesh, India',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583088225516-4691bc46fad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Premium red chili powder with authentic heat and flavor',
    type: 'Spice'
  },
  {
    id: 5,
    name: 'Cumin Seeds (Jeera)',
    farmer: 'Rajasthan Spice Traders',
    price: '₹40/100g',
    location: 'Rajasthan, India',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1596040033229-a0b3b1f1e2a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Aromatic cumin seeds essential for Indian tempering',
    type: 'Spice'
  },
  {
    id: 6,
    name: 'Garam Masala Blend',
    farmer: 'Delhi Spice Masters',
    price: '₹50/100g',
    location: 'Delhi, India',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1596040033305-9e1d7c5e4026?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: false,
    description: 'Traditional garam masala blend with perfect balance of spices',
    type: 'Spice Blend'
  }
];

const HerbsSpices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fresh Herbs & Spices
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elevate your Indian cooking with fresh herbs and authentic spices. From fresh coriander to traditional masala blends, add authentic flavors to every meal.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">All Items</Button>
                <Button variant="outline" size="sm">Fresh Herbs</Button>
                <Button variant="outline" size="sm">Dried Spices</Button>
                <Button variant="outline" size="sm">Spice Blends</Button>
                <Button variant="outline" size="sm">Organic Only</Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {herbs.length} products found
                </span>
                <select className="px-3 py-2 border border-input rounded-lg bg-background text-foreground">
                  <option>Sort by Price</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Type</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {herbs.map((herb) => (
                <Card key={herb.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={herb.image} 
                        alt={herb.name}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {!herb.inStock && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Out of Stock
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                        <Leaf className="h-3 w-3" />
                        {herb.type}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {herb.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {herb.description}
                      </p>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-muted-foreground ml-1">{herb.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground ml-1">{herb.location}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        by {herb.farmer}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{herb.price}</span>
                        <Button 
                          size="sm" 
                          disabled={!herb.inStock}
                          className={herb.inStock ? '' : 'opacity-50 cursor-not-allowed'}
                        >
                          {herb.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </div>

                      {herb.inStock && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                          <Truck className="h-3 w-3" />
                          <span>Same-day delivery available</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Tips Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cooking Tips & Storage
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get the most out of your fresh herbs and spices with these expert tips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Fresh Herb Storage</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Store in refrigerator with stems in water</li>
                    <li>• Cover leaves with plastic bag</li>
                    <li>• Change water every 2-3 days</li>
                    <li>• Use within 7-10 days for best flavor</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Spice Storage</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Store in airtight containers</li>
                    <li>• Keep away from heat and light</li>
                    <li>• Label with purchase date</li>
                    <li>• Replace whole spices every 2-3 years</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Cooking Tips</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Add fresh herbs at the end of cooking</li>
                    <li>• Toast whole spices before grinding</li>
                    <li>• Taste and adjust seasoning gradually</li>
                    <li>• Pair complementary flavors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HerbsSpices;