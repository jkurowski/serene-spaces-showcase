import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import type { Apartment } from "./ApartmentListItem";

interface ApartmentDetailModalProps {
  apartment: Apartment;
  onClose: () => void;
}

const ApartmentDetailModal = ({ apartment, onClose }: ApartmentDetailModalProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-6">
      <div className="bg-card border border-border max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="font-heading text-2xl text-foreground">{apartment.name}</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 p-6">
          <div>
            <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Floor Plan</h4>
            <img
              src={apartment.floorplan}
              alt={`${apartment.name} floor plan`}
              className="w-full"
            />
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Details</h4>
            <div className="space-y-4 mb-8">
              {[
                ["Type", apartment.type],
                ["Rooms", String(apartment.bedrooms)],
                ["Bathrooms", String(apartment.bathrooms)],
                ["Area", `${apartment.area} m²`],
                ["Floor", String(apartment.floor)],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Price</span>
                <div className="text-right">
                  <span className="text-gold font-heading text-xl">{apartment.priceTotal}</span>
                  <div className="text-muted-foreground text-xs">{apartment.pricePerM2} / m²</div>
                </div>
              </div>
            </div>

            <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Features</h4>
            <ul className="grid grid-cols-2 gap-2 mb-8">
              {apartment.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground text-sm flex items-center gap-2">
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
  );
};

export default ApartmentDetailModal;
