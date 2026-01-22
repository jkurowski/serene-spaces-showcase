import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Award, Users, Clock } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";

const stats = [
  { icon: Building2, value: "15+", label: "Projects Completed" },
  { icon: Award, value: "25", label: "Years of Excellence" },
  { icon: Users, value: "500+", label: "Happy Families" },
  { icon: Clock, value: "100%", label: "On-Time Delivery" },
];

const featuredApartments = [
  {
    id: 1,
    name: "The Penthouse Collection",
    type: "4 Bedrooms",
    area: "4,500 sq ft",
    price: "From $2.5M",
    image: apartmentInterior,
  },
  {
    id: 2,
    name: "Sky Residence",
    type: "3 Bedrooms",
    area: "2,800 sq ft",
    price: "From $1.8M",
    image: buildingExterior,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBuilding})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">
                Luxury Living Redefined
              </span>
            </div>
            <h1 className="luxury-heading text-foreground mb-6">
              Nasza Firma{" "}
              <span className="text-gold">Najlepsza</span> w Łodzi
            </h1>
            <p className="luxury-subheading mb-10">
              Discover residences that blend timeless elegance with modern
              sophistication. Where every detail tells a story of refined
              craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="luxury" size="xl" asChild>
                <Link to="/apartments">
                  Explore Residences
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="luxuryOutline" size="xl" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-charcoal-light py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <div className="font-heading text-4xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="luxury-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="luxury-divider" />
                <span className="text-gold text-sm uppercase tracking-widest">
                  Our Legacy
                </span>
              </div>
              <h2 className="luxury-heading text-foreground mb-6">
                Building Dreams,{" "}
                <span className="text-gold">Crafting Excellence</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For over two decades, Aurum Residences has been synonymous with
                luxury real estate development. We don't just build homes; we
                create sanctuaries where memories are made and legacies begin.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every project bears our signature attention to detail, premium
                materials, and unwavering commitment to excellence that has made
                us the choice of discerning homeowners worldwide.
              </p>
              <Button variant="luxuryGhost" size="lg" asChild>
                <Link to="/about">
                  Learn Our Story
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={buildingExterior}
                alt="Aurum Residences Building"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 hidden lg:block">
                <div className="font-heading text-5xl text-charcoal mb-2">25</div>
                <div className="text-charcoal text-sm uppercase tracking-wider">
                  Years of<br />Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="luxury-section bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">
                Featured Properties
              </span>
              <div className="luxury-divider" />
            </div>
            <h2 className="luxury-heading text-foreground">
              Signature <span className="text-gold">Residences</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredApartments.map((apt, index) => (
              <Link
                key={apt.id}
                to="/apartments"
                className="group luxury-card overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={apt.image}
                    alt={apt.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-heading text-2xl text-foreground mb-2">
                      {apt.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{apt.type}</span>
                      <span>•</span>
                      <span>{apt.area}</span>
                      <span>•</span>
                      <span className="text-gold">{apt.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="luxuryOutline" size="lg" asChild>
              <Link to="/apartments">
                View All Residences
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="luxury-section relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${apartmentInterior})` }}
        >
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">
                Your Dream Awaits
              </span>
              <div className="luxury-divider" />
            </div>
            <h2 className="luxury-heading text-foreground mb-6">
              Ready to Find Your{" "}
              <span className="text-gold">Perfect Home</span>?
            </h2>
            <p className="luxury-subheading mb-10">
              Schedule a private viewing and experience the unparalleled luxury
              of Aurum Residences firsthand.
            </p>
            <Button variant="luxury" size="xl" asChild>
              <Link to="/contact">
                Book a Private Tour
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
