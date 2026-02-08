import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import buildingExterior from "@/assets/building-exterior.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import heroBuilding from "@/assets/hero-building.jpg";

const newsArticles = [
  {
    id: 1,
    title: "Aurum Residences Wins Best Luxury Development 2024",
    excerpt: "Our flagship project has been recognized with the prestigious Best Luxury Development award at the National Real Estate Awards 2024.",
    content: `We are thrilled to announce that Aurum Residences has been awarded the Best Luxury Development at the National Real Estate Awards 2024. This prestigious recognition reflects our unwavering commitment to excellence in design, craftsmanship, and resident experience.\n\nThe award committee highlighted our innovative approach to luxury living, noting the seamless integration of modern architecture with timeless elegance. Our dedication to using only the finest materials and partnering with world-renowned architects has set a new benchmark in the industry.\n\n"This award is a testament to the vision and hard work of our entire team," said our CEO. "We believe that luxury living should be an experience that enriches every moment of our residents' lives."\n\nThe National Real Estate Awards evaluate projects based on architectural innovation, sustainability practices, community impact, and overall quality of living experience. Aurum Residences scored exceptionally across all categories, earning the top honor among over 200 submissions nationwide.`,
    date: "January 15, 2024",
    category: "Awards",
    image: heroBuilding,
  },
  {
    id: 2,
    title: "New Penthouse Collection Now Available",
    excerpt: "Experience the pinnacle of luxury living with our newly launched Penthouse Collection featuring panoramic city views.",
    content: `Introducing the crown jewel of Aurum Residences — our exclusive Penthouse Collection. Perched atop our flagship tower, these extraordinary residences offer unparalleled panoramic views of the city skyline.\n\nEach penthouse features floor-to-ceiling windows, private terraces spanning over 200 square meters, and bespoke interior finishes selected by our award-winning design team. The collection includes three distinct layouts, each offering between 350 and 500 square meters of refined living space.\n\nResidents of the Penthouse Collection enjoy exclusive amenities including a private rooftop lounge, dedicated concierge service, and direct elevator access. The kitchens are equipped with top-tier appliances, and the master suites include spa-inspired bathrooms with heated floors and rain showers.\n\nSchedule a private viewing today to experience the ultimate in luxury living.`,
    date: "January 10, 2024",
    category: "Properties",
    image: apartmentInterior,
  },
  {
    id: 3,
    title: "Sustainable Living: Our Green Initiative",
    excerpt: "Aurum Residences commits to net-zero carbon emissions by 2030 with innovative sustainable building practices.",
    content: `At Aurum Residences, luxury and sustainability go hand in hand. We are proud to announce our commitment to achieving net-zero carbon emissions across all our developments by 2030.\n\nOur green initiative encompasses every aspect of our building process — from sourcing sustainable materials to implementing cutting-edge energy systems. Solar panels, geothermal heating, and advanced insulation technologies are now standard features in all new developments.\n\nWe have partnered with leading environmental consultants to develop a comprehensive sustainability roadmap. This includes rainwater harvesting systems, electric vehicle charging stations in all parking facilities, and green rooftop gardens that contribute to urban biodiversity.\n\n"Sustainability is not a compromise — it's an enhancement," explains our Head of Development. "Our residents enjoy lower energy costs, cleaner air, and the satisfaction of living in a home that respects our planet."`,
    date: "January 5, 2024",
    category: "Sustainability",
    image: buildingExterior,
  },
  {
    id: 4,
    title: "Virtual Tours Now Available",
    excerpt: "Experience our residences from anywhere in the world with our new immersive virtual tour technology.",
    content: `We're excited to launch our state-of-the-art virtual tour platform, allowing prospective residents to explore our properties from anywhere in the world. Using cutting-edge 3D scanning and VR technology, our virtual tours provide an immersive experience that captures every detail of our residences.\n\nThe platform features high-resolution 360-degree views of every room, interactive floor plans, and the ability to customize finishes in real-time. Whether you're across the city or across the globe, you can now experience the grandeur of Aurum Residences at your convenience.\n\nOur virtual tours are accessible on desktop, mobile, and VR headsets, ensuring a seamless experience across all devices. Book a guided virtual tour with one of our sales consultants for a personalized walkthrough.`,
    date: "December 28, 2023",
    category: "Technology",
    image: apartmentInterior,
  },
  {
    id: 5,
    title: "Exclusive Interior Design Partnership",
    excerpt: "We've partnered with renowned interior designer Studio Luxe to offer bespoke furnishing packages.",
    content: `Aurum Residences is delighted to announce an exclusive partnership with Studio Luxe, one of the world's most sought-after interior design firms. This collaboration brings bespoke furnishing packages to our residents, offering curated collections that complement the architectural vision of each residence.\n\nStudio Luxe has designed three signature collections — Contemporary Elegance, Modern Classic, and Avant-Garde — each featuring handpicked furniture, lighting, and art pieces from premier European craftsmen.\n\nResidents can work directly with Studio Luxe designers to customize every element of their home, from fabric selections to custom millwork. The partnership also includes exclusive access to limited-edition furniture pieces not available to the general public.`,
    date: "December 20, 2023",
    category: "Partnerships",
    image: heroBuilding,
  },
  {
    id: 6,
    title: "Community Events This Spring",
    excerpt: "Join us for exclusive resident-only events including art exhibitions and wine tastings.",
    content: `Spring at Aurum Residences promises an extraordinary calendar of exclusive events designed to bring our community together. We believe that luxury living extends beyond the walls of your residence — it's about creating memorable experiences.\n\nHighlights include a private art exhibition featuring works by emerging contemporary artists, an evening of wine tasting with selections from boutique vineyards across Europe, and a wellness weekend with renowned yoga instructors and nutritionists.\n\nAll events are complimentary for Aurum residents and their guests. Our dedicated events team ensures every detail is curated to the highest standard, from the ambiance to the catering. Check your resident portal for the full spring calendar and RSVP details.`,
    date: "December 15, 2023",
    category: "Events",
    image: buildingExterior,
  },
];

