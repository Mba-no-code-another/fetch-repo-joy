import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Truck } from 'lucide-react';

const fruits = [
  {
    id: 1,
    name: 'Alphonso Mango',
    farmer: 'Maharashtra Orchards',
    price: '₹100/kg',
    location: 'Maharashtra, India',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1605027990121-cbae9ff08653?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Premium Alphonso mangoes - the king of mangoes, sweet and aromatic'
  },
  {
    id: 2,
    name: 'Himachal Apples',
    farmer: 'Mountain Fresh Farms',
    price: '₹120/kg',
    location: 'Himachal Pradesh, India',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Crisp, juicy apples from the hills of Himachal Pradesh'
  },
  {
    id: 3,
    name: 'Nagpur Oranges',
    farmer: 'Citrus Valley Co-op',
    price: '₹70/kg',
    location: 'Maharashtra, India',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Sweet and tangy Nagpur oranges, rich in Vitamin C'
  },
  {
    id: 4,
    name: 'Kerala Bananas',
    farmer: 'Tropical Fruit Collective',
    price: '₹40/dozen',
    location: 'Kerala, India',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Fresh, naturally ripened bananas from Kerala plantations'
  },
  {
    id: 5,
    name: 'Kashmir Apples',
    farmer: 'Valley Fresh Orchards',
    price: '₹150/kg',
    location: 'Kashmir, India',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: false,
    description: 'Premium Kashmir apples - crisp, sweet and naturally grown'
  },
  {
    id: 6,
    name: 'Watermelon',
    farmer: 'Desert Fresh Farms',
    price: '₹25/kg',
    location: 'Rajasthan, India',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    description: 'Juicy, sweet watermelons perfect for summer refreshment'
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
              Enjoy the best of India's seasonal fruits - from Alphonso mangoes to Kashmir apples. Hand-picked at peak ripeness and delivered fresh to your doorstep.
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