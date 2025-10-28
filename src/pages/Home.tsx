import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-fashion.jpg";
import collectionBanner from "@/assets/collection-banner.jpg";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-in-up">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 font-light">Spring/Summer 2024</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            Timeless Elegance
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
            Discover our curated collection of luxury fashion pieces
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Curated Selection
            </p>
            <h2 className="text-4xl font-serif font-bold mb-4">New Arrivals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our latest collection of timeless pieces designed for the modern wardrobe
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Collection Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${collectionBanner})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            The Essentials Collection
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Wardrobe staples designed to last
          </p>
          <Link to="/shop">
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $200</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
