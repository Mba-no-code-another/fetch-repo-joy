import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star, Truck, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredFarmers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    farmName: 'Green Valley Organic Farm',
    location: 'Punjab, India',
    image: 'https://images.unsplash.com/photo-1472058893521-2a5c4ba35256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    experience: '15 years',
    speciality: 'Organic Vegetables',
    products: ['Tomatoes', 'Spinach', 'Cauliflower', 'Bell Peppers'],
    quote: "Working with FarmToMarket has transformed my farming business. I now get fair prices and direct access to customers.",
    verified: true,
    sustainablePractices: ['Organic Certification', 'Drip Irrigation', 'Solar Power']
  },
  {
    id: 2,
    name: 'Sunita Devi',
    farmName: 'Sunshine Fruit Gardens',
    location: 'Maharashtra, India',
    image: 'https://images.unsplash.com/photo-1594736797933-d0400bcc2cda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    experience: '12 years',
    speciality: 'Seasonal Fruits',
    products: ['Mangoes', 'Grapes', 'Oranges', 'Pomegranates'],
    quote: "The platform has helped me reach customers directly and grow my income significantly.",
    verified: true,
    sustainablePractices: ['IPM Practices', 'Water Conservation', 'Soil Health Management']
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    farmName: 'Heritage Grain Farm',
    location: 'Uttar Pradesh, India',
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    experience: '20 years',
    speciality: 'Organic Grains & Pulses',
    products: ['Basmati Rice', 'Wheat', 'Lentils', 'Chickpeas'],
    quote: "FarmToMarket's technology has made it easier to manage my sales and reach urban customers.",
    verified: true,
    sustainablePractices: ['Traditional Farming', 'Crop Rotation', 'Natural Fertilizers']
  }
];

const stats = [
  { label: 'Registered Farmers', value: '500+', icon: Users },
  { label: 'States Covered', value: '15+', icon: MapPin },
  { label: 'Average Rating', value: '4.8', icon: Star },
  { label: 'Growth Rate', value: '200%', icon: TrendingUp }
];

const Farmers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Farmers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We proudly work with over 500 farmers across India. Each farmer is verified, trained, and committed to providing the highest quality produce using sustainable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/become-partner">Join as a Farmer</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Farmers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Farmers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get to know some of our outstanding farming partners who are leading the way in sustainable agriculture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredFarmers.map((farmer) => (
                <Card key={farmer.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={farmer.image} 
                        alt={farmer.name}
                        className="w-full h-48 object-cover"
                      />
                      {farmer.verified && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          Verified
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{farmer.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-muted-foreground ml-1">{farmer.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-primary font-medium mb-2">{farmer.farmName}</p>
                      
                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{farmer.location}</span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Experience:</span>
                          <span className="font-medium">{farmer.experience}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Speciality:</span>
                          <span className="font-medium">{farmer.speciality}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Products:</p>
                        <div className="flex flex-wrap gap-1">
                          {farmer.products.map((product, index) => (
                            <span key={index} className="text-xs bg-accent px-2 py-1 rounded">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Sustainable Practices:</p>
                        <div className="flex flex-wrap gap-1">
                          {farmer.sustainablePractices.map((practice, index) => (
                            <span key={index} className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                              {practice}
                            </span>
                          ))}
                        </div>
                      </div>

                      <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-3 mb-4">
                        "{farmer.quote}"
                      </blockquote>

                      <Button variant="outline" className="w-full">
                        View Products
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Farmer Benefits */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Farmers Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive support to help farmers grow their business and reach new markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Better Prices</h3>
                  <p className="text-muted-foreground text-sm">
                    Get fair market prices by selling directly to customers without middlemen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Wider Reach</h3>
                  <p className="text-muted-foreground text-sm">
                    Access urban customers and expand your market beyond local boundaries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                    <Truck className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Logistics Support</h3>
                  <p className="text-muted-foreground text-sm">
                    We handle pickup, packaging, and delivery so you can focus on farming.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Training & Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Access training programs and ongoing support to improve your farming practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Farming Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Become part of India's largest farm-to-market network and grow your agricultural business with us.
            </p>
            <Button size="lg" asChild>
              <Link to="/become-partner">Apply to Become a Partner</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Farmers;