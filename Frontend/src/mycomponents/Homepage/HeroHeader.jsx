import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroHeader() {
  const bgImageSrc = "/Main/cleaning service-bro.png";

  // Function to scroll smoothly to the "quote" section
  const handleScrollToQuote = (event) => {
    event.preventDefault();
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="1" className="py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side (Text Content) */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              Transform Your Space with Our Expert Cleaning Services
            </h1>
            <h2 className="text-xl text-gray-600">Professional and Reliable Cleaning Solutions for Every Need</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" onClick={handleScrollToQuote}>
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Quote
                </Button>
              </a>

              <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                <Link to="/know-more" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side (Background Image) */}
          <div
            className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url('${bgImageSrc}')` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
