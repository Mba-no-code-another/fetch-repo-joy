import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">FarmToMarket</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connecting farmers directly to consumers, ensuring fresh produce and fair prices for everyone in the agricultural value chain.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-primary" />
              </div>
              <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-primary" />
              </div>
              <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'Farmers', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2">
              {['Fresh Vegetables', 'Seasonal Fruits', 'Organic Grains', 'Dairy Products', 'Herbs & Spices'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@farmtomarket.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Farm Street, Agriculture City, AC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 FarmToMarket. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;