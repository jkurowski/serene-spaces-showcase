import { Input } from "@/components/ui/input";
import { Bed, Ruler, Building2, Search } from "lucide-react";

interface ApartmentSearchFiltersProps {
  rooms: string;
  area: string;
  floor: string;
  onRoomsChange: (value: string) => void;
  onAreaChange: (value: string) => void;
  onFloorChange: (value: string) => void;
}

const ApartmentSearchFilters = ({
  rooms,
  area,
  floor,
  onRoomsChange,
  onAreaChange,
  onFloorChange,
}: ApartmentSearchFiltersProps) => {
  return (
    <div className="bg-card border border-border p-6">
      <div className="flex items-center gap-3 mb-5">
        <Search size={18} className="text-gold" />
        <h3 className="font-heading text-lg text-foreground">Search Apartments</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <Bed size={14} className="text-gold" />
            Rooms
          </label>
          <Input
            placeholder="e.g. 2"
            value={rooms}
            onChange={(e) => onRoomsChange(e.target.value)}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <Ruler size={14} className="text-gold" />
            Area (m²)
          </label>
          <Input
            placeholder="min area"
            value={area}
            onChange={(e) => onAreaChange(e.target.value)}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <Building2 size={14} className="text-gold" />
            Floor
          </label>
          <Input
            placeholder="e.g. 5"
            value={floor}
            onChange={(e) => onFloorChange(e.target.value)}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
    </div>
  );
};

export default ApartmentSearchFilters;
