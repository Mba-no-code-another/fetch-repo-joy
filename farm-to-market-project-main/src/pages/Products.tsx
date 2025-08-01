import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, MapPin, Star, Clock } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    farmer: 'Rajesh Kumar',
    price: '₹40/kg',
    location: 'Delhi NCR - Pickup Center A',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Vegetables',
    inStock: true,
    harvestDate: '2 days ago'
  },
  {
    id: 2,
    name: 'Fresh Spinach',
    farmer: 'Priya Sharma',
    price: '₹25/bunch',
    location: 'Mumbai - Pickup Center B',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Vegetables',
    inStock: true,
    harvestDate: '1 day ago'
  },
  {
    id: 3,
    name: 'Basmati Rice',
    farmer: 'Suresh Patel',
    price: '₹80/kg',
    location: 'Pune - Pickup Center C',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Grains',
    inStock: true,
    harvestDate: '1 week ago'
  },
  {
    id: 4,
    name: 'Farm Fresh Apples',
    farmer: 'Mohan Singh',
    price: '₹120/kg',
    location: 'Bangalore - Pickup Center D',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Fruits',
    inStock: false,
    harvestDate: '3 days ago'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Vegetables', 'Fruits', 'Grains'];

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Farm Fresh Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover fresh, locally-sourced produce directly from verified farmers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search products or farmers..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/30">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    {product.inStock ? (
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        In Stock
                      </span>
                    ) : (
                      <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Sold Out
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-2">
                  by {product.farmer}
                </p>

                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-foreground">{product.rating}</span>
                </div>

                <div className="flex items-center gap-1 mb-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{product.location}</span>
                </div>

                <div className="flex items-center gap-1 mb-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Harvested {product.harvestDate}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button 
                    variant={product.inStock ? "default" : "outline"} 
                    size="sm"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "Book Now" : "Notify Me"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;