const ArticleDetail = () => {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Article Not Found</h1>
          <Link to="/news">
            <Button variant="luxuryOutline">
              <ArrowLeft size={18} />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = newsArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal-deep">
        <div className="container mx-auto px-6 pt-12 pb-8">
          <Link to="/news" className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider mb-8 hover:text-gold-light transition-colors">
            <ArrowLeft size={16} />
            Back to News
          </Link>
          <div className="flex items-center gap-4 mb-4 animate-fade-up">
            <span className="bg-gold/20 text-gold px-3 py-1 text-xs uppercase tracking-wider border border-gold/30 flex items-center gap-1.5">
              <Tag size={12} />
              {article.category}
            </span>
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <Calendar size={14} />
              {article.date}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground max-w-3xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Full Image */}
      <section className="container mx-auto px-6 py-10">
        <img
          src={article.image}
          alt={article.title}
          className="w-full max-h-[600px] object-cover"
        />
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold text-lg font-light leading-relaxed mb-8 border-l-2 border-gold/40 pl-6">
              {article.excerpt}
            </p>
            <div className="prose-luxury">
              {article.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="luxury-section bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">Continue Reading</span>
              <div className="luxury-divider" />
            </div>
            <h2 className="font-heading text-3xl text-foreground">
              More <span className="text-gold">Stories</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((related, index) => (
              <Link
                key={related.id}
                to={`/news/${related.id}`}
                className="luxury-card overflow-hidden group animate-fade-up block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-gold text-xs uppercase tracking-wider">{related.category}</span>
                  <h3 className="font-heading text-lg text-foreground mt-2 line-clamp-2 group-hover:text-gold transition-colors">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
