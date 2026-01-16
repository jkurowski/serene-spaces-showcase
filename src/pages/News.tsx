import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import buildingExterior from "@/assets/building-exterior.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import heroBuilding from "@/assets/hero-building.jpg";

const newsArticles = [
  {
    id: 1,
    title: "Aurum Residences Wins Best Luxury Development 2024",
    excerpt:
      "Our flagship project has been recognized with the prestigious Best Luxury Development award at the National Real Estate Awards 2024.",
    date: "January 15, 2024",
    category: "Awards",
    image: heroBuilding,
    featured: true,
  },
  {
    id: 2,
    title: "New Penthouse Collection Now Available",
    excerpt:
      "Experience the pinnacle of luxury living with our newly launched Penthouse Collection featuring panoramic city views.",
    date: "January 10, 2024",
    category: "Properties",
    image: apartmentInterior,
    featured: false,
  },
  {
    id: 3,
    title: "Sustainable Living: Our Green Initiative",
    excerpt:
      "Aurum Residences commits to net-zero carbon emissions by 2030 with innovative sustainable building practices.",
    date: "January 5, 2024",
    category: "Sustainability",
    image: buildingExterior,
    featured: false,
  },
  {
    id: 4,
    title: "Virtual Tours Now Available",
    excerpt:
      "Experience our residences from anywhere in the world with our new immersive virtual tour technology.",
    date: "December 28, 2023",
    category: "Technology",
    image: apartmentInterior,
    featured: false,
  },
  {
    id: 5,
    title: "Exclusive Interior Design Partnership",
    excerpt:
      "We've partnered with renowned interior designer Studio Luxe to offer bespoke furnishing packages.",
    date: "December 20, 2023",
    category: "Partnerships",
    image: heroBuilding,
    featured: false,
  },
  {
    id: 6,
    title: "Community Events This Spring",
    excerpt:
      "Join us for exclusive resident-only events including art exhibitions and wine tastings.",
    date: "December 15, 2023",
    category: "Events",
    image: buildingExterior,
    featured: false,
  },
];

const News = () => {
  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div>
      {/* Hero Section */}
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
              <span className="text-gold text-sm uppercase tracking-widest">
                Stay Informed
              </span>
            </div>
            <h1 className="luxury-heading text-foreground">
              Latest <span className="text-gold">News</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="luxury-section">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden animate-fade-up">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-charcoal px-4 py-2 text-xs uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gold text-sm uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <Calendar size={14} />
                    {featuredArticle.date}
                  </span>
                </div>
                <h2 className="font-heading text-3xl text-foreground mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <Button variant="luxuryGhost" size="lg">
                  Read More
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="luxury-section bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">
                Recent Updates
              </span>
              <div className="luxury-divider" />
            </div>
            <h2 className="luxury-heading text-foreground">
              More <span className="text-gold">Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <article
                key={article.id}
                className="luxury-card overflow-hidden group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gold text-xs uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="luxuryGhost" size="sm">
                    Read More
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="luxury-section">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-heading text-3xl text-foreground mb-6">
              Stay <span className="text-gold">Connected</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive updates, new releases,
              and luxury lifestyle insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <Button variant="luxury">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
