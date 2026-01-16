import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal-light border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl tracking-widest text-gold mb-6">
              AURUM
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting exceptional living spaces that define luxury and elegance. 
              Where your dream home becomes reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {["Home", "About", "Apartments", "Gallery", "News", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Luxury Avenue<br />
                  Manhattan, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span className="text-sm text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span className="text-sm text-muted-foreground">
                  info@aurumresidences.com
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-6">
              Showroom Hours
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Monday - Friday: 9AM - 7PM</p>
              <p>Saturday: 10AM - 5PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Aurum Residences. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
