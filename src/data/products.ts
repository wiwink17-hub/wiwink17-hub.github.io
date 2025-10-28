import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Black Dress",
    price: 189.00,
    image: product1,
    category: "Dresses",
    description: "Elegant black dress crafted from premium fabric. Perfect for any occasion, featuring a timeless silhouette that flatters every figure.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy"]
  },
  {
    id: "2",
    name: "Tailored White Blazer",
    price: 245.00,
    image: product2,
    category: "Jackets",
    description: "Sophisticated white blazer with impeccable tailoring. A versatile piece that elevates any outfit with its clean lines and modern fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Cream", "Black"]
  },
  {
    id: "3",
    name: "Designer Trench Coat",
    price: 425.00,
    image: product3,
    category: "Outerwear",
    description: "Luxurious trench coat in premium beige fabric. Classic design with contemporary details for the modern wardrobe.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Khaki"]
  },
  {
    id: "4",
    name: "Silk Midi Skirt",
    price: 165.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Flowing silk midi skirt that moves beautifully. Elegant drape and luxurious feel make this a wardrobe essential.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Black", "Emerald"]
  },
  {
    id: "5",
    name: "Cashmere Sweater",
    price: 198.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Ultra-soft cashmere sweater in timeless design. Perfect layering piece for sophisticated everyday style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Charcoal", "Ivory"]
  },
  {
    id: "6",
    name: "Leather Ankle Boots",
    price: 285.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Premium leather ankle boots with subtle heel. Versatile design that complements any outfit.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Cognac"]
  }
];
