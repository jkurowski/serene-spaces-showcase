import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ApartmentSearchFilters from "@/components/apartments/ApartmentSearchFilters";
import ApartmentListItem from "@/components/apartments/ApartmentListItem";
import ApartmentDetailModal from "@/components/apartments/ApartmentDetailModal";
import type { Apartment } from "@/components/apartments/ApartmentListItem";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import bedroomLuxury from "@/assets/bedroom-luxury.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import floorplanA1 from "@/assets/floorplan-a1.jpg";
import floorplanB2 from "@/assets/floorplan-b2.jpg";

const apartments: Apartment[] = [
  {
    id: 1,
    name: "The Penthouse Suite",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: 420,
    priceTotal: "$2,500,000",
    pricePerM2: "$5,952",
    floor: 25,
    status: "For Sale",
    image: apartmentInterior,
    floorplan: floorplanB2,
    features: ["Private terrace", "360° city views", "Smart home system", "Private elevator"],
  },
  {
    id: 2,
    name: "Sky Residence A",
    type: "3 Bedroom",
    bedrooms: 3,
    bathrooms: 3,
    area: 260,
    priceTotal: "$1,800,000",
    pricePerM2: "$6,923",
    floor: 18,
    status: "For Sale",
    image: bedroomLuxury,
    floorplan: floorplanA1,
    features: ["Panoramic windows", "Chef's kitchen", "Walk-in closets", "Home office"],
  },
  {
    id: 3,
    name: "Garden Suite B",
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 2,
    area: 167,
    priceTotal: "$1,200,000",
    pricePerM2: "$7,186",
    floor: 5,
    status: "Reservation",
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
    area: 88,
    priceTotal: "$750,000",
    pricePerM2: "$8,523",
    floor: 12,
    status: "For Sale",
    image: apartmentInterior,
    floorplan: floorplanA1,
    features: ["City views", "Modern design", "Built-in storage", "High ceilings"],
  },
  {
    id: 5,
    name: "Sky Residence B",
    type: "3 Bedroom",
    bedrooms: 3,
    bathrooms: 2,
    area: 242,
    priceTotal: "$1,650,000",
    pricePerM2: "$6,818",
    floor: 20,
    status: "Sold",
    image: bedroomLuxury,
    floorplan: floorplanB2,
    features: ["Corner unit", "Dual exposure", "Master suite", "Entertainment space"],
  },
  {
    id: 6,
    name: "Terrace Collection",
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 2,
    area: 195,
    priceTotal: "$1,400,000",
    pricePerM2: "$7,179",
    floor: 15,
    status: "For Sale",
    image: buildingExterior,
    floorplan: floorplanA1,
    features: ["Large terrace", "Open kitchen", "Guest suite", "Wine storage"],
  },
];

const Apartments = () => {
  const [rooms, setRooms] = useState("");
  const [area, setArea] = useState("");
  const [floor, setFloor] = useState("");
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  const filteredApartments = useMemo(() => {
    return apartments.filter((apt) => {
      if (rooms && apt.bedrooms !== Number(rooms)) return false;
      if (area && apt.area < Number(area)) return false;
      if (floor && apt.floor !== Number(floor)) return false;
      return true;
    });
  }, [rooms, area, floor]);

  return (
    <div>
      {/* Hero with Building Plan */}
      <section className="relative h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingExterior})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">Our Collection</span>
            </div>
            <h1 className="luxury-heading text-foreground">
              Luxury <span className="text-gold">Residences</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Building Plan Image */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="luxury-divider" />
          <span className="text-gold text-sm uppercase tracking-widest">Building Plan</span>
        </div>
        <img
          src={buildingExterior}
          alt="Building plan"
          className="w-full max-h-[500px] object-cover border border-border"
        />
      </section>

      {/* Search Filters */}
      <section className="container mx-auto px-6 pb-8">
        <ApartmentSearchFilters
          rooms={rooms}
          area={area}
          floor={floor}
          onRoomsChange={setRooms}
          onAreaChange={setArea}
          onFloorChange={setFloor}
        />
      </section>

      {/* Apartment List */}
      <section className="container mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl text-foreground">
            Available Apartments
          </h2>
          <span className="text-muted-foreground text-sm">
            {filteredApartments.length} result{filteredApartments.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="space-y-4">
          {filteredApartments.map((apt) => (
            <ApartmentListItem
              key={apt.id}
              apartment={apt}
              onViewDetails={setSelectedApartment}
            />
          ))}
          {filteredApartments.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No apartments match your search criteria.
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedApartment && (
        <ApartmentDetailModal
          apartment={selectedApartment}
          onClose={() => setSelectedApartment(null)}
        />
      )}

      {/* CTA */}
      <section className="luxury-section bg-charcoal-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-foreground mb-6">
            Find Your <span className="text-gold">Perfect Home</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Can't find what you're looking for? Contact us for exclusive off-market listings and upcoming releases.
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
