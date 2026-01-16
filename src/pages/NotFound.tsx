import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center animate-fade-up">
        <div className="font-heading text-8xl md:text-9xl text-gold mb-6">404</div>
        <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring our luxury residences.
        </p>
        <Button variant="luxury" size="lg" asChild>
          <Link to="/">
            <ArrowLeft size={18} />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
