import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-wider">MODEVA</h3>
            <p className="text-sm text-primary-foreground/80">
              Timeless elegance meets contemporary design. Discover your unique style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wider">CUSTOMER SERVICE</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shipping" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wider">NEWSLETTER</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to receive exclusive offers and style updates.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 text-sm"
              />
              <button className="px-4 py-2 bg-primary-foreground text-primary text-sm font-medium hover:bg-primary-foreground/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            © 2024 MODEVA. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
