import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './button';
import { Menu, X, Leaf, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">FarmConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${location.pathname === '/products' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Products
            </Link>
            <Link 
              to="/farmers" 
              className={`transition-colors ${location.pathname === '/farmers' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Farmers
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${location.pathname === '/about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button variant="hero" size="sm">
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
            <Link 
              to="/" 
              className={`block px-3 py-2 transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block px-3 py-2 transition-colors ${location.pathname === '/products' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/farmers" 
              className={`block px-3 py-2 transition-colors ${location.pathname === '/farmers' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Farmers
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 transition-colors ${location.pathname === '/about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="flex space-x-2 p-3">
              <Button variant="ghost" size="sm" className="flex-1">
                Login
              </Button>
              <Button variant="hero" size="sm" className="flex-1">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;