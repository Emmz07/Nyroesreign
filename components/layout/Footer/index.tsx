import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LUXE</h3>
            <p className="text-gray-400">
              Redefining modern elegance through sustainable and timeless fashion.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#collections" className="hover:text-white">Collections</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@luxe.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Fashion Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-400" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-400" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}