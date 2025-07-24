import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">FarmToMarket</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                Products
              </Link>
              <Link to="/farmers" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                Farmers
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <Link to="/" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link to="/products" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Products
            </Link>
            <Link to="/farmers" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Farmers
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <Button variant="ghost" size="sm" className="justify-start">
                Sign In
              </Button>
              <Button size="sm" className="justify-start">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;