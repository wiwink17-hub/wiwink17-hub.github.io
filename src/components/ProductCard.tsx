import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative overflow-hidden bg-card rounded-sm mb-4 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground tracking-wider uppercase">{category}</p>
        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm font-semibold">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
