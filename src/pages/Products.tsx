import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Leaf, Apple, Wheat, Milk, Flower } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Fresh Vegetables',
    description: 'Daily-harvested vegetables delivered fresh to your home',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    path: '/categories/fresh-vegetables',
    icon: Leaf,
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    productCount: '25+ products'
  },
  {
    id: 2,
    name: 'Seasonal Fruits',
    description: 'Hand-picked fruits at their sweetest and most nutritious stage',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    path: '/categories/seasonal-fruits',
    icon: Apple,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    productCount: '30+ products'
  },
  {
    id: 3,
    name: 'Organic Grains',
    description: 'Certified organic grains that are healthy and chemical-free',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    path: '/categories/organic-grains',
    icon: Wheat,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    productCount: '15+ products'
  },
  {
    id: 4,
    name: 'Dairy Products',
    description: 'Pure dairy straight from local farms',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    path: '/categories/dairy-products',
    icon: Milk,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    productCount: '12+ products'
  },
  {
    id: 5,
    name: 'Herbs & Spices',
    description: 'Flavorful and fresh herbs and spices to enhance your cooking',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    path: '/categories/herbs-spices',
    icon: Flower,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    productCount: '20+ products'
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary-glow/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our Fresh Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Sourced directly from farms, all our products meet strict quality standards. From fresh vegetables to organic grains, discover the best of what nature has to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/start-shopping">Start Shopping</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/become-partner">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Filter & Search Section */}
        <section className="py-8 bg-accent/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">All Categories</Button>
                <Button variant="outline" size="sm">Organic Only</Button>
                <Button variant="outline" size="sm">Local Farmers</Button>
                <Button variant="outline" size="sm">Seasonal Items</Button>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse our carefully curated categories to find exactly what you're looking for.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                        <div className={`absolute top-4 left-4 ${category.bgColor} rounded-full p-2`}>
                          <IconComponent className={`h-6 w-6 ${category.color}`} />
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 px-2 py-1 rounded text-xs font-medium text-foreground">
                          {category.productCount}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {category.description}
                        </p>

                        <Link to={category.path}>
                          <Button variant="outline" className="w-full group">
                            Browse {category.name}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Preview */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every product on our platform is carefully vetted for quality, freshness, and authenticity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Fresh & Organic</h3>
                  <p className="text-muted-foreground">
                    All our products are harvested fresh and many are certified organic, ensuring you get the healthiest options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <ArrowRight className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Direct from Farms</h3>
                  <p className="text-muted-foreground">
                    Skip the middleman and get products straight from the source, ensuring better prices and freshness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                    <Apple className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quality Guaranteed</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes quality checks, and we offer a satisfaction guarantee on all purchases.
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
              Ready to Start Shopping?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our full collection and enjoy fresh, farm-to-table products delivered to your door.
            </p>
            <Button size="lg" asChild>
              <Link to="/start-shopping">Shop Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;