import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBuilding})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">
                Get in Touch
              </span>
            </div>
            <h1 className="luxury-heading text-foreground">
              Contact <span className="text-gold">Us</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="luxury-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="font-heading text-3xl text-foreground mb-6">
                Schedule a <span className="text-gold">Viewing</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form below and our team will contact you within 24
                hours to arrange a private viewing of our residences.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Interested In
                  </label>
                  <select className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:border-gold transition-colors">
                    <option value="">Select a property type</option>
                    <option value="1-bed">1 Bedroom Residences</option>
                    <option value="2-bed">2 Bedroom Residences</option>
                    <option value="3-bed">3 Bedroom Residences</option>
                    <option value="penthouse">Penthouse Collection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button variant="luxury" size="lg" className="w-full sm:w-auto">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="bg-charcoal-light border border-border p-8 mb-8">
                <h3 className="font-heading text-2xl text-foreground mb-6">
                  Visit Our <span className="text-gold">Showroom</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium mb-1">
                        Address
                      </div>
                      <div className="text-muted-foreground">
                        123 Luxury Avenue
                        <br />
                        Manhattan, NY 10001
                        <br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium mb-1">
                        Phone
                      </div>
                      <div className="text-muted-foreground">
                        +1 (555) 123-4567
                        <br />
                        +1 (555) 987-6543
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium mb-1">
                        Email
                      </div>
                      <div className="text-muted-foreground">
                        info@aurumresidences.com
                        <br />
                        sales@aurumresidences.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium mb-1">
                        Showroom Hours
                      </div>
                      <div className="text-muted-foreground">
                        Monday - Friday: 9AM - 7PM
                        <br />
                        Saturday: 10AM - 5PM
                        <br />
                        Sunday: By Appointment
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-charcoal-light border border-border h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
