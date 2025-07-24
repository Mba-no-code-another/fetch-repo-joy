import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Truck, Leaf } from 'lucide-react';

const herbs = [
  {
    id: 1,
    name: 'Fresh Basil',
    farmer: 'Herb Garden Co.',
    price: '$3.99/bunch',
    location: 'California',
    rating: 4.9,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Aromatic fresh basil perfect for Italian dishes and pesto',
    type: 'Fresh Herb'
  },
  {
    id: 2,
    name: 'Organic Rosemary',
    farmer: 'Mountain Herbs Farm',
    price: '$4.49/bunch',
    location: 'Oregon',
    rating: 4.8,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Fragrant rosemary sprigs ideal for roasting and seasoning',
    type: 'Fresh Herb'
  },
  {
    id: 3,
    name: 'Black Peppercorns',
    farmer: 'Spice Route Trading',
    price: '$12.99/4oz',
    location: 'Local',
    rating: 4.7,
    image: '/placeholder.svg',
    inStock: true,
    description: 'Premium whole black peppercorns for the freshest ground pepper',
    type: 'Spice'
  },
  {
    id: 4,
    name: 'Fresh Thyme',
    farmer: 'Garden Valley Herbs',
    price: '$3.49/bunch',
    location: 'Washington',
    rating: 4.6,
    image: '/placeholder.svg',
    inStock: false,
    description: 'Delicate thyme leaves perfect for Mediterranean cooking',
    type: 'Fresh Herb'
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
              Elevate your cooking with fresh, aromatic herbs and premium spices. From garden-fresh basil to exotic spice blends, add natural flavors to every meal.
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