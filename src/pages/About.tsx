import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Building2 } from "lucide-react";
import buildingExterior from "@/assets/building-exterior.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Uncompromising standards in every detail, from design to delivery.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Forward-thinking architecture that stands the test of time.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Genuine care for our clients and the communities we build.",
  },
];

const milestones = [
  { year: "1999", event: "Founded with a vision to redefine luxury living" },
  { year: "2005", event: "Completed our first flagship development" },
  { year: "2012", event: "Expanded to international markets" },
  { year: "2018", event: "Received Excellence in Architecture Award" },
  { year: "2024", event: "Celebrating 25 years of crafting dream homes" },
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
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
                Our Story
              </span>
            </div>
            <h1 className="luxury-heading text-foreground">
              About <span className="text-gold">Aurum</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="luxury-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="font-heading text-3xl text-foreground mb-6">
                A Legacy of <span className="text-gold">Luxury</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 1999, Aurum Residences emerged from a simple yet
                ambitious vision: to create living spaces that transcend the
                ordinary and embrace the extraordinary.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our founder, with decades of experience in premium real estate
                development, recognized that true luxury lies not just in
                opulent finishes, but in the seamless integration of form,
                function, and feeling.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Aurum Residences stands as a testament to that vision,
                with over 15 landmark developments that have become synonymous
                with elegant living in the most prestigious neighborhoods.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border p-8 text-center">
                <Building2 className="w-10 h-10 text-gold mx-auto mb-4" />
                <div className="font-heading text-4xl text-foreground mb-2">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <Users className="w-10 h-10 text-gold mx-auto mb-4" />
                <div className="font-heading text-4xl text-foreground mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Families
                </div>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <Award className="w-10 h-10 text-gold mx-auto mb-4" />
                <div className="font-heading text-4xl text-foreground mb-2">
                  12
                </div>
                <div className="text-sm text-muted-foreground">
                  Industry Awards
                </div>
              </div>
              <div className="bg-gold p-8 text-center">
                <div className="font-heading text-4xl text-charcoal mb-2">
                  25
                </div>
                <div className="text-sm text-charcoal">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="luxury-section bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">
                What Drives Us
              </span>
              <div className="luxury-divider" />
            </div>
            <h2 className="luxury-heading text-foreground">
              Our <span className="text-gold">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="luxury-card p-10 text-center group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="luxury-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="luxury-divider" />
              <span className="text-gold text-sm uppercase tracking-widest">
                Our Journey
              </span>
              <div className="luxury-divider" />
            </div>
            <h2 className="luxury-heading text-foreground">
              Key <span className="text-gold">Milestones</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 mb-8 last:mb-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-gold font-heading text-2xl w-20 flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1 pb-8 border-b border-border last:border-0">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="luxury-section bg-charcoal-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-foreground mb-6">
            Ready to Experience <span className="text-gold">Aurum</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Discover how we can help you find your perfect luxury residence.
          </p>
          <Button variant="luxury" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
