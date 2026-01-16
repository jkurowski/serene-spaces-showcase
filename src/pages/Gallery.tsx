import { useState } from "react";
import { X } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import bedroomLuxury from "@/assets/bedroom-luxury.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";

const galleryImages = [
  {
    id: 1,
    src: heroBuilding,
    category: "Exterior",
    title: "Twilight View",
  },
  {
    id: 2,
    src: apartmentInterior,
    category: "Interior",
    title: "Living Space",
  },
  {
    id: 3,
    src: bedroomLuxury,
    category: "Interior",
    title: "Master Suite",
  },
  {
    id: 4,
    src: buildingExterior,
    category: "Exterior",
    title: "Garden View",
  },
  {
    id: 5,
    src: apartmentInterior,
    category: "Interior",
    title: "Penthouse Living",
  },
  {
    id: 6,
    src: bedroomLuxury,
    category: "Interior",
    title: "Guest Bedroom",
  },
  {
    id: 7,
    src: heroBuilding,
    category: "Exterior",
    title: "Pool Area",
  },
  {
    id: 8,
    src: buildingExterior,
    category: "Amenities",
    title: "Landscaping",
  },
];

const categories = ["All", "Exterior", "Interior", "Amenities"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
                Visual Journey
              </span>
            </div>
            <h1 className="luxury-heading text-foreground">
              Our <span className="text-gold">Gallery</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-charcoal-light border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-charcoal"
                    : "bg-card border border-border text-foreground hover:border-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="luxury-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden aspect-square animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="text-gold text-xs uppercase tracking-wider mb-1">
                      {image.category}
                    </div>
                    <div className="font-heading text-lg text-foreground">
                      {image.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-gold transition-colors"
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-6 text-center">
              <div className="text-gold text-sm uppercase tracking-wider mb-2">
                {selectedImage.category}
              </div>
              <div className="font-heading text-2xl text-foreground">
                {selectedImage.title}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
