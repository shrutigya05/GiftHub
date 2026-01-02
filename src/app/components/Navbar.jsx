import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, Gift } from 'lucide-react';

export function Navbar({ onSearchClick, onCartClick, cartItemCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Gift className="w-8 h-8 text-rose-500" />
            <span className="text-rose-600">GiftShop</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-rose-500 transition">
              Home
            </a>
            <a href="#categories" className="text-gray-700 hover:text-rose-500 transition">
              Categories
            </a>
            <a href="#products" className="text-gray-700 hover:text-rose-500 transition">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-rose-500 transition">
              About
            </a>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onSearchClick}
              className="text-gray-700 hover:text-rose-500 transition"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={onCartClick}
              className="text-gray-700 hover:text-rose-500 transition relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-rose-500 transition">
                Home
              </a>
              <a href="#categories" className="text-gray-700 hover:text-rose-500 transition">
                Categories
              </a>
              <a href="#products" className="text-gray-700 hover:text-rose-500 transition">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-rose-500 transition">
                About
              </a>
              <div className="flex gap-4 pt-2">
                <button 
                  onClick={onSearchClick}
                  className="text-gray-700 hover:text-rose-500 transition"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button 
                  onClick={onCartClick}
                  className="text-gray-700 hover:text-rose-500 transition relative"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}