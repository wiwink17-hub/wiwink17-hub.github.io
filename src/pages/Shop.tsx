import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Dresses", "Jackets", "Outerwear", "Skirts", "Knitwear", "Shoes"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shop Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover timeless pieces crafted with attention to detail and quality
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs tracking-wider"
              >
                {category}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filter & Sort
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        {filteredProducts.length >= 8 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
