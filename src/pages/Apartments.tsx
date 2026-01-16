import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bed, Bath, Square, ArrowRight, X } from "lucide-react";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import bedroomLuxury from "@/assets/bedroom-luxury.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import floorplanA1 from "@/assets/floorplan-a1.jpg";
import floorplanB2 from "@/assets/floorplan-b2.jpg";

interface Apartment {
  id: number;
  name: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: string;
  floor: string;
  status: "Available" | "Reserved" | "Sold";
  image: string;
  floorplan: string;
  features: string[];
}

const apartments: Apartment[] = [
  {
    id: 1,
    name: "The Penthouse Suite",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: 4500,
    price: "$2,500,000",
    floor: "25th Floor",
    status: "Available",
    image: apartmentInterior,
    floorplan: floorplanB2,
    features: [
      "Private terrace",
      "360° city views",
      "Smart home system",
      "Private elevator",
    ],
  },
  {
    id: 2,
    name: "Sky Residence A",
    type: "3 Bedroom",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    price: "$1,800,000",
    floor: "18th Floor",
    status: "Available",
    image: bedroomLuxury,
    floorplan: floorplanA1,
    features: [
      "Panoramic windows",
      "Chef's kitchen",
      "Walk-in closets",
      "Home office",
    ],
  },
  {
    id: 3,
    name: "Garden Suite B",
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    price: "$1,200,000",
    floor: "5th Floor",
    status: "Reserved",
    image: buildingExterior,
    floorplan: floorplanA1,
    features: ["Private garden", "Open floor plan", "Spa bathroom", "Storage"],
  },
  {
    id: 4,
    name: "Executive One",
    type: "1 Bedroom",
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    price: "$750,000",
    floor: "12th Floor",
    status: "Available",
    image: apartmentInterior,
    floorplan: floorplanA1,
    features: [
      "City views",
      "Modern design",
      "Built-in storage",
      "High ceilings",
    ],
  },
  {
    id: 5,
    name: "Sky Residence B",
    type: "3 Bedroom",
    bedrooms: 3,
    bathrooms: 2,
    area: 2600,
    price: "$1,650,000",
    floor: "20th Floor",
    status: "Sold",
    image: bedroomLuxury,
    floorplan: floorplanB2,
    features: [
      "Corner unit",
      "Dual exposure",
      "Master suite",
      "Entertainment space",
    ],
  },
  {
    id: 6,
    name: "Terrace Collection",
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 2,
    area: 2100,
    price: "$1,400,000",
    floor: "15th Floor",
    status: "Available",
    image: buildingExterior,
    floorplan: floorplanA1,
    features: [
      "Large terrace",
      "Open kitchen",
      "Guest suite",
      "Wine storage",
    ],
  },
];

const filters = ["All", "1 Bedroom", "2 Bedroom", "3 Bedroom", "Penthouse"];

const Apartments = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );

  const filteredApartments =
    activeFilter === "All"
      ? apartments
      : apartments.filter((apt) => apt.type === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400";
      case "Reserved":
        return "bg-gold/20 text-gold";
      case "Sold":
        return "bg-red-500/20 text-red-400";
      default:
        return "";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${apartmentInterior})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">
                Our Collection
              </span>
            </div>
            <h1 className="luxury-heading text-foreground">
              Luxury <span className="text-gold">Residences</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-charcoal-light border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gold text-charcoal"
                    : "bg-card border border-border text-foreground hover:border-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="luxury-section">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApartments.map((apt, index) => (
              <div
                key={apt.id}
                className="luxury-card overflow-hidden group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={apt.image}
                    alt={apt.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs uppercase tracking-wider ${getStatusColor(
                        apt.status
                      )}`}
                    >
                      {apt.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gold text-sm uppercase tracking-wider mb-2">
                    {apt.floor}
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-4">
                    {apt.name}
                  </h3>
                  <div className="flex gap-6 mb-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Bed size={16} className="text-gold" />
                      <span>{apt.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={16} className="text-gold" />
                      <span>{apt.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square size={16} className="text-gold" />
                      <span>{apt.area} sq ft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-heading text-xl text-gold">
                      {apt.price}
                    </span>
                    <Button
                      variant="luxuryGhost"
                      size="sm"
                      onClick={() => setSelectedApartment(apt)}
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Modal */}
      {selectedApartment && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-6">
          <div className="bg-card border border-border max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-heading text-2xl text-foreground">
                {selectedApartment.name}
              </h3>
              <button
                onClick={() => setSelectedApartment(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 p-6">
              <div>
                <h4 className="text-gold uppercase tracking-wider text-sm mb-4">
                  Floor Plan
                </h4>
                <img
                  src={selectedApartment.floorplan}
                  alt={`${selectedApartment.name} floor plan`}
                  className="w-full"
                />
              </div>
              <div>
                <h4 className="text-gold uppercase tracking-wider text-sm mb-4">
                  Details
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Type</span>
                    <span className="text-foreground">
                      {selectedApartment.type}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Bedrooms</span>
                    <span className="text-foreground">
                      {selectedApartment.bedrooms}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Bathrooms</span>
                    <span className="text-foreground">
                      {selectedApartment.bathrooms}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Area</span>
                    <span className="text-foreground">
                      {selectedApartment.area} sq ft
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Floor</span>
                    <span className="text-foreground">
                      {selectedApartment.floor}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Price</span>
                    <span className="text-gold font-heading text-xl">
                      {selectedApartment.price}
                    </span>
                  </div>
                </div>

                <h4 className="text-gold uppercase tracking-wider text-sm mb-4">
                  Features
                </h4>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {selectedApartment.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="luxury" className="w-full" asChild>
                  <Link to="/contact">Schedule a Viewing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="luxury-section bg-charcoal-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-foreground mb-6">
            Find Your <span className="text-gold">Perfect Home</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Can't find what you're looking for? Contact us for exclusive
            off-market listings and upcoming releases.
          </p>
          <Button variant="luxury" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Apartments;
