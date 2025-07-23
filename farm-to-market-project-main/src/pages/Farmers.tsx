import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, Star, Package, Verified } from 'lucide-react';

const mockFarmers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Punjab, India',
    speciality: 'Organic Vegetables',
    rating: 4.8,
    products: 15,
    verified: true,
    joinedDate: '2022',
    description: 'Certified organic farmer with 20+ years of experience in sustainable farming practices.',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Maharashtra, India',
    speciality: 'Leafy Greens',
    rating: 4.9,
    products: 12,
    verified: true,
    joinedDate: '2021',
    description: 'Specializes in pesticide-free leafy vegetables using traditional farming methods.',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Suresh Patel',
    location: 'Gujarat, India',
    speciality: 'Grains & Pulses',
    rating: 4.7,
    products: 8,
    verified: true,
    joinedDate: '2023',
    description: 'Third-generation farmer focusing on heritage grains and sustainable agriculture.',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Mohan Singh',
    location: 'Himachal Pradesh, India',
    speciality: 'Hill Station Fruits',
    rating: 4.6,
    products: 10,
    verified: false,
    joinedDate: '2023',
    description: 'Mountain farmer growing premium apples and seasonal fruits in organic conditions.',
    image: '/placeholder.svg'
  }
];

const Farmers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Verified Only', 'New Farmers', 'Top Rated'];

  const filteredFarmers = mockFarmers.filter(farmer => {
    const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         farmer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         farmer.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesFilter = true;
    switch (selectedFilter) {
      case 'Verified Only':
        matchesFilter = farmer.verified;
        break;
      case 'New Farmers':
        matchesFilter = farmer.joinedDate === '2023';
        break;
      case 'Top Rated':
        matchesFilter = farmer.rating >= 4.8;
        break;
      default:
        matchesFilter = true;
    }
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Verified Farmers
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated farmers bringing fresh produce directly to your table
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search farmers by name, location, or speciality..."
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Farmers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFarmers.map((farmer) => (
            <Card key={farmer.id} className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {farmer.verified && (
                      <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1">
                        <Verified className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {farmer.name}
                      </h3>
                      {farmer.verified && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <MapPin className="h-4 w-4" />
                      <span>{farmer.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-foreground">{farmer.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-1">Speciality</h4>
                  <p className="text-sm text-muted-foreground">{farmer.speciality}</p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {farmer.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Package className="h-4 w-4" />
                    <span>{farmer.products} products</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Since {farmer.joinedDate}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    View Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFarmers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No farmers found matching your criteria.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Farmers;