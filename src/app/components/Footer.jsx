import { Gift, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gift className="w-8 h-8 text-rose-500" />
              <span className="text-white">GiftShop</span>
            </div>
            <p className="text-sm">
              Your one-stop destination for thoughtful gifts that create lasting memories. Quality products, happy customers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-rose-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-rose-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-rose-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-rose-500 transition">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">Shop</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">Gift Cards</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-rose-500 transition">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">Returns</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">Track Order</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>123 Gift Street, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-rose-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-rose-500" />
                <span>hello@giftshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GiftShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
