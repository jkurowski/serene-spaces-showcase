import { Button } from "@/components/ui/button";
import { Bed, Ruler, Building2, ArrowRight } from "lucide-react";

export interface Apartment {
  id: number;
  name: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  pricePerM2: string;
  priceTotal: string;
  floor: number;
  status: "For Sale" | "Reservation" | "Sold";
  image: string;
  floorplan: string;
  features: string[];
}

interface ApartmentListItemProps {
  apartment: Apartment;
  onViewDetails: (apt: Apartment) => void;
}

const getStatusStyle = (status: Apartment["status"]) => {
  switch (status) {
    case "For Sale":
      return "bg-green-500/15 text-green-400 border border-green-500/30";
    case "Reservation":
      return "bg-gold/15 text-gold border border-gold/30";
    case "Sold":
      return "bg-red-500/15 text-red-400 border border-red-500/30";
  }
};

const ApartmentListItem = ({ apartment, onViewDetails }: ApartmentListItemProps) => {
  return (
    <div className="luxury-card flex flex-col lg:flex-row items-stretch gap-0 overflow-hidden group animate-fade-up">
      {/* Thumbnail */}
      <div className="lg:w-48 h-40 lg:h-auto flex-shrink-0 overflow-hidden">
        <img
          src={apartment.image}
          alt={apartment.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="flex-1 p-5 flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Name */}
        <div className="lg:w-44 flex-shrink-0">
          <h3 className="font-heading text-lg text-foreground">{apartment.name}</h3>
          <span className="text-muted-foreground text-xs uppercase tracking-wider">{apartment.type}</span>
        </div>

        {/* Specs */}
        <div className="flex gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5" title="Rooms">
            <Bed size={15} className="text-gold" />
            <span>{apartment.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Area">
            <Ruler size={15} className="text-gold" />
            <span>{apartment.area} m²</span>
          </div>
          <div className="flex items-center gap-1.5" title="Floor">
            <Building2 size={15} className="text-gold" />
            <span>{apartment.floor}</span>
          </div>
        </div>

        {/* Status */}
        <div className="lg:ml-auto">
          <span className={`px-3 py-1 text-xs uppercase tracking-wider ${getStatusStyle(apartment.status)}`}>
            {apartment.status}
          </span>
        </div>

        {/* Price */}
        <div className="text-right flex-shrink-0 lg:w-40">
          <div className="font-heading text-lg text-gold">{apartment.priceTotal}</div>
          <div className="text-muted-foreground text-xs">{apartment.pricePerM2} / m²</div>
        </div>

        {/* Action */}
        <Button
          variant="luxuryOutline"
          size="sm"
          onClick={() => onViewDetails(apartment)}
          className="flex-shrink-0"
        >
          See more
          <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  );
};

export default ApartmentListItem;
