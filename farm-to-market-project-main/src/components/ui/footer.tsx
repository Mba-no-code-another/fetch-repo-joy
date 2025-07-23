import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary-glow" />
              <span className="text-xl font-bold">FarmConnect</span>
            </div>
            <p className="text-background/70">
              Connecting rural farmers directly with consumers through innovative technology and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-primary-glow cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-primary-glow cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary-glow cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="/products" className="hover:text-primary-glow transition-colors">Products</a></li>
              <li><a href="/farmers" className="hover:text-primary-glow transition-colors">Farmers</a></li>
              <li><a href="/pickup-centers" className="hover:text-primary-glow transition-colors">Pickup Centers</a></li>
              <li><a href="/about" className="hover:text-primary-glow transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="/help" className="hover:text-primary-glow transition-colors">Help Center</a></li>
              <li><a href="/faq" className="hover:text-primary-glow transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-primary-glow transition-colors">Contact Us</a></li>
              <li><a href="/terms" className="hover:text-primary-glow transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-background/70">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@farmconnect.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Rural Commerce Hub, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2024 FarmConnect. All rights reserved. Empowering rural communities through technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;