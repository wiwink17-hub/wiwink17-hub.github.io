import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ChevronLeft } from "lucide-react";
import { products } from "@/data/products";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color");
      return;
    }
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="aspect-square bg-muted rounded-sm overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in-up">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-semibold mb-6">${product.price.toFixed(2)}</p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="text-sm font-semibold mb-3 block tracking-wider">
                COLOR
              </label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm transition-colors ${
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="text-sm font-semibold mb-3 block tracking-wider">
                SIZE
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border text-sm transition-colors ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 space-y-4 text-sm">
              <div className="border-t border-border pt-4">
                <p className="font-semibold mb-2">Product Details</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Premium quality fabric</li>
                  <li>• Made with sustainable materials</li>
                  <li>• Professional dry clean only</li>
                </ul>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold mb-2">Shipping & Returns</p>
                <p className="text-muted-foreground">
                  Free shipping on orders over $200. 30-day return policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